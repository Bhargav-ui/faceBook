import { useState } from "react";
import Nav from "../Home/Nav";

const Data = () => {
  const [data, setData] = useState(
    localStorage.getItem("data") == null
      ? []
      : JSON.parse(localStorage.getItem("data"))
  );

  const [name, setName] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [apiMsg, setApiMsg] = useState("");

  const addFiend = () => {
    if (name.length > 1) {
      setNameMsg("");
      data.push(name);
      setData([...data]);
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      setNameMsg("Min 2 characters");
    }
  };

  return (
    <div className="container fixed-top-padding">
      <Nav />
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-7">
          <h2>Add friends names</h2>
          <div className="card shadow border-0 mt-4 p-3">
            <div className="card-data">
              <label>
                <small>FRIEND NAME</small>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your friend name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="text-warning">{nameMsg}</div>
              <button onClick={addFiend} className="btn btn-primary mt-3">
                Add Friend
              </button>
              <div className="text-success mt-3">{apiMsg}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-7">
          {data.map((name, i) => (
            <div className="card shadow border-0 mt-4 p-3" key={i}>
              <div className="card-data"> {name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data;
