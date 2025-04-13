"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RouteProtectionProps {
  children: React.ReactNode;
  allowedUserType: "user" | "admin";
}

export default function RouteProtection({ children, allowedUserType }: RouteProtectionProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  console.log('user?.type', user?.type)
  console.log('allowedUserType', allowedUserType)
  useEffect(() => {
    if (!isLoading && user) {
      if (user?.type?.toLowerCase() !== allowedUserType.toLowerCase()) {
        // Redirect to home page if user type doesn't match
        router.push("/");
      }
    } else if (!isLoading && !user) {
      // Redirect to login if not authenticated
      router.push("/?mode=login");
    }
  }, [user, isLoading, allowedUserType, router]);   

  // Show nothing while loading or if user type doesn't match
  if (isLoading || !user || user?.type?.toLowerCase() !== allowedUserType.toLowerCase()) {
    return <div>Loading...</div>;
  }

  // Render children if user type matches
  return <>{children}</>;
} 