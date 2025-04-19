"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
// import { useGetMeMutation } from "../store/api/authApi";
import axios from "axios";
interface AuthContextType {
  user: any;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  // const [getMe, { isLoading }] = useGetMeMutation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      setIsLoading(true);
      const user = await axios.get(`http://localhost:4000/api/auth/me`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhbnZpcmJkY2FsbGluZ25vZGUuanNAZ21haWwuY29tIiwic3ViIjoiY205YXZrOHRvMDAwMHR6MzhnajRpemVudiIsImlhdCI6MTc0NTAzNjk2NiwiZXhwIjoxNzQ1MTIzMzY2fQ.OaRtO9ew-onDy2Q2D63jE_MdU-fescNplBbW_uzM0rY`,
        },
      });
      setIsLoading(false);
      setUser(user?.data?.data);
    } catch (error) {
      console.error("AuthContext - Error fetching user:", error);
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
