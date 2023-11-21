import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import validator from "validator";

function Register() {
  let [workshopData, setWorkshopData] = useState([]);

  let [name, setName] = useState("");
  let [mobile, setMobile] = useState("");
  let [email, setEmail] = useState("");
  let [company, setCompany] = useState("");
  let [workshop, setWorkshop] = useState("");
  let [registerFull, setRegisterFull] = useState(false);

  const getCount = async () => {
    await axios
      .get("http://localhost:8080/getCount", {})
      .then((data) => {
        setWorkshopData(data?.data?.data);
      })
      .catch((err) => console.log(err));

    // response.
  };

  let sendData = () => {
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

      let response = axios.post("http://localhost:8080/register", {
        name,
        mobile,
        email,
        companyName: company,
        workshop,
      });

      response
        .then((data) => {
          if (data.data.success) {
            toast.success("Registration Successful!");
            setName("");
            setMobile("");
            setEmail("");
            setCompany("");
            setWorkshop("");
            getCount();
          } else {
            toast.error(data.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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

      console.log(totalAvailableSeats);
      // Check if the total available seats are zero
      if (totalAvailableSeats === 0) {
        // Display a notification indicating that all seats have been filled
        toast.error(
          "All seats have been filled. Further registrations are not permitted."
        );
        setRegisterFull(true);
      }
    } else {
      setRegisterFull(false);
    }
  }, [workshopData]);

  return (
    <div className="register_container">
      <h1>Register to Attend</h1>

      <div style={{ width: "80%" }}>
        {registerFull ? (
          <>
            <p style={{ textAlign: "center", color: "red" }}>
              Register is full
            </p>

            <input
              class="inp"
              placeholder="Full Name"
              value={name}
              size={"50"}
              onChange={(e) => setName(e.target.value)}
              disabled
            />
            <input
              class="inp"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              disabled
            />
            <input
              class="inp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
            <input
              class="inp"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              disabled
            />

            <select
              class="inp"
              style={{ width: "260px" }}
              value={workshop}
              onChange={(e) => setWorkshop(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Select Workshop
              </option>
              {workshopData?.map((value) => {
                if (value.count > 0) {
                  return (
                    <option value={value.workshop}>{value.workshop}</option>
                  );
                } else {
                  return (
                    <option value={value.workshop} disabled>
                      {value.workshop}
                    </option>
                  );
                }
              })}
            </select>
          </>
        ) : (
          <>
            <input
              class="inp"
              placeholder="Full Name"
              value={name}
              size={"50"}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              class="inp"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              class="inp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              class="inp"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <select
              class="inp"
              style={{ width: "260px" }}
              value={workshop}
              onChange={(e) => setWorkshop(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Select Workshop
              </option>
              {workshopData?.map((value) => {
                if (value.count > 0) {
                  return (
                    <option value={value.workshop}>{value.workshop}</option>
                  );
                } else {
                  return (
                    <option value={value.workshop} disabled>
                      {value.workshop}
                    </option>
                  );
                }
              })}
            </select>

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
          </>
        )}
      </div>
    </div>
  );
}

export default Register;
