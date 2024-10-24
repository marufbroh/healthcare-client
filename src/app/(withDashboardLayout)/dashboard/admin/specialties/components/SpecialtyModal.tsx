import HFileUploader from "@/components/Forms/HFileUploader";
import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import HModal from "@/components/Shared/HModal/HModal";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Grid2, Stack, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      
    } catch (error: any) {
      console.error(error.message)
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
