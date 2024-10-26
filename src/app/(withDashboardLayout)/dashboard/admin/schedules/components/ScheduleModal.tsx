import HDatePickers from "@/components/Forms/HDatePickers";
import HForm from "@/components/Forms/HForm";
import HModal from "@/components/Shared/HModal/HModal";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid2 } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

const ScheduleModal = ({ open, setOpen }: TProps) => {


    const handleFormSubmit = async (values: FieldValues) => {
        const data = modifyPayload(values);
    
        try {
        //   const res = await createSpecialty(data).unwrap();
        //   if (res?.id) {
        //     toast.success("Specialty created successfully");
        //     setOpen(false);
        //   }
        } catch (error: any) {
          console.error(error.message);
        }
      };
    
      return (
        <HModal open={open} setOpen={setOpen} title={"Create A New Specialty"}>
          <HForm onSubmit={handleFormSubmit}>
            <Grid2 container spacing={2}>
              <Grid2 size={{ md: 12 }}>
               <HDatePickers name="startDate"/>
              </Grid2>
              <Grid2 size={{ md:12 }}>
                
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