"use client";

import { Box, Button, IconButton, LinearProgress, Paper, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ScheduleModal from "./components/ScheduleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import { Delete } from "@mui/icons-material";
import { ISchedule } from "@/types/schedule";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllSchedulesQuery({});

  const {schedules, meta} = data || {};

  useEffect(() => {
    const updateData = schedules?.map(
       (schedule: ISchedule, index: number) => {
          return {
             sl: index + 1,
             id: schedule?.id,
             startDate: dateFormatter(schedule.startDate),
             endDate: dateFormatter(schedule.endDate),
             startTime: dayjs(schedule?.startDate).format('hh:mm a'),
             endTime: dayjs(schedule?.endDate).format('hh:mm a'),
          };
       }
    );
    setAllSchedule(updateData);
 }, [schedules]);

  const columns: GridColDef[] = [
    { field: 'sl', headerName: 'SL' },
    { field: 'startDate', headerName: 'Date', flex: 1 },
    { field: 'startTime', headerName: 'Start Time', flex: 1 },
    { field: 'endTime', headerName: 'End Time', flex: 1 },
    {
       field: 'action',
       headerName: 'Action',
       flex: 1,
       headerAlign: 'center',
       align: 'center',
       renderCell: ({ row }) => {
          return (
             <IconButton aria-label='delete'>
                <Delete sx={{ color: 'red' }} />
             </IconButton>
          );
       },
    },
 ];

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

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

export default SchedulesPage;
