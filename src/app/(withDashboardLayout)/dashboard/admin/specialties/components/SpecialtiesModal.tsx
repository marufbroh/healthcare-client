import HModal from "@/components/Shared/HModal/HModal";
import { TextField } from "@mui/material";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtiesModal = ({ open, setOpen }: TProps) => {
  return (
    <HModal open={open} setOpen={setOpen} title={"Create Specialties"}>
        <TextField/>
    </HModal>
  );
};

export default SpecialtiesModal;
