"use client";

import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialtyModal";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data: allSpecialties, isLoading } = useGetAllSpecialtiesQuery({});

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 100 },
    { field: "icon", headerName: "Icon", width: 100, renderCell: ({row}) => () },
  ];

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>

      {!isLoading ? (
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={allSpecialties}
            columns={columns}
            sx={{ border: 0 }}
          />
        </Paper>
      ) : (
        <Box sx={{ width: "100%", my: "10px" }}>
          <LinearProgress />
        </Box>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
