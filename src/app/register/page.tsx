"use client";
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
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await registerPatient(data);

      if (res?.success) {
        toast.success(res.message);
        const result = await loginUser({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo(result.data.accessToken);
          router.push("/");
        }
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
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <HForm onSubmit={handleRegister}>
              <Grid2 container spacing={3} my={2}>
                <Grid2 size={{ md: 12 }}>
                  <HInput label="Name" fullWidth={true} name="patient.name" required={true} />
                </Grid2>
                <Grid2 size={{ md: 6 }}>
                  <HInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="patient.email"
                    required={true}
                  />
                </Grid2>
                <Grid2 size={{ md: 6 }}>
                  <HInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                    required={true}
                  />
                </Grid2>
                <Grid2 size={{ md: 6 }}>
                  <HInput
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                    name="patient.contactNumber"
                    required={true}
                  />
                </Grid2>
                <Grid2 size={{ md: 6 }}>
                  <HInput
                    label="Address"
                    fullWidth={true}
                    name="patient.address"
                    required={true}
                  />
                </Grid2>
              </Grid2>
              <Button
                fullWidth
                type="submit"
                sx={{
                  margin: "16px 0px",
                }}
              >
                Register
              </Button>

              <Typography component="p" fontWeight={300} textAlign={"center"}>
                Do you already have an account?{" "}
                <Link href={"/login"} className="text-blue-500">
                  Login
                </Link>
              </Typography>
            </HForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
