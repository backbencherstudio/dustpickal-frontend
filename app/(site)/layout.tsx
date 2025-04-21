"use client";
import NavBar from "./_components/home/shared/Navbar";
import { useAuth } from "@/app/context/AuthContext";
import Loading from "@/app/components/Loading";
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="bg-[#e6f8f9]">
          <NavBar />
          {children}
        </div>
      )}
    </>
  );
}
