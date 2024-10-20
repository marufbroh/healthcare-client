import { Box, Container, Typography } from "@mui/material";

const Specialties = async () => {
    const res = await fetch("http://localhost:5000/api/v1/specialties", {
        next: {
            revalidate: 30
        }
    });
    const specialties = await res.json();

  return (
    <Container>
      <Box
        sx={{
          margin: "100px 0px",
        }}
      >
        <Box>
          <Typography component="h2" variant="h4" fontWeight={600}>
            Explore Treatments across specialties
          </Typography>
          <Typography component="p" fontWeight={400} fontSize={18}>
            Find experienced doctors across all specialties
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialties;
