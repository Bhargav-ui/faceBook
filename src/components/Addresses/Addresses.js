import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { getLocationFromCoords } from "../../apis/GeoLocation";
import Nav from "../Home/Nav";

const Addresses = () => {
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [addresses, setAddresses] = useState(
    JSON.parse(localStorage.getItem("addresses"))
  );

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [landMark, setlandMark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  // Messages
  const [nameMsg, setNameMsg] = useState("");
  const [mobileMsg, setMobileMsg] = useState("");
  const [addressMsg, setAddressMsg] = useState("");
  const [landMarkMsg, setlandMarkMsg] = useState("");
  const [cityMsg, setCityMsg] = useState("");
  const [stateMsg, setStateMsg] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");
  const [apiMsg, setApiMsg] = useState("");

  const showAddAddressFormBtn = () => {
    setShowAddAddressForm(true);
  };

  const hideAddressDialog = () => {
    setShowAddAddressForm(false);
  };

  const accessuserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(userLocation);
    }
  };

  const userLocation = (location) => {
    setLat(location.coords.latitude);
    setLon(location.coords.longitude);
    getLocationFromCoords(
      location.coords.latitude,
      location.coords.longitude
    ).then((response) => {
      console.log(response);
      let data = response.data;
      if (data.status == "OK") {
        console.log(data);
        let address = data.results[0];
        console.log(address);
        setAddress(address.formatted_address); // formatted_addressfield is complete address
        address.address_components.map((component) => {
          component.types.map((type) => {
            if (type == "postal_code") {
              setPincode(component.long_name);
            }
            if (type == "administrative_area_level_1") {
              setState(component.long_name);
            }
            if (type == "administrative_area_level_2") {
              setCity(component.long_name);
            }
          });
        });
      }
    });
  };

  const saveAddress = () => {
    let newAddress = {
      name: name,
      mobile: mobile,
      address: address,
      landMark: landMark,
      city: city,
      state: state,
      pincode: pincode,
      lat: lat,
      lon: lon,
    };
    setAddresses(addresses.push(newAddress));
    localStorage.setItem("addresses", JSON.stringify(addresses));
  };

  return (
    <div className="container fixed-top-padding">
      <Nav />
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-7">
          <div className="card shadow border-0">
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary"
                onClick={showAddAddressFormBtn}
              >
                <FontAwesomeIcon icon={faPlus} /> Add Address
              </button>
              <div className="row">
                {addresses.map((address, i) => (
                  <div className="col-lg-12 mb-4" key={i}>
                    Name: {address.name} <br />
                    Mobile: {address.mobile} <br />
                    Landmark: {address.landMark} <br />
                    City: {address.city} <br />
                    State: {address.state} <br />
                    Pincode: {address.pincode} <br />
                    Directions:
                    <a
                      href={
                        "https://www.google.com/maps?q=" +
                        address.lat +
                        "," +
                        address.lon
                      }
                      target="_blank"
                    >
                      Click to navigate
                    </a>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddAddressForm && (
        <div className="modal fade show fb-modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Address</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hideAddressDialog}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={accessuserLocation}
                    >
                      Use Current Location
                    </button>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <spna className="text-danger">{nameMsg}</spna>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <input
                      type="text"
                      placeholder="Mobile"
                      value={mobile}
                      className="form-control"
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <spna className="text-danger">{mobileMsg}</spna>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      className="form-control"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <spna className="text-danger">{addressMsg}</spna>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <input
                      type="text"
                      placeholder="land mark"
                      value={landMark}
                      className="form-control"
                      onChange={(e) => setlandMark(e.target.value)}
                    />
                    <spna className="text-danger">{landMarkMsg}</spna>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      className="form-control"
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <spna className="text-danger">{cityMsg}</spna>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <select
                      value={state}
                      className="custom-select"
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">Select state</option>
                      <option value="Andhrapradesh">Andhrapradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Karnataka">Karnataka</option>
                    </select>
                    <spna className="text-danger">{stateMsg}</spna>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <input
                      type="text"
                      placeholder="Pincode"
                      value={pincode}
                      className="form-control"
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <spna className="text-danger">{pincodeMsg}</spna>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={saveAddress}
                    >
                      Add Address
                    </button>
                    <spna className="text-danger">{apiMsg}</spna>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addresses;
