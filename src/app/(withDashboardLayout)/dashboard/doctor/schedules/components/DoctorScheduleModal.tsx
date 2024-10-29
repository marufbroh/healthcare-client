import HDatePicker from "@/components/Forms/HDatePicker";
import HForm from "@/components/Forms/HForm";
import HTimePicker from "@/components/Forms/HTimePicker";
import HModal from "@/components/Shared/HModal/HModal";
import { Button, Grid2 } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {

  const handleFormSubmit = async (values: FieldValues) => {
    // values.startDate = dateFormatter(values.startDate);
    // values.endDate = dateFormatter(values.endDate);
    // values.startTime = timeFormatter(values.startTime);
    // values.endTime = timeFormatter(values.endTime);

    try {

    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <HModal open={open} setOpen={setOpen} title={"Create Doctor Schedule"}>
      <HForm onSubmit={handleFormSubmit}>
        <Grid2 container spacing={2} sx={{ width: "400px" }}>
          <Grid2 size={{ md: 12 }}>
            <HDatePicker name="startDate" label="Start Date" />
          </Grid2>
          <Grid2 size={{ md: 12 }}>
            <HDatePicker name="endDate" label="End Date" />
          </Grid2>
          <Grid2 size={{ md: 6 }}>
            <HTimePicker name="startTime" label="Start Time" />
          </Grid2>
          <Grid2 size={{ md: 6 }}>
            <HTimePicker name="endTime" label="End Time" />
          </Grid2>
        </Grid2>

        <Button type="submit" fullWidth sx={{ my: 1 }}>
          Create
        </Button>
      </HForm>
    </HModal>
  );
};

export default DoctorScheduleModal;
