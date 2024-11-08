import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Specialties = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <Container>
      <Box
        sx={{
          margin: "100px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography component="h2" variant="h4" fontWeight={600}>
            Explore Treatments across specialties
          </Typography>
          <Typography component="p" fontWeight={400} fontSize={18}>
            Find experienced doctors across all specialties
          </Typography>
        </Box>

        <Stack direction="row" gap={4} mt={5}>
          {specialties.slice(0, 6).map((specialty: any) => (
            <Box
              key={specialty?.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245,245,245,1)",
                border: "1px solid rgba(250,250,250,1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid #1586FD",
                  borderRadius: "10px",
                  padding: "40px 10px",
                },
              }}
              component={Link}
              href={`/doctors?specialties=${specialty?.title}`}
            >
              <Image
                src={specialty?.icon}
                width={100}
                height={100}
                alt={specialty?.title}
              />
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={1}>
                  {specialty?.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          <Button variant="outlined">View All</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialties;
