import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          color="primary.main"
          variant="h3"
          component="h1"
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography variant="h6" component="p" fontWeight={400} width="50%" my={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          nulla atque dolorem, sunt iste quae doloribus nemo quidem maiores
          nesciunt non ipsam culpa, dignissimos eveniet perspiciatis ut sequi.
          Repellat, voluptatem.
        </Typography>

        <Button>Make Appointment</Button>
        <Button
          variant="outlined"
          sx={{
            marginLeft: "10px",
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Box>Right</Box>
    </Container>
  );
};

export default HeroSection;
