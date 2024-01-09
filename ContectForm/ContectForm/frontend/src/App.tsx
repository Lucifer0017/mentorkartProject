import { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [values, setValues] = useState({ name: "", number: "", address: "", state: "", city: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      values.name === "" ||
      values.number === "" ||
      values.city === "" ||
      values.state === "" ||
      values.message === "" ||
      values.address === ""
    ) {
      alert("All fields are required!");
    } else {
      await axios.post("http://localhost:8080/api/v1/post", values).then((res) => {
        alert(res.data.message);
      });
      setValues({ name: "", number: "", address: "", state: "", city: "", message: "" });
    }
  };

  return (
    <div className="main d-flex justify-content-center align-items-center ">
      <div className="card-contact py-2 px-3">
        <h1 className="text-center">Contact Form</h1>
        <hr />
        <div className="cont-form d-flex flex-column justify-content-between ">
          <div>
            <h5>Enter your name</h5>
            <input type="text" placeholder="Enter your name" name="name" value={values.name} onChange={handleChange} />
          </div>
          <div>
            <h5>Enter your Phone number</h5>
            <input
              type="text"
              placeholder="Enter your phone number"
              name="number"
              value={values.number}
              onChange={handleChange}
            />
          </div>
          <div>
            <h5>Address</h5>
            <textarea placeholder="Enter your address" name="address" value={values.address} onChange={handleChange} />
          </div>
          <div className="imp-data d-flex justify-content-between ">
            <div>
              <h5>Enter your state</h5>
              <input
                id="imp"
                type="text"
                placeholder="Enter your state"
                name="state"
                value={values.state}
                onChange={handleChange}
              />
            </div>
            <div>
              <h5>Enter your city</h5>
              <input
                id="imp"
                type="text"
                placeholder="Enter your city"
                name="city"
                value={values.city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <h5>Message</h5>
            <input
              type="text"
              placeholder="Enter your message"
              name="message"
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
