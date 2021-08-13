import { Link, Route, withRouter } from 'react-router-dom'
import '../styles/Login.css'

function Login(props: any) {


    return (
        <div className="wrapper">
            <div className="card" id="formContent">

                <h4>Login</h4>


                <form action="/">
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                    <br/>
                    <br/>
                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <br/>
                    <br/>
                    <input type="submit" className="btn btn-primary" value="Log In" />
                </form>

                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>

    )
}

export default withRouter(Login);