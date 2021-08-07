import { useState} from "react";



function App(props:any) {
  const [cart, setCart] = useState<any>([]);
  const [products, setProducts] = useState<any>([props.books]);
    // {
    //     isbn: 1,
    //   name: "Product 1",
    //   price: 1,
    //   url:
    //     "https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg",
    //   cart: false,
    //   quantity: 1,
    // },
    // {
    //     isbn: 2,
    //   name: "Product 2",
    //   price: 2,
    //   url:
    //     "https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg",
    //   cart: false,
    //   quantity: 1,
    // },
    // {
    //   isbn: 3,
    //   name: "Product 3",
    //   price: 3,
    //   url:
    //     "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   cart: false,
    //   quantity: 1,
    // }

  
  function addtocart(item:any) {
    let cart2 = [...cart]
    cart2.push({ ...item })
    products.map((i:any) => {
      if (i.isbn === item.isbn) {
        i.cart = true
      }
    })
    setCart(cart2)

  }
  function removeFromCart(item:any) {
    let cart2 = cart.filter((i:any) => i.isbn != item.isbn)
    products.map((i:any) => {
      if (i.isbn == item.isbn) {
        i.cart = false
      }
    })
    setCart(cart2)

  }
  function increase(item:any) {
    let x = cart.map((i:any) => {

      if (item.isbn == i.isbn) {
        
        i.quantity += 1
      }
      return i
    })
    setCart(x)

  }
  function decrease(item:any) {
    let x = cart.map((i:any) => {

      if (item.isbn == i.isbn && i.quantity > 1) {
        console.log('hola')
        i.quantity -= 1
      }
      return i
    })
    setCart(x)
  }
  function total() {
    let cost = 0
    cart.map((item:any) => {
      cost += item.price * item.quantity

    })
    return cost;
  }
  return (
    <div className='container mt-2' style={{paddingTop:'10rem'}}>
      <div className='row justify-content-center'>
        {products && products.map((item:any) => (
          <div className='col-3' key={item.isbn}>
            <div className="card"  >
              <img src={item.img} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">
                  {item.title} - $ {item.price}
                </h6>
                {
                  item.cart == false
                  &&
                  <button className='btn btn-primary' onClick={() => addtocart(item)}>
                    Add to cart
                </button>
                }
                {
                  item.cart == true
                  &&
                  <button className='btn btn-success' onClick={() => addtocart(item)}>
                    Added
                </button>
                }
              </div>
            </div>
          </div>

        ))}

      </div>

      <div className='row mt-3'>
        <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((i:any, index:number) => (

                < tr key={i.isbn}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img src={i.url} style={{ width: '4rem' }} />
                  </th>
                  <td>{i.name}</td>
                  <td>
                    ${i.price}
                  </td>
                  <td>
                    <button
                      onClick={() => decrease(i)}
                      className="btn btn-primary btn-sm"
                    >
                      -
                      </button>
                    {i.quantity}
                    <button
                      onClick={() => increase(i)}

                      className="btn btn-primary btn-sm"
                      
                    >
                      +
                      </button>
                  </td>

                  <td>
                    <button onClick={() => removeFromCart(i)} className="btn btn-danger">
                      Remove
                      </button>
                  </td >
                </tr >
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>TOTAL: ${total()}</h4>
        </div>
      </div>
    </div >
  );
}

export default App;