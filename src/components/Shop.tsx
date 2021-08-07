import { useContext, useEffect, useState} from "react";
import AppContext from "../contexts/AppContext";



function Shop(props:any) {
  const [cart, setCart] = useState<any>([...props.cart]);
  const [products, setProducts] = useState<any>([]);
  const { books } = useContext(AppContext);
  

    
    useEffect(() => {
      if (products) {
          
          setProducts(products);
      }
  }, [cart, products])

  
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
                    <img src={i.img} style={{ width: '4rem' }} />
                  </th>
                  <td>{i.title}</td>
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

export default Shop;