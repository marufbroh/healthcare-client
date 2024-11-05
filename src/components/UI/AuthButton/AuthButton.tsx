"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();
  const userInfo = useUserInfo();
  // console.log({userInfo});

  const handleLogout = () => {
    logoutUser(router);
  };

  return (
    <>
      {userInfo?.userId ? (
        <Button color="error" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button LinkComponent={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
