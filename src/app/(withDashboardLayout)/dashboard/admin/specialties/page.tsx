"use client";

import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtiesQuery,
} from "@/redux/api/specialtiesApi";
import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  LinearProgress,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialtyModal";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data: allSpecialties, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialty(id).unwrap();
      if (res?.id) {
        toast.success(`${res?.title} has been deleted!`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => (
        <Box
          sx={{
            display: "flex",
            height: "100%",
          }}
        >
          <Image src={row.icon} width={30} height={30} alt="icon" />
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
          <Delete />
        </IconButton>
      ),
    },
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
        <Paper sx={{ height: "100%", width: "100%", my: "16px" }}>
          <DataGrid
            rows={allSpecialties}
            columns={columns}
            sx={{ border: 0 }}
          />
        </Paper>
      ) : (
        <Box sx={{ width: "100%", my: "16px" }}>
          <LinearProgress />
        </Box>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
