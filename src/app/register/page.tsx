import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Container
      sx={{
        // display: "flex",
        alignContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form>
              <Grid2 container spacing={3} my={2}>
                <Grid2 size={{ md: 12 }}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid2>
                <Grid2 size={{ md: 6 }}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid2>
                <Grid2 size={{ md: 6 }}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid2>
                <Grid2 size={{ md: 6 }}>
                  <TextField
                    label="Contact Number"
                    type="tel"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid2>
                <Grid2 size={{ md: 6 }}>
                  <TextField
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid2>
              </Grid2>
              <Button
                fullWidth
                sx={{
                  margin: "16px 0px",
                }}
              >
                Register
              </Button>

              <Typography component="p" fontWeight={300} textAlign={"center"}>
                Do you already have an account?{" "}
                <Link href={"/login"}>Login</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
