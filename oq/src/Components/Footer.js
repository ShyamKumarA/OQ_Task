import React from "react";

function Footer() {
  return (
    <div className="footer_container">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="./assets/HSSE/Asset7.png"
            alt="map"
            style={{ marginBottom: "9px", width: "30px" }}
          ></img>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ color: "white", fontSize: "18px" }}>Headquarters</h4>
            <p style={{ color: "white", fontSize: "15px" }}>Muscat, Oman</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="./assets/HSSE/Asset8.png"
            alt="map"
            style={{ marginBottom: "9px", width: "30px" }}
          ></img>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ color: "white", fontSize: "18px" }}>Email</h4>
            <p style={{ color: "white", fontSize: "15px" }}>oqhsse@oq.com</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="./assets/HSSE/Asset9.png"
            alt="map"
            style={{ marginBottom: "9px", width: "30px" }}
          ></img>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ color: "white", fontSize: "18px" }}>Phone</h4>
            <p style={{ color: "white", fontSize: "15px" }}>+968 12345678</p>
          </div>
        </div>
      </div>

      <div style={{ border: "1px solid #525252", margin: "25px 0px" }}></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white", fontSize: "12px" }}>
          ©OQ HSSE Symposium 2023.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white", fontSize: "12px" }}> oq.com</p>
          <p style={{ marginLeft: "10px", color: "white" }}>|</p>
          <p style={{ color: "white", fontSize: "12px", marginLeft: "10px" }}>
            @thisisoq
          </p>
          <div
            style={{
              marginLeft: "10px",
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginLeft: "8px" }}
              src="./assets/HSSE/Asset10.png"
              alt="twitter"
            ></img>
            <img
              style={{ marginLeft: "8px" }}
              src="./assets/HSSE/Asset11.png"
              alt="twitter"
            ></img>
            <img
              style={{ marginLeft: "8px" }}
              src="./assets/HSSE/Asset12.png"
              alt="twitter"
            ></img>
            <img
              style={{ marginLeft: "8px" }}
              src="./assets/HSSE/Asset13.png"
              alt="twitter"
            ></img>
            <img
              style={{ marginLeft: "8px" }}
              src="./assets/HSSE/Asset14.png"
              alt="twitter"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
