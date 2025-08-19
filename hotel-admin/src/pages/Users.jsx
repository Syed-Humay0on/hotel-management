import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Users</h3>
      <ul>
        {users.map((u) => (
          <li key={u._id} className="mb-2">
            <strong>{u.name}</strong> – {u.email} ({u.role})
          </li>
        ))}
      </ul>
    </div>
  );
}

