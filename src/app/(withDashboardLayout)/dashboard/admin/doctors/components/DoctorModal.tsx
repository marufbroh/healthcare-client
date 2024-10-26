import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import HSelectField from "@/components/Forms/HSelectField";
import HFullScreenModal from "@/components/Shared/HModal/HFullScreenModal";
import { Gender } from "@/types";
import { Button, Grid2 } from "@mui/material";
import React from "react";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = () => {};

  const defaultValues = {
    doctor: {
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
    },
    password: "",
  };

  return (
    <HFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
      <HForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid2 container spacing={2} sx={{ my: 5 }}>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="doctor.email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="doctor.contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="doctor.experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HSelectField
              items={Gender}
              name="doctor.gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="doctor.apointmentFee"
              type="number"
              label="ApointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <HInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid2>
        </Grid2>
        <Button type="submit">Create</Button>
      </HForm>
    </HFullScreenModal>
  );
};

export default DoctorModal;
