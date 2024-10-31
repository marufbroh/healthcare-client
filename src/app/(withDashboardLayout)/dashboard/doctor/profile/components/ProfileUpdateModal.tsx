import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import HSelectField from "@/components/Forms/HSelectField";
import HFullScreenModal from "@/components/Shared/HModal/HFullScreenModal";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { Box, Button, Grid2 } from "@mui/material";
import { FieldValues } from "react-hook-form";
import MultipleSelectChip from "./MultipleSelectChip";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { useState } from "react";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const ProfileUpdateModal = ({ open, setOpen, id }: TProps) => {
  const { data: doctorData, refetch, isSuccess } = useGetDoctorQuery(id);
  const { data: allSpecialties } = useGetAllSpecialtiesQuery({});
  const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState([]);

  const [updateDoctor, { isLoading: updating }] = useUpdateDoctorMutation();

  const submitHandler = async (values: FieldValues) => {
    const specialties = allSpecialties.map((specialtiesId: string) => ({
      specialtiesId,
      isDeleted: false,
    }));

    const excludedFields: Array<keyof typeof values> = [
      "email",
      "id",
      "role",
      "needPasswordChange",
      "status",
      "createdAt",
      "updatedAt",
      "isDeleted",
      "averageRating",
      "review",
      "profilePhoto",
      "registrationNumber",
      "schedules",
      "doctorSpecialties",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );

    updatedValues.specialties = specialties;

    try {
      await updateDoctor({ body: updatedValues, id });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HFullScreenModal open={open} setOpen={setOpen} title="Update Profile">
      <HForm onSubmit={submitHandler} defaultValues={doctorData}>
        <Grid2 container spacing={2} sx={{ my: 5 }}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <HInput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <HInput
              name="email"
              type="email"
              label="Email"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <HInput
              name="contactNumber"
              label="Contract Number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <HInput name="address" label="Address" sx={{ mb: 2 }} fullWidth />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <HInput
              name="registrationNumber"
              label="Registration Number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <HInput
              name="experience"
              type="number"
              label="Experience"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <HSelectField
              items={Gender}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <HInput
              name="apointmentFee"
              type="number"
              label="ApointmentFee"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <HInput
              name="qualification"
              label="Qualification"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <HInput
              name="currentWorkingPlace"
              label="Current Working Place"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <HInput
              name="designation"
              label="Designation"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <MultipleSelectChip
              allSpecialties={allSpecialties}
              selectedIds={selectedSpecialtiesIds}
              setSelectedIds={setSelectedSpecialtiesIds}
            />
          </Grid2>
        </Grid2>
        <Button type="submit" disabled={updating}>Save</Button>
      </HForm>
    </HFullScreenModal>
  );
};

export default ProfileUpdateModal;
