import Cookies from "js-cookie";
import instance from "../../pages/api/instance";
import jwt from "jsonwebtoken";

const TOKEN_NAME = process.env.COOKIE_USER || "swedda-login";

export const getCookiesUser = Cookies.get(TOKEN_NAME);

let user;

const Session = {
    setUserFromCookie: () => {
        try {
            const tokenUser = Cookies.get(TOKEN_NAME);
            const verifyUser = jwt.verify(tokenUser, process.env.JWT_TOKENKEY);
            window.localStorage.setItem(TOKEN_NAME, JSON.stringify(verifyUser));
        } catch (error) {
            console.log("Server-Side-Rendering");
        }
    },
    getUser: () => {
        try {
            const userInfoString = window?.localStorage.getItem(TOKEN_NAME);
            user = JSON.parse(userInfoString);
            return user;
        } catch (error) {
            user = undefined;
            return null;
        }
    },
    destroy: (path = "/signin") => {
        Cookies.remove(TOKEN_NAME);
        window.localStorage.removeItem(TOKEN_NAME);
        window.location.replace(path);
    },
    requestLogout: (callback = () => {}) => {
        instance.get("auth/logout").then((res) => {
            Session.destroy();
            callback(res.data);
        });
    },
};

export default Session;
