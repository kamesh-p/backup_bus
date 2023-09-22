import React, { useState } from "react";
import "./TicketBooking.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const SeatBooking = () => {
  const [seats, setSeats] = useState(Array(20).fill(false));
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [newDialogOpen, setNewDialogOpen] = useState(false);

  const handleSeatClick = (index) => {
    const newSeats = [...seats];
    newSeats[index] = !newSeats[index];
    setSeats(newSeats);
  };

  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirm = () => {
    // Perform any booking-related actions here
    // ...

    // Close the confirmation dialog box
    handleConfirmClose();

    // Show the new dialog box after confirmation
    setNewDialogOpen(true);
  };

  const handleNewDialogClose = () => {
    setNewDialogOpen(false);
  };

  return (
    <div className="seat-booking">
      <h1>Bus Seat Booking</h1>
      <div className="seats">
        {seats.map((isBooked, index) => (
          <div
            key={index}
            className={`seat ${isBooked ? "booked" : ""}`}
            onClick={() => handleSeatClick(index)}
          >
            {index + 1}
          </div>
        ))}
        <Button
          onClick={handleConfirmOpen}
          className="btn-search"
          variant="contained"
          color="error"
        >
          Book Tickets
        </Button>
        <Dialog
          open={confirmOpen}
          onClose={handleConfirmClose}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              Are you sure you want to book those tickets mentioned?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleConfirmClose}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={handleConfirm}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={newDialogOpen}
          onClose={handleNewDialogClose}
          aria-labelledby="new-dialog-title"
          aria-describedby="new-dialog-description"
        >
          <DialogTitle id="new-dialog-title">Finished</DialogTitle>
          <DialogContent>
            <DialogContentText id="new-dialog-description">
              Booking Completed...Have a Safe Journey.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleNewDialogClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default SeatBooking;
