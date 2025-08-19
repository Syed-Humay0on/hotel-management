export default function Sidebar({ setSection }) {
  const sections = ["users", "housekeeping", "maintenance", "reports"];
  return (
    <nav className="w-48 bg-gray-100 p-4 h-screen">
      {sections.map((sec) => (
        <div
          key={sec}
          className="py-2 cursor-pointer hover:bg-gray-200"
          onClick={() => setSection(sec)}
        >
          {sec.charAt(0).toUpperCase() + sec.slice(1)}
        </div>
      ))}
    </nav>
  );
}

