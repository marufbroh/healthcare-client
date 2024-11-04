"use server"

import { authKey } from "@/constant/authKey";
import { decodedToken } from '@/utils/jwt';
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

const setAccessToken = (token: string, option?: any) => {
    cookies().set(authKey, token);
    const decodedData = decodedToken(token) as any;

    if (option && decodedData?.role === "PATIENT" && option.redirect) {
        redirect(option.redirect);
    }
    if (option && option.passwordChangeRequired) {
        redirect('/dashboard/change-password');
    }
    if (option && !option.passwordChangeRequired && option.redirect) {
        redirect(option.redirect);
    }
};

export default setAccessToken;