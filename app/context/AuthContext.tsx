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
    getUser: () => Promise<void>;
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
            const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setIsLoading(false);
            setUser(user?.data?.data);
        } catch (error) {
            console.error('AuthContext - Error fetching user:', error);
            setIsLoading(false);
        }
    };
   
    return (
        <AuthContext.Provider value={{ getUser, user, isLoading }}>
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
