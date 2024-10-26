"use client";

import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import ScheduleModal from './components/ScheduleModal';

const SchedulesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
        <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Schedule" />
      </Stack>

      {/* {!isLoading ? (
        <Paper sx={{ height: "100%", width: "100%", my: "16px" }}>
          <DataGrid
            rows={allSpecialties}
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
    );
};

export default SchedulesPage;