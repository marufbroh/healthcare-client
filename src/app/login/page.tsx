"use client";

import assets from "@/assets";
import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters!"),
});

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values);
      if (res?.data?.accessToken) {
        storeUserInfo(res.data.accessToken);
        toast.success(res.message);
        router.push("/");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
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
                Login HeathCare
              </Typography>
            </Box>
          </Stack>
          <Box>
            <HForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid2 container spacing={3} my={2}>
                <Grid2 size={{ md: 6 }}>
                  <HInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                    required={true}
                  />
                </Grid2>
                <Grid2 size={{ md: 6 }}>
                  <HInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                    required={true}
                  />
                </Grid2>
              </Grid2>
              <Typography component="p" fontWeight={300} textAlign={"end"}>
                Forgot Password?
              </Typography>
              <Button
                type="submit"
                fullWidth
                sx={{
                  margin: "16px 0px",
                }}
              >
                Login
              </Button>

              <Typography component="p" fontWeight={300} textAlign={"center"}>
                Don&apos;t have an account?{" "}
                <Link href={"/register"} className="text-blue-500">
                  Create an account
                </Link>
              </Typography>
            </HForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
