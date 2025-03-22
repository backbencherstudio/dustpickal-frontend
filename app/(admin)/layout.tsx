export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <div>THIs is a Admin NAvbar</div>
    {children}
    </div>;
}
