"use client"

import AuthButton from "@/components/UI/AuthButton/AuthButton";
import useUserInfo from "@/hooks/useUserInfo";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
const userInfo = useUserInfo();

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          <Box component="span" color="primary.main">
            &lt;
          </Box>
          HealthCare
          <Box component="span" color="primary.main">
            /&gt;
          </Box>
        </Typography>

        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
          {userInfo?.userId && <Typography component={Link} href="/dashboard" >Dashboard</Typography>}
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
