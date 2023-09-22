import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid, Box } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./Buslist.css";
import { Link } from "react-router-dom";
const BusList = ({ formData }) => {
  const buses = [
    {
      id: 1,
      source: "Goa",
      destination: "Bangalore",
      noofseat: 30,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofbed: 10,
      fare: 1000,
      startTime: 16.45,
      endTime: 4.45,
      boardingPoint: ["ab", "cd", "ef"],
      dropingPoint: ["gh", "ij"],
    },
    {
      id: 2,
      source: "Mumbai",
      destination: "Chennai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 30,
      noofbed: 10,
      fare: 1000,
      startTime: 4.45,
      endTime: 16.45,
      boardingPoint: ["ab", "cd", "ef"],
      dropingPoint: ["gh", "ij"],
    },
    {
      id: 3,
      source: "Bangalore",
      destination: "Goa",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 40,
      noofbed: 10,
      fare: 1000,
      startTime: 16.45,
      endTime: 4.45,
      boardingPoint: ["ab", "cd", "ef"],
      dropingPoint: ["gh", "ij"],
    },
    {
      id: 4,
      source: "Kerala",
      destination: "Chennai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 30,
      noofbed: 10,
      fare: 1000,
      startTime: 4.45,
      endTime: 13.45,
      boardingPoint: ["ab", "cd", "ef"],
      dropingPoint: ["gh", "ij"],
    },
    {
      id: 5,
      source: "kerala",
      destination: "mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 30,
      noofbed: 10,
      fare: 1000,
      startTime: 4.45,
      endTime: 13.45,
      boardingPoint: ["ab", "cd", "ef"],
      dropingPoint: ["gh", "ij"],
    },
    {
      id: 6,
      source: "Delhi",
      destination: "Jaipur",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 25,
      noofbed: 8,
      fare: 800,
      startTime: 9.3,
      endTime: 17.3,
      boardingPoint: ["xy", "yz", "zx"],
      droppingPoint: ["st", "uv"],
    },
    {
      id: 7,
      source: "Chennai",
      destination: "Hyderabad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 35,
      noofbed: 12,
      fare: 1200,
      startTime: 14.15,
      endTime: 23.0,
      boardingPoint: ["lm", "mn", "op"],
      droppingPoint: ["qr", "rs"],
    },
    {
      id: 8,
      source: "Kolkata",
      destination: "Patna",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 40,
      noofbed: 15,
      fare: 1100,
      startTime: 10.0,
      endTime: 20.3,
      boardingPoint: ["ef", "gh", "hi"],
      droppingPoint: ["jk", "kl"],
    },
    {
      id: 9,
      source: "Ahmedabad",
      destination: "Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 28,
      noofbed: 9,
      fare: 900,
      startTime: 12.45,
      endTime: 21.15,
      boardingPoint: ["pq", "rs", "tu"],
      droppingPoint: ["vw", "wx"],
    },
    {
      id: 10,
      source: "Lucknow",
      destination: "Allahabad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 20,
      noofbed: 6,
      fare: 700,
      startTime: 7.0,
      endTime: 15.3,
      boardingPoint: ["mn", "op", "qr"],
      droppingPoint: ["st", "uv"],
    },

    {
      id: 11,
      source: "Chandigarh",
      destination: "Shimla",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 22,
      noofbed: 7,
      fare: 750,
      startTime: 8.45,
      endTime: 16.3,
      boardingPoint: ["cd", "de", "ef"],
      droppingPoint: ["fg", "gh"],
    },
    {
      id: 12,
      source: "Jaipur",
      destination: "Udaipur",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 32,
      noofbed: 11,
      fare: 900,
      startTime: 11.0,
      endTime: 19.3,
      boardingPoint: ["ab", "bc", "cd"],
      droppingPoint: ["de", "ef"],
    },
    {
      id: 13,
      source: "Hyderabad",
      destination: "Bangalore",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 38,
      noofbed: 13,
      fare: 1100,
      startTime: 12.3,
      endTime: 22.15,
      boardingPoint: ["lm", "mn", "no"],
      droppingPoint: ["op", "pq"],
    },
    {
      id: 14,
      source: "Pune",
      destination: "Mumbai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 26,
      noofbed: 8,
      fare: 800,
      startTime: 10.45,
      endTime: 18.3,
      boardingPoint: ["uv", "vw", "wx"],
      droppingPoint: ["xy", "yz"],
    },
    {
      id: 15,
      source: "Ahmedabad",
      destination: "Jaipur",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 30,
      noofbed: 9,
      fare: 850,
      startTime: 9.15,
      endTime: 17.0,
      boardingPoint: ["gh", "hi", "ij"],
      droppingPoint: ["kl", "lm"],
    },
    {
      id: 16,
      source: "Kolkata",
      destination: "Varanasi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 40,
      noofbed: 15,
      fare: 1150,
      startTime: 8.3,
      endTime: 18.0,
      boardingPoint: ["op", "pq", "qr"],
      droppingPoint: ["rs", "st"],
    },
    {
      id: 17,
      source: "Mysore",
      destination: "Bangalore",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 25,
      noofbed: 8,
      fare: 800,
      startTime: 9.3,
      endTime: 17.3,
      boardingPoint: ["ij", "jk", "kl"],
      droppingPoint: ["lm", "mn"],
    },
    {
      id: 18,
      source: "Shimla",
      destination: "Manali",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 32,
      noofbed: 11,
      fare: 900,
      startTime: 10.0,
      endTime: 19.3,
      boardingPoint: ["fg", "gh", "hi"],
      droppingPoint: ["ij", "jk"],
    },
    {
      id: 19,
      source: "Shimla",
      destination: "Manali",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 22,
      noofbed: 21,
      fare: 1987,
      startTime: 1.0,
      endTime: 21.3,
      boardingPoint: ["fg", "gh", "hi"],
      droppingPoint: ["ij", "jk"],
    },
    {
      id: 20,
      source: "Kochi",
      destination: "Trivandrum",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 38,
      noofbed: 13,
      fare: 1100,
      startTime: 12.3,
      endTime: 22.15,
      boardingPoint: ["no", "op", "pq"],
      droppingPoint: ["qr", "rs"],
    },
    {
      id: 21,
      source: "Chennai",
      destination: "Coimbatore",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGsv3nWblL2BFUeUKzH6aw1GPHBbBbhsYNg&usqp=CAU",
      noofseat: 26,
      noofbed: 8,
      fare: 800,
      startTime: 10.45,
      endTime: 18.3,
      boardingPoint: ["vw", "wx", "xy"],
      droppingPoint: ["yz", "za"],
    },
  ];

  return (
    <div>
      {formData.map((data, index) => {
        const filteredBuses = buses.filter(
          (bus) =>
            bus.source === data.source && bus.destination === data.destination
        );

        return (
          <div key={index}>
            <h3 className="content-alignment">
              Buses for Source: {data.source}, Destination: {data.destination}
            </h3>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {filteredBuses.length > 0 ? (
                  filteredBuses.map((bus) => (
                    <Grid item xs={6} md={3} key={bus.id}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={bus.img}
                            alt={bus.source}
                          />
                          <CardContent className="CardContent-details">
                            <Typography variant="h6" color="text.secondary">
                              Source: {bus.source}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                              Destination: {bus.destination}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Seat: {bus.noofseat}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Bed: {bus.noofbed}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Fare: {bus.fare}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Start: {bus.startTime}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              End: {bus.endTime}
                            </Typography>
                          </CardContent>
                          <Link to="/booking">
                            <div className="btn-container">
                              <Button
                                size="small"
                                variant="contained"
                                color="error"
                                className="Btn-Add"
                                component="div"
                                href="/booking"
                              >
                                Book
                              </Button>
                            </div>
                          </Link>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                ) : (
                  <p>No buses found for the selected source and destination.</p>
                )}
              </Grid>
            </Box>
          </div>
        );
      })}
    </div>
  );
};

export default BusList;
