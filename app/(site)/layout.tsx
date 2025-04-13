import NavBar from "./_components/home/shared/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#dbf5fa]">
      <NavBar />
      {children}
    </div>
  );
}
