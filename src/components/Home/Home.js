import { useHistory } from "react-router";
import Links from "./Links";
import Nav from "./Nav";
import Wall from "./Wall";
import Contents from "./Contents"
import { useState } from "react";
import Userdata from "./Userdata";

const Home = () => {

    const [email, setEmail] = useState("ardream2222@gmail.com");
    const [password, setPassword] = useState("12345678");
    
    const history = useHistory();

    const checkIsUserLoggedIn = () =>{

        if( localStorage.getItem("user_id") == null ){
            history.push("/")
        }

    }

    return (
      <>
        {checkIsUserLoggedIn()}
        <Nav />
        <div className="container-fluid fixed-top-padding">
          <div className="row">
            <div className="col-lg-3">
              <Links />
            </div>
            <div className="col-lg-6">
              <Wall />
            </div>
            <div className="col-lg-3">
              <Contents />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;
