import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";

const Holy = () => {
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Adjust the interval (in milliseconds) between slides
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [open, setOpen] = useState(false);
  const [dialogText, setDialogText] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <h1 className="Holy-Title">Holy</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Slider {...settings}>
          <div>
            <Grid className="box" container spacing={4}>
              <Grid item xs={6} md={3}>
                <Item className="box-item">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKCIzwvkxuY07GACaCjctEolpsTUMJQ-H0w&usqp=CAU"
                    alt="holy"
                    className="img-sign"
                  />
                  <div className="btn-sign">
                    <Button
                      color="secondary"
                      size="small"
                      onClick={() => {
                        setOpen(true);
                        setDialogText(
                          "Gateway of India: Start your day by visiting the iconic Gateway of India, a historical monument and popular tourist attraction in Mumbai. Enjoy the view of the Arabian Sea and explore the nearby area.Colaba Causeway: After the Gateway of India, head to Colaba Causeway, a bustling street market famous for shopping, street food, and unique finds. Spend some time shopping for souvenirs and trying local delicacies."
                        );
                      }}
                    >
                      View Plan
                    </Button>
                    <Button
                      className="btn-book-sign"
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Book
                    </Button>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid className="box" container spacing={4}>
              <Grid className="box" item xs={6} md={3}>
                <Item className="box-item">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbHInqYf76qY2_ImEHbNpm0WhOv5vNorHeA&usqp=CAU"
                    alt="holy"
                    className="img-sign"
                  />
                  <div className="btn-sign">
                    <Button
                      color="info"
                      size="small"
                      onClick={() => {
                        setOpen(true);
                        setDialogText(
                          "  Marine Drive: Begin your second day by visiting Marine Drive, also known as the Queen's Necklace. Enjoy a leisurely walk along the beautiful promenade and take in the panoramic view of the sea and the city skyline.Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (formerly Prince of Wales Museum): After Marine Drive, visit the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, a magnificent museum showcasing a vast collection of art, artifacts, and historical exhibits."
                        );
                      }}
                    >
                      View Plan
                    </Button>
                    <Button
                      className="btn-book-sign"
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Book
                    </Button>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid className="box" container spacing={4}>
              <Grid item xs={6} md={3}>
                <Item className="box-item">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HLxlrsdYFF0XJkllyMtuBIJTbgB5gqzwcw&usqp=CAU"
                    alt="holy"
                    className="img-sign"
                  />
                  <div className="btn-sign">
                    <Button
                      color="info"
                      size="small"
                      onClick={() => {
                        setOpen(true);
                        setDialogText(
                          "Elephanta Caves: On the third day, take a ferry from the Gateway of India to Elephanta Island and explore the UNESCO World Heritage Site of Elephanta Caves. Marvel at the ancient rock-cut caves and sculptures, including the famous Trimurti statue."
                        );
                      }}
                    >
                      View Plan
                    </Button>
                    <Button
                      className="btn-book-sign"
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Book
                    </Button>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid className="box" container spacing={4}>
              <Grid item xs={6} md={3}>
                <Item className="box-item">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlerWL0rvBC3LKSn2Ird8HgTDP2q7k9CTWw&usqp=CAU"
                    alt="holy"
                    className="img-sign"
                  />
                  <div className="btn-sign">
                    <Button
                      color="info"
                      size="small"
                      onClick={() => {
                        setOpen(true);
                        setDialogText(
                          "Siddhivinayak Temple: Begin your last day in Mumbai with a visit to the renowned Siddhivinayak Temple, a significant Hindu temple dedicated to Lord Ganesha. Seek blessings and experience the spiritual atmosphere"
                        );
                      }}
                    >
                      View Plan
                    </Button>
                    <Button
                      className="btn-book-sign"
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Book
                    </Button>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </div>
        </Slider>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Plan Details</DialogTitle>
          <DialogContent>
            <Typography variant="body1">{dialogText}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default Holy;
