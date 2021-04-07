
import Login from './Login';
import LoggedinAccounts from './LoggedinAccounts';
import fbLogo from '../../images/fb.svg';
import { useHistory } from 'react-router';

const Auth = () => {

    const history = useHistory()

    const checkUserLoggedIn = () =>{

        if( localStorage.getItem("user_id") != null ){
            history.push("/home");
        }

    }

    return(

        <div className="container full-height fb-mt-5 fb-bg">
            { checkUserLoggedIn() }
            <div className="row">

                <div className="col-lg-6">
                    <img src={fbLogo} alt="fb-logo" width="200px" />
                    <h2>Recent Logins</h2>
                    <span className="text-secondary">Click your picture or add account</span>
                    <LoggedinAccounts />
                </div>

                <div className="col-lg-6">
                    <Login />
                </div>

            </div>
        </div>
        
    )
}

export default Auth;
