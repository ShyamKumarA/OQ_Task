import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import validator from "validator";

function Register() {
  const [workshopData, setWorkshopData] = useState([]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [registerFull, setRegisterFull] = useState(false);

  const getCount = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getCount", {});
      setWorkshopData(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sendData = async () => {
    try {
      // Basic form validation
      if (!name || !mobile || !email || !company || !workshop) {
        toast.error("Please fill in all fields");
        return;
      }

      // Email validation
      if (!validator.isEmail(email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      const response = await axios.post("http://localhost:8080/register", {
        name,
        mobile,
        email,
        companyName: company,
        workshop,
      });

      if (response.data.success) {
        toast.success("Registration Successful!");
        setName("");
        setMobile("");
        setEmail("");
        setCompany("");
        setWorkshop("");
        getCount();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCount();
  }, []);

  useEffect(() => {
    if (workshopData.length > 0) {
      // Calculate the sum of all counts
      const totalAvailableSeats = workshopData.reduce(
        (sum, value) => sum + value.count,
        0
      );

      // Check if the total available seats are zero
      setRegisterFull(totalAvailableSeats === 0);
    } else {
      setRegisterFull(false);
    }
  }, [workshopData]);

  return (
    <>
      {registerFull ? (
        <div className="register_container">
          <h1>Register to Attend</h1>
          <div style={{ width: "80%" }}>
            <p style={{ textAlign: "center", color: "red" }}>
              Registration is full
            </p>
          </div>
        </div>
      ) : (
        <div className="register_container">
          <h1>Register to Attend</h1>
          <div style={{ width: "80%" }}>
            <input
              className="inp"
              placeholder="Full Name"
              value={name}
              size={"50"}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="inp"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              className="inp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inp"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <select
              className="inp"
              style={{ width: "260px" }}
              value={workshop}
              onChange={(e) => setWorkshop(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Select Workshop
              </option>
              {workshopData?.map((value) => (
                <option
                  key={value.workshop}
                  value={value.workshop}
                  disabled={value.count === 0}
                >
                  {value.workshop}
                </option>
              ))}
            </select>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15px",
              }}
            >
              <button
                onClick={() => sendData()}
                style={{
                  padding: "8px 42px",
                  borderRadius: "29px",
                  border: "none",
                  backgroundColor: "#FF8200",
                  color: "white",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
