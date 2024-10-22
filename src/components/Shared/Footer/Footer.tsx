import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/landing_page/facebook.png";
import instagram from "@/assets/landing_page/instagram.png";
import twitter from "@/assets/landing_page/twitter.png";
import linkedin from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="white" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="white" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="white">Medicine</Typography>
          <Typography color="white">Diagnostics</Typography>
          <Typography color="white">NGOs</Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebook} alt="facebook" height={30} width={30} />
          <Image src={instagram} alt="facebook" height={30} width={30} />
          <Image src={twitter} alt="facebook" height={30} width={30} />
          <Image src={linkedin} alt="facebook" height={30} width={30} />
        </Stack>
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>

        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 HeathCare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            color="white"
            component={Link}
            href="/"
            fontWeight={600}
          >
            <Box component="span" color="primary.main">
              &lt;
            </Box>
            HealthCare
            <Box component="span" color="primary.main">
              /&gt;
            </Box>
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
