"use client";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { Box, Grid2 } from "@mui/material";

const Profile = () => {
    const {data, isLoading} = useGetMYProfileQuery({});

     if(isLoading){
        return <p>Loading...</p>
     }

 return (
 <Box>
 <Grid2 container spacing={2}>
<Grid2 size={{xs: 4}}></Grid2>
<Grid2 size={{xs: 8}}></Grid2>
 </Grid2>
 </Box>
 )
};

export default Profile;