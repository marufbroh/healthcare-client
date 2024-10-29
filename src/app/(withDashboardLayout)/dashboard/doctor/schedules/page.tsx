"use client";
import { Box, Button, IconButton, LinearProgress, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DoctorScheduleModal from "./components/DoctorScheduleModal";
import { Delete } from "@mui/icons-material";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { ISchedule } from "@/types/schedule";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";

const DoctorSchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllDoctorSchedulesQuery({});

  const schedules = data?.doctorSchedules;
  const meta = data?.meta;

  useEffect(() => {
    const updateData = schedules?.map((schedule: ISchedule, index: number) => {
      return {
        sl: index + 1,
        id: schedule?.doctorId,
        startDate: dateFormatter(schedule?.schedule?.startDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "startDate", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete">
            <Delete sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Doctor Schedule</Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

      {!isLoading ? (
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
      )}
    </Box>
  );
};

export default DoctorSchedulesPage;
