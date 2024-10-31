"use client";
import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfile";
import { Box, Grid2 } from "@mui/material";
import Image from "next/image";
import DoctorInformation from "./components/DoctorInformations";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import { CloudUpload } from "@mui/icons-material";

const Profile = () => {
  const { data, isLoading } = useGetMYProfileQuery({});
  const [updateMyProfile, { isLoading: updating }] =
    useUpdateMYProfileMutation();

  const fileUploadHandler = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));
    const res = await updateMyProfile(formData);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              src={data?.profilePhoto ?? ""}
              height={300}
              width={400}
              alt="User Photo"
            />
          </Box>

          <Box my={3}>
            {updating ? (
              <p>Uploading...</p>
            ) : (
              <AutoFileUploader
                name="file"
                label="Choose Your Profile Photo"
                icon={<CloudUpload />}
                onFileUpload={fileUploadHandler}
                // variant="text"
              />
            )}
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 8 }}>
          <DoctorInformation data={data} />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Profile;
