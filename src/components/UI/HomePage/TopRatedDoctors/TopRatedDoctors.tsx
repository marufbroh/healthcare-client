import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Container, Grid2, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import Link from "next/link";

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

      <Container sx={{ margin: "30px auto" }}>
        <Grid2 container spacing={2}>
          {doctors?.map((doctor: any) => (
            <Grid2 key={doctor?.id} size={{ md: 4 }}>
              <Card>
                <Box>
                  <Image
                    src={doctor?.profilePhoto}
                    alt={doctor?.name}
                    height={500}
                    width={500}
                    style={{ height: "288px", objectFit: "cover" }}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor?.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {doctor?.qualification}, {doctor?.designation}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 2 }}
                  >
                    <LocationOnIcon />
                    {doctor?.address}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    paddingBottom: "20px",
                  }}
                >
                  <Button>Book Now</Button>
                  <Button variant="outlined">View Profile</Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
        <Box
          sx={{
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <Button component={Link} href="/doctors" variant="outlined">View All</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
