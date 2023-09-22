import React from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Grid,
  Typography,
} from "@mui/material";
import backgroundImage from "../Assert/banner_banner_1.jpg";
import "./Home.css";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";
import SeatBooking from "./TicketBokking";

const Home = ({
  open,
  handleOpen,
  handleClose,
  preferredSeat,
  handlePreferredSeatChange,
  handleFormSubmit,
  formData,
}) => {
  console.log("form data", formData);
  const handle = (e) => {
    e.preventDefault();
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <div
        className="SearchBar"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="textfield">
          <TextField id="from" label="From" multiline maxRows={4} />
          <TextField id="to" label="To" multiline maxRows={4} />
          <FormControl className="Form-Control">
            <InputLabel id="demo-simple-select-label">
              Preference seat
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={preferredSeat}
              label="Preference"
              onChange={handlePreferredSeatChange}
            >
              <MenuItem value="AC">AC</MenuItem>
              <MenuItem value="NON-AC">NON-AC</MenuItem>
              <MenuItem value="SEMI SLEEPER">SEMI SLEEPER</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="select-date"
            label="Select Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            onClick={handleOpen}
            className="btn-search"
            variant="contained"
            color="secondary"
          >
            Search Bus
          </Button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              Are you sure to submit it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>cancel</Button>
            <Link to="/buslist">
              <Button onSubmit={handle} autoFocus onClick={handleFormSubmit}>
                Submit
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
      <div className="section2">
        <h4>Features</h4>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={12}>
            <Grid item xs={6} md={4}>
              <Item className="section21">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4h3GxUmL9yRemMv25_sLm7GeVkwW1fGlyM3sMxrZKzOofP3hSwfN3-5mpQ&s"
                  alt="holy"
                />
                <div className="para">
                  <Typography variant="p" color="text.secondary">
                    Embark on a spiritual journey like no other with our
                    specially curated religious spot bus tours. Step aboard our
                    comfortable and modern buses, where you'll be welcomed by
                    our friendly and knowledgeable guides who will be your
                    companions throughout this sacred exploration.
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  href="/Holy"
                >
                  Book now
                </Button>
              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item className="section21">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJaH4laIlBGufhnafE-BfSTGgCpJ-L8W7JKET65i6qckRiBma1PsQpNF6eExm_NQOQzE&usqp=CAU"
                  alt="famous"
                />

                <div className="para">
                  <Typography variant="p" color="text.secondary">
                    Get ready to embark on an unforgettable adventure as our
                    buses take you on a journey to explore the most famous and
                    iconic destinations in the region. Step aboard our
                    state-of-the-art buses, where comfort and luxury meet to
                    provide you with a seamless and delightful travel
                    experience.
                  </Typography>
                </div>

                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  href="/Signature"
                >
                  Book now
                </Button>
              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item className="section21">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vTQ1AraQDZjqq1wuQzSGb_LudN6KxK9QRQ&usqp=CAU"
                  alt="trip"
                />

                <div className="para">
                  <Typography variant="p" color="text.secondary">
                    Welcome to a world of seamless travel experiences with our
                    exceptional bus travel services. Our modern fleet of buses
                    is ready to take you on an incredible journey filled with
                    comfort, convenience, and excitement.
                  </Typography>
                </div>
                <Button variant="contained" color="secondary" size="small">
                  Book now
                </Button>
              </Item>
              <br />
              <br />
            </Grid>
          </Grid>
        </Box>
      </div>
      {/* <SeatBooking /> */}
      <Footer />
    </div>
  );
};

export default Home;
