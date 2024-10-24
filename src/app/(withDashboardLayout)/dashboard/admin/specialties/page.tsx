import HModal from "@/components/Shared/HModal/HModal";
import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

const SpecialtiesPage = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Button>Create Specialty</Button>
        <HModal/>
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
