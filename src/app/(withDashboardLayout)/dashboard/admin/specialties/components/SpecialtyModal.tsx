import HFileUploader from "@/components/Forms/HFileUploader";
import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import HModal from "@/components/Shared/HModal/HModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Grid2, Stack, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await createSpecialty(data).unwrap();
      if (res?.id) {
        toast.success("Specialty created successfully");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <HModal open={open} setOpen={setOpen} title={"Create A New Specialty"}>
      <HForm onSubmit={handleFormSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ md: 6 }}>
            <HInput name="title" label="Title" />
          </Grid2>
          <Grid2 size={{ md: 6 }}>
            <HFileUploader name="file" label="Upload File" />
          </Grid2>
        </Grid2>

        <Button type="submit" fullWidth sx={{ my: 1 }}>
          Create
        </Button>
      </HForm>
    </HModal>
  );
};

export default SpecialtyModal;
