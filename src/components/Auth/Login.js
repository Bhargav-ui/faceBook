import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {LoginApi } from '../../apis/Login';


const Login = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [apiErrorMsg, setApiErrorMsg] = useState("")

    const history = useHistory()

    
    const loginClicked = () => {

        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if( regex.test(email)  == false ){
            setEmailError("Please enter an email")
        }else{
            setEmailError("")
        }

        if( password.length < 4 ){
            setPasswordError("Please enter your password (min 4 chars) ")
        }else{
            setPasswordError("")
        }

        if( regex.test(email) == true && password.length >= 4){
            LoginApi(email, password).then(
                (response) => {
                    let data = response.data;
                    if( data.result == "failed"){
                        setApiErrorMsg(data.msg)
                    }else{
                        setApiErrorMsg("")
                        localStorage.setItem("user_id", data.data.user_id);
                        history.push("/home")
                    }
                }
            )
        }
        

    }

    return(
        <>
            <div className="card p-3 shadow border-0">

                <input type="email" value={email} onChange={ e => setEmail(e.target.value) } className="form-control mt-2" placeholder="Email" />
                <span className="text-danger">{ emailError }</span>
                
                <input type="password" value={password} onChange={ e => setPassword(e.target.value)}  className="form-control mt-2" placeholder="Password" />
                <span className="text-danger">{ passwordError }</span>
                <button type="button" className="btn btn-primary btn-block mt-3 mb-2" onClick={loginClicked} >Login</button>
                <p className="text-danger" > { apiErrorMsg }</p>
                <Link to="forgot-password" className="text-primary mt-2 text-center">Forgot Password</Link>
                <hr />
                <button type="button" className="btn btn-success btn-block mt-2" >Create Account</button>

                
            </div>
        </>
    )
}

export default Login;
