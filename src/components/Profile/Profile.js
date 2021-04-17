import {
  faEnvelope,
  faMobile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Nav from "../Home/Nav";
import { isEmailValid } from "../../Utils/generalFunctions";
import { forgotPasswordApi } from "../../apis/Login";
import { useHistory } from "react-router";

const Profile = () => {
  const history = useHistory();
  //  Values
  const [oldPword, setOldPword] = useState("");
  const [newPword, setNewPword] = useState("");
  const [confPword, setConfPword] = useState("");

  // forgot password values
  const [viewForgotPword, setViewForgotPword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [apiMsg, setApiErrorMsg] = useState("");
  const [apiErrorMsgClass, setApiErrorMsgClass] = useState("");

  // Error messages
  const [oldPwordMsg, setOldPwordMsg] = useState("");
  const [newPwordMsg, setNewPwordMsg] = useState("");
  const [confPwordMsg, setConfPwordMsg] = useState("");
  const [changePwordMsg, setChangePwordMsg] = useState("");

  //   Functions
  const changePassword = () => {
    let numberOfErrors = 0;

    if (oldPword.length < 8) {
      numberOfErrors = 1;
      setOldPwordMsg("Min 8 characters");
    } else {
      setOldPwordMsg("");
    }

    if (newPword.length < 8) {
      numberOfErrors = 1;
      setNewPwordMsg("Min 8 characters");
    } else {
      if (newPword != confPword) {
        numberOfErrors = 1;
        setConfPwordMsg("Not matching");
      } else {
        setConfPwordMsg("");
      }
      setNewPwordMsg("");
    }

    if (oldPword == newPword) {
      numberOfErrors = 1;
      setNewPwordMsg("It should not match with old password");
    } else {
      setNewPwordMsg("");
    }

    if (numberOfErrors == 0) {
      console.log("Call api, no errors");
      // userId, old password, new password
    }
  };

  const enableForgotPasswordView = () => {
    setViewForgotPword(true);
  };

  const resetPassword = () => {
    if (isEmailValid(email) == false) {
      setEmailErrorMsg("Enter a valid email");
    } else {
      setEmailErrorMsg("");
      forgotPasswordApi("react app", email).then((response) => {
        console.log(response);
        if (response.data.result == "success") {
          setApiErrorMsgClass("alert alert-success");
          setApiErrorMsg(response.data.msg);
        } else {
          setApiErrorMsgClass("alert alert-danger");
          setApiErrorMsg(response.data.msg);
        }
      });
    }
  };

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="container  fixed-top-padding">
      <Nav />
      <div className="row">
        <div className="col-lg-4">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="media">
                <img
                  className="link-icon img-round"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                  alt=""
                />
                <div className="media-body pl-2">
                  <h2>Hello {localStorage.getItem("user_name")}</h2>
                  <div className="text-primary" onClick={logout}>
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 pb-4 mb-4">
          {/* Profile data */}
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <h4>Your profile data</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 p-2">
                  <FontAwesomeIcon icon={faUser} /> Anji
                </div>
                <div className="col-lg-12 p-2">
                  <FontAwesomeIcon icon={faEnvelope} /> ardream2222@gmail.com
                </div>
                <div className="col-lg-12 p-2">
                  <FontAwesomeIcon icon={faMobile} /> 7022858863
                </div>
              </div>
            </div>
          </div>
          {/* profile data end */}

          {/* Change password */}
          <div className="card shadow border-0 mt-3">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12 mt-2">
                  <label>
                    <small>OLD PASSWORD</small>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={oldPword}
                    placeholder="Old Password"
                    onChange={(e) => setOldPword(e.target.value)}
                  />
                  <span className="text-danger">{oldPwordMsg}</span>
                </div>
                <div className="col-lg-12 mt-2">
                  <label>
                    <small>NEW PASSWORD</small>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={newPword}
                    onChange={(e) => setNewPword(e.target.value)}
                    placeholder="New password"
                  />
                  <span className="text-danger">{newPwordMsg}</span>
                </div>
                <div className="col-lg-12 mt-2">
                  <label>
                    <small>CONFIRM PASSWORD</small>
                  </label>
                  <input
                    type="password"
                    value={confPword}
                    onChange={(e) => setConfPword(e.target.value)}
                    placeholder="Confirm new password"
                    className="form-control"
                  />
                  <span className="text-danger">{confPwordMsg}</span>
                </div>
                <div className="col-lg-12 mt-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={changePassword}
                  >
                    Change Password
                  </button>
                  <span className="text-danger">{changePwordMsg}</span>
                </div>
              </div>
            </div>
          </div>
          {/* CHange password end */}
          {/* forgot password */}
          <div className="card shadow border-0 mt-3">
            <div className="card-body">
              <button
                className="btn btn-danger"
                onClick={enableForgotPasswordView}
              >
                Forgot Password?
              </button>
              {viewForgotPword && (
                <div className="row">
                  <div className="col-lg-12 mt-4">
                    <label>EMAIL</label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                    <span className="text-danger"> {emailErrorMsg}</span>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={resetPassword}
                    >
                      Reset Password
                    </button>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <div className={apiErrorMsgClass}>{apiMsg}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* forgot password end */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
