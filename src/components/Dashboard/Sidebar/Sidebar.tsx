"use client";
import assets from "@/assets";
import { TUserRole } from "@/types";
import { drawerItems } from "@/utils/drawerItems";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {

  return (
    <Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        gap={1}
        my={1}
        direction="row"
        component={Link}
        href={"/"}
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography variant="h6" component="h1" sx={{cursor: "pointer"}}>
          HealthCare
        </Typography>
      </Stack>
      

      <List>
        {drawerItems("admin" as TUserRole).map((item, index) => (
          <SidebarItem key={index} item={item}/>
        ))}
      </List>



    </Box>
  );
};

export default Sidebar;
