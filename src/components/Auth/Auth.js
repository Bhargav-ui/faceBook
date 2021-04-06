
import Login from './Login';
import LoggedinAccounts from './LoggedinAccounts';

const Auth = () => {

    return(

        <div className="container full-height fb-mt-5 fb-bg">
            <div className="row">

                <div className="col-lg-6">
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
