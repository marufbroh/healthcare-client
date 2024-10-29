"use client";

import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import HSelectField from "@/components/Forms/HSelectField";
import { useGetDoctorQuery } from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctorId: string;
  };
};

const DoctorUpdatePage = ({ params: { doctorId } }: TParams) => {

    const {data, isLoading} = useGetDoctorQuery(doctorId);

    console.log(data);

  const handleFormSubmit = async (values: FieldValues) => {
    // values.doctor.experience = Number(values.doctor.experience)
    // values.doctor.apointmentFee = Number(values.doctor.apointmentFee)
    // const data = modifyPayload(values);
    // try {
    // //   const res = await updateDoctor(data).unwrap();
    // //   if(res?.id){
    // //     toast.success("Doctor Created Successfully!!!");
    // //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const defaultValues = {
    email: "",
    name: "",
    contactNumber: "",
    address: "",
    registrationNumber: "",
    gender: "",
    experience: 0,
    apointmentFee: 0,
    qualification: "",
    currentWorkingPlace: "",
    designation: "",
    profilePhoto: "",
  };

  return (
    <Box>
      <Typography component={"h5"} variant="h5">
        Update Doctor Info
      </Typography>
      <HForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid2 container spacing={2} sx={{ my: 5 }}>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput name="name" label="Name" fullWidth={true} sx={{ mb: 2 }} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HSelectField
              items={Gender}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="apointmentFee"
              type="number"
              label="ApointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
        </Grid2>
        <Button type="submit">Create</Button>
      </HForm>
    </Box>
  );
};

export default DoctorUpdatePage;
