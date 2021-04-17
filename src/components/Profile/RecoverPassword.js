import queryString from "query-string";
import { useState } from "react";
import { resetPasswordApi } from "../../apis/Login";
import { Link } from "react-router-dom";

const RecoverPassword = () => {
  //query parameters
  let params = queryString.parse(window.location.search);
  const [hash, setHash] = useState(params.hash);
  const [ref, setRef] = useState(params.ref);
  // values
  const [pword, setPword] = useState("");
  const [confPword, setCOnfPword] = useState("");
  const [apiSuccess, setApiSuccess] = useState(false);

  // error messages
  const [pwrodMsg, setPwordMsg] = useState("");
  const [confPwrodMsg, setConfPwordMsg] = useState("");
  const [apiMsg, setApiMsg] = useState("");

  const updatePassword = () => {
    if (pword.length < 8) {
      setPwordMsg("Min 8 chars");
    } else {
      setPwordMsg("");
      if (pword != confPword) {
        setConfPwordMsg("Not matching");
      } else {
        // call api
        resetPasswordApi("react app", pword, confPword, ref, hash).then(
          (response) => {
            if (response.data.result == "success") {
              setApiSuccess(true);
            } else {
              setApiSuccess(false);
              setApiMsg(response.data.msg);
            }
          }
        );
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 mt-3">
          <div className="card shadow border-0">
            <div className="card-body">
              <h2 className="text-center">Set new password</h2>
              <div className="row">
                <div className="col-lg-12  mt-3">
                  <label>
                    <small>PASSWORD</small>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="New password"
                    value={pword}
                    onChange={(e) => setPword(e.target.value)}
                  />
                  <span className="text-danger">{pwrodMsg}</span>
                </div>
                <div className="col-lg-12  mt-3">
                  <label>
                    <small>CONFIRM PASSWORD</small>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm password"
                    value={confPword}
                    onChange={(e) => setCOnfPword(e.target.value)}
                  />
                  <span className="text-danger">{confPwrodMsg}</span>
                </div>
                <div className="col-lg-12 mt-3">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={updatePassword}
                  >
                    Update Password
                  </button>
                  <span className="text-danger">{apiMsg}</span>
                  {apiSuccess == true && (
                    <div className="alert alert-success mt-3">
                      password updated successfully.{" "}
                      <Link to="/">Click here to Login</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default RecoverPassword;
