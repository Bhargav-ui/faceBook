import { useHistory } from "react-router";

const Home = () => {

    const history = useHistory();

    const checkIsUserLoggedIn = () =>{

        if( localStorage.getItem("user_id") == null ){
            history.push("/")
        }

    }

    return(
        <>
            { checkIsUserLoggedIn() }
            <div className="text-center">
                I am loggedin
            </div>
        </>
    )
}

export default Home;
