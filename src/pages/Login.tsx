import { Link, Route, withRouter } from 'react-router-dom'
import '../styles/Login.css'

function Login(props: any) {


    return (
        <div className="wrapper">
            <div className="card" id="formContent">
            <br/>
                <h4>Login</h4>
                <br/>

                <form action="/">
                    <input type="text" id="email" className="fadeIn second" name="login" placeholder="email" />
                    <br/>
                    <br/>
                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <br/>
                    <br/>
                    <input type="submit" className="btn btn-primary" value="Log In" />
                </form>

                <div id="formFooter">
                    <br/>
                    <a className="underlineHover" href="/register">New User?</a>
                </div>
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>

    )
}

export default withRouter(Login);