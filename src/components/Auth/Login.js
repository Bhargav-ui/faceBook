import {Link} from 'react-router-dom';

const Login = () =>{

    return(
        <>
            <div className="card p-3 shadow border-0">

                <input type="email" className="form-control mt-2" value="" placeholder="Email" />
                <input type="password" className="form-control mt-2" value="" placeholder="Password" />
                <button type="button" className="btn btn-primary btn-block mt-3 mb-2" >Login</button>
                <span className="text-danger"></span>
                <Link to="forgot-password" className="text-primary mt-2 text-center">Forgot Password</Link>
                <hr />
                <button type="button" className="btn btn-success btn-block mt-2" >Create Account</button>
            </div>
        </>
    )
}

export default Login;
