import HDatePicker from "@/components/Forms/HDatePicker";
import HForm from "@/components/Forms/HForm";
import HTimePicker from "@/components/Forms/HTimePicker";
import HModal from "@/components/Shared/HModal/HModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { modifyPayload } from "@/utils/modifyPayload";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid2 } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);

    try {
      const res = await createSchedule(values);
      if (res?.data?.length) {
        toast.success("Schedules created successfully!!!");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <HModal open={open} setOpen={setOpen} title={"Create A New Schedule"}>
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

export default ScheduleModal;
