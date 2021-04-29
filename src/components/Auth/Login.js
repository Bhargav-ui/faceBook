import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LoginApi } from '../../apis/Login';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [apiErrorMsg, setApiErrorMsg] = useState("")
    const [showSignupDialog, setShowSignupDialog] = useState(false)

    const history = useHistory()

    /* Signup variables begin */
    const [crName, setCrName] = useState("");
    const [crEmail, setCrEmail] = useState("");
    const [crCountryCode, setCrCountryCode] = useState("")
    const [crMobile, setCrMobile] = useState("")
    const [crPword, setCrPword] = useState("")
    const [crConfirmPword, setCrConfirmPword] = useState("")
    const [crGender, setCrgender] = useState("Male")
    const [defaultRadioValue, setDefaultRadioValue] = useState(true)

    const [crNameErMsg, setCrNameErMsg] = useState("");
    const [crEmailErMsg, setCrEmailErMsg] = useState("");
    const [crCountryCodeErMsg, setCrCountryCodeErMsg] = useState("")
    const [crMobileErMsg, setCrMobileErMsg] = useState("")
    const [crPwordErMsg, setCrPwordErMsg] = useState("")
    const [crConfirmPwordErMsg, setCrConfirmPwordErMsg] = useState("")
    const [crGenderErMsg, setCrgenderErMsg] = useState("")
    /* Signup variables end */

    const loginClicked = () => {

        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (regex.test(email) == false) {
            setEmailError("Please enter an email")
        } else {
            setEmailError("")
        }

        if (password.length < 4) {
            setPasswordError("Please enter your password (min 4 chars) ")
        } else {
            setPasswordError("")
        }

        if (regex.test(email) == true && password.length >= 4) {
            LoginApi(email, password).then(
                (response) => {
                    let data = response.data;
                    if (data.result == "failed") {
                        setApiErrorMsg(data.msg);
                    } else {
                        setApiErrorMsg("");
                        localStorage.setItem("user_id", data.data.user_id);
                        localStorage. setItem(
                            "profile_pic",
                            data.data.profile_pic
                        );
                        localStorage.setItem("user_name", data.data.user_name);
                        history.push("/home");
                    }
                }
            )
        }


    }


    const createAccountBtn = () => {
        setShowSignupDialog(true);
    }

    const hideSignupDialog = () => {
        setShowSignupDialog(false);
    }

    const createAccountSubmitted = () => {

        let noOfErros = 0;

        if (crName.length < 2) {
            setCrNameErMsg("Required")
            noOfErros = 1;
        } else {
            setCrNameErMsg("")
        }
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(crEmail)) {
            setCrEmailErMsg("Enter valid email")
            noOfErros = 1;
        } else {
            setCrEmailErMsg("")
        }

        if (crCountryCode.length == "") {
            setCrCountryCodeErMsg("Required")
            noOfErros = 1;
        } else {
            setCrCountryCodeErMsg("")
        }

        if (crMobile.length < 10) {
            setCrMobileErMsg("Required")
            noOfErros = 1;
        } else {
            setCrMobileErMsg("")
        }

        if (crPword.length == 0) {
            setCrPwordErMsg("Required")
            noOfErros = 1;
        } else if (crPword != crConfirmPword) {
            setCrConfirmPwordErMsg("Passwords not matching")
            noOfErros = 1;
        } else {
            setCrConfirmPwordErMsg("");
            setCrPwordErMsg("");
        }

        if (noOfErros == 0) {
            console.log("call api")
        }

    }

    const defaultRadioValueChanged = () => {
        console.log("defaultRadioValueChanged");
    }


    return (
        <>
            <div className="card p-3 shadow border-0">

                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control mt-2" placeholder="Email" />
                <span className="text-danger">{emailError}</span>

                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control mt-2" placeholder="Password" />
                <span className="text-danger">{passwordError}</span>
                <button type="button" className="btn btn-primary btn-block mt-3 mb-2" onClick={loginClicked} >Login</button>
                <p className="text-danger" > {apiErrorMsg}</p>
                <Link to="forgot-password" className="text-primary mt-2 text-center">Forgot Password</Link>
                <hr />
                <button type="button" className="btn btn-success btn-block mt-2" onClick={createAccountBtn}>Create Account</button>
            </div>



           {showSignupDialog &&  <div className="modal fade show fb-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h5 className="modal-title">Signup</h5>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={hideSignupDialog}>
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div className="modal-body">

                            <div className="row">
                                <div className="col-lg-12 mt-3">
                                    <input type="text" className="form-control" placeholder="Name" value={crName} onChange={e => setCrName(e.target.value)} />
                                    <small className="text-danger">{crNameErMsg}</small>
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <input type="text" className="form-control" placeholder="Email" value={crEmail} onChange={e => setCrEmail(e.target.value)} />
                                    <small className="text-danger">{crEmailErMsg}</small>
                                </div>
                                <div className="col-lg-3 mt-3">
                                    <select className="custom-select" value={crCountryCode} onChange={e => setCrCountryCode(e.target.value)} >
                                        <option value="">Select</option>
                                        <option value="91">India</option>
                                        <option value="1">USA</option>
                                    </select>
                                    <small className="text-danger">{crCountryCodeErMsg}</small>
                                </div>
                                <div className="col-lg-9 mt-3">
                                    <input type="text" className="form-control" placeholder="Mobile" value={crMobile} onChange={e => setCrMobile(e.target.value)} />
                                    <small className="text-danger">{crMobileErMsg}</small>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <input type="password" className="form-control" placeholder="Password" value={crPword} onChange={e => setCrPword(e.target.value)} />
                                    <small className="text-danger">{crPwordErMsg}</small>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <input type="password" className="form-control" placeholder="Confirm password" value={crConfirmPword} onChange={e => setCrConfirmPword(e.target.value)} />
                                    <small className="text-danger">{crConfirmPwordErMsg}</small>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <input type="radio" name="gender" value="male" onChange={defaultRadioValueChanged} />&nbsp;&nbsp;Male
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <input type="radio" name="gender" value="female" onChange={e => setCrgender(e.target.value)} />&nbsp;&nbsp;Female
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <input type="radio" name="gender" value="others" onChange={e => setCrgender(e.target.value)} />&nbsp;&nbsp;Others
                                </div>
                                <div className="col-lg-12 mt-4 text-center">
                                    <button className="btn btn-success" onClick={createAccountSubmitted} >Create Account</button>
                                    gender {crGender}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            }
            
        </>
    )
}

export default Login;
