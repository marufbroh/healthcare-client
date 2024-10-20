import * as React from "react";
import { Box, Container, Grid2, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography component="h1" variant="h4" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontWeight={400} fontSize={18} mt={2}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontWeight={400} fontSize={18}>
          adn top-quality surgery facilities right here.
        </Typography>
      </Box>

      <Container>
        <Grid2 container spacing={2}>
          {doctors?.map((doctor: any) => (
            <Grid2 key={doctor?.id} size={{ md: 4 }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
