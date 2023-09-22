import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componenet/Header";
import Home from "./Componenet/Home";
import Signature from "./Componenet/Signature";
import Holy from "./Componenet/Holy";
import Account from "./Componenet/Account";
import SignInSide from "./Componenet/Authentication";
// import SignUp from "./Componenet/SignUp";
import BusList from "./Componenet/BusList";
import SeatBooking from "./Componenet/TicketBokking";
// import CreateStudent from "./Componenet/Sin";
import CreateRegister from "./Componenet/register/create-register";

function App() {
  const [open, setOpen] = useState(false);
  const [preferredSeat, setPreferredSeat] = useState("");
  const [formData, setFormData] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePreferredSeatChange = (event) => {
    setPreferredSeat(event.target.value);
  };

  const handleFormSubmit = () => {
    const newEntry = {
      source: document.getElementById("from").value,
      destination: document.getElementById("to").value,
      preferredSeat,
      date: document.getElementById("select-date").value,
    };

    // Add the new entry to the formData array
    setFormData((prevFormData) => [...prevFormData, newEntry]);

    // Close the dialog after submission
    handleClose();
  };
  console.log("app", formData);
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/Home"
            element={
              <Home
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                preferredSeat={preferredSeat}
                handlePreferredSeatChange={handlePreferredSeatChange}
                handleFormSubmit={handleFormSubmit}
                formData={formData}
              />
            }
          />
          <Route path="/Holy" element=<Holy /> />
          <Route path="/Signature" element=<Signature /> />
          <Route path="/Account" element=<Account /> />
          <Route path="/Login" element=<SignInSide /> />
          <Route path="/Signup" element=<CreateRegister /> />
          <Route path="/buslist" element=<BusList formData={formData} /> />
          <Route
            path="/booking"
            element=<SeatBooking
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
