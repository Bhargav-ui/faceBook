import { useState } from "react";
import Nav from "../Home/Nav";

const Data = () => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [editName, setEditName] = useState("");
  const [editNameMsg, setEditNameMsg] = useState("");
  const [editMsg, setEditMsg] = useState("");
  const [editFriendId, setEditFriendId] = useState("");

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
      var friendJsonData = {
        name: name,
        id: data.length,
      };
      data.push(friendJsonData);
      setData([...data]);
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      setNameMsg("Min 2 characters");
    }
  };

  const deleteFriend = (e) => {
    console.log("Delete clicked");
    var friends = ["a", "b", "c", "d"];
    var newFriends = friends.filter((friend, i) => {
      return i != 2;
    });
    //console.log(e, e.target.attributes);
    var index = e.target.getAttribute("index");
    //console.log(index);
    var newData = data.filter((feeind, i) => {
      return index != i;
    });
    setData([...newData]);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  const deleteFriendNewMethod = (e) => {
    let friendId = e.target.getAttribute("friendid");
    let newFriends = data.filter((friend, i) => {
      return friend.id != friendId;
    });
    setData([...newFriends]);
    localStorage.setItem("data", JSON.stringify(newFriends));
  };

  const editFriend = (e) => {
    setShowUpdate(true);
    let id = e.target.getAttribute("friendid");
    let friendName = "";
    data.map((friend) => {
      if (friend.id == id) {
        friendName = friend.name;
      }
    });
    console.log(friendName);
    setEditName(friendName);
    setEditFriendId(id);
  };

  const updateFriendName = () => {
    if (editName.length <= 1) {
      setEditNameMsg("Min 2 characters");
    } else {
      let newData = data.map((friend) => {
        if (friend.id == editFriendId) {
          friend.name = editName;
        }
        return friend;
      });
      setData([...newData]);
      setShowUpdate(false);
      setEditName("");
      setEditFriendId("");
      localStorage.setItem("data", JSON.stringify(newData));
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

      {showUpdate && (
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-7">
            <div className="card shadow border-0 mt-4 p-3">
              <div className="card-data">
                <label>
                  <small>Friend Name</small>
                </label>
                <input
                  type="text"
                  placeholder="Friend name"
                  value={editName}
                  className="form-control"
                  onChange={(e) => setEditName(e.target.value)}
                />
                <div className="text-warning">
                  <small>{editNameMsg}</small>
                </div>
                <button
                  type="button"
                  className="btn btn-success mt-4"
                  onClick={updateFriendName}
                >
                  Update Name
                </button>
                <div className="text-success">
                  <small>{editMsg}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-7">
          {data.map((friend, i) => (
            <div className="card shadow border-0 mt-4 p-3" key={i}>
              <div className="card-data">
                <div className="row">
                  <div className="col-lg-9">{friend.name}</div>
                  <div className="col-lg-3 text-right">
                    <span
                      friendid={friend.id}
                      className="fb-pointer"
                      onClick={editFriend}
                    >
                      Edit
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span
                      friendid={friend.id}
                      className="fb-pointer"
                      onClick={deleteFriendNewMethod}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data;
