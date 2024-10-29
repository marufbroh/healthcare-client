"use client"
import { Box, Button, LinearProgress, Paper } from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const DoctorSchedulesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
 return (
    <Box>
    <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
    <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

    {/* {!isLoading ? (
      <Paper sx={{ height: "100%", width: "100%", my: "16px" }}>
        <DataGrid
          rows={allSchedule}
          columns={columns}
          sx={{ border: 0 }}
          hideFooter={true}
        />
      </Paper>
    ) : (
      <Box sx={{ width: "100%", my: "16px" }}>
        <LinearProgress />
      </Box>
    )} */}
  </Box>
 )
};

export default DoctorSchedulesPage;