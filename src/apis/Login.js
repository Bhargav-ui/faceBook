import axios from "axios";

export const LoginApi = (email, password) => {

    const form = new FormData();
    form.append("source", "webiste");
    form.append("signinSrEmail", email);
    form.append("signinSrPassword", password);

    return axios.post("https://www.edstaack.com/api/learning/signin-jarvish.php", form);
}
