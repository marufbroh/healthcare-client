"use client";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { Box, Grid2, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

const StyledInformationBox = styled(Box)(({ theme }) => ({
    background: '#f4f7fe',
    borderRadius: theme.spacing(1),
    width: '45%',
    padding: '8px 16px',
    '& p': {
       fontWeight: 600,
    },
 }));

const Profile = () => {
  const { data, isLoading } = useGetMYProfileQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(data);

  return (
    <Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 4 }}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              src={data?.profilePhoto ?? ""}
              height={300}
              width={400}
              alt="User Photo"
            />
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 8 }}>
          <Typography variant="h4" color="primary.main">
            Basic Information
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            flexWrap={"wrap"}
          >
            <StyledInformationBox>
              <Typography color="secondary">Role</Typography>
              <Typography color="secondary">Admin</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography color="secondary">Role</Typography>
              <Typography color="secondary">Admin</Typography>
            </StyledInformationBox>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Profile;
