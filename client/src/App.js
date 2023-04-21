import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios
      .get("/api/workers")
      .then((response) => {
        setStaff(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="staff-list">
      <h1>Staff List</h1>
      {staff.map((worker) => {
        return (
          <div key={worker._id}>
            <h3>{worker.name}</h3>
            <p>{worker.department}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
