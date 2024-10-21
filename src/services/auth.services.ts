import { authKey } from "@/constant/authKey"
import { setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = (accessToken: string) => {
    return setToLocalStorage(authKey, accessToken);
}