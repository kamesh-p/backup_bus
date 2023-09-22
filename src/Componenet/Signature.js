import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Paper } from "@mui/material";
import "./Signature.css";
function Signature() {
  const settings = {
    dots: true,
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
    padding: theme.spacing(1),
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
      <h2>Explore TamilNadu</h2>

      <Box sx={{ flexGrow: 1 }}>
        <Slider {...settings}>
          <div>
            <Grid className="box" container spacing={4}>
              <Grid item xs={6} md={3}>
                <Item className="box-item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg"
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
                          "Begin your day by visiting Fort St. George, the first English fortress in India, and explore the Fort Museum that houses artifacts from the colonial era. Visit Kapaleeshwarar Temple, a stunning Dravidian-style temple dedicated to Lord Shiva"
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
                    src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/28160317/Madurai-feature-compressed.jpg"
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
                          " Visit Thirumalai Nayakkar Palace, an elegant palace with a fusion of Dravidian and Islamic architecture. Explore Gandhi Memorial Museum, which exhibits artifacts related to Mahatma Gandhi's life and the Indian independence struggle. Take a boat ride in the Vaigai River and admire the panoramic views of the city from the water."
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6VCDCkA2fOzeTc89ih_9_DcDooYm0j5o3A&usqp=CAU"
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
                          "Visit the Sri Lakshmi Golden Temple, a stunning temple made of pure gold, known for its intricate architecture and spiritual significance. Explore the Government Vellore Museum, which houses a diverse collection of sculptures, ancient relics, and art pieces. Relax at the beautiful Jalakandeswarar Temple Tank and enjoy the serene surroundings."
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyk0Hn_hPlIg1qt7_dl6Fb5dt1Q78DXPInw&usqp=CAU"
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
                          "Visit the Kanyakumari Temple, dedicated to the goddess Devi Kanya Kumari, and experience the spiritual ambiance. Explore the Thiruvalluvar Statue, a 133-feet tall statue of the renowned Tamil poet Thiruvalluvar, situated on a small island. Visit the Gandhi Mandapam and pay tribute to Mahatma Gandhi, who spent time meditating in Kanyakumari."
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
      <h2 className="h2-mumbai">Explore Mumbai</h2>
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
}

export default Signature;
