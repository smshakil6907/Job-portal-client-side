import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-beryl.vercel.app",
  withCredentials: true,
});

export default function UseAxiosSecure() {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in interceptor", error.status);

        if (error.status === 401 || error.status === 403) {
          //   console.log("needed to logOut the user");
          signOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
}
