import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const addStudent = (student) => {
    setStudents((current) => [...current, student]);
  };

  const toggleStatus = (index) => {
    setStudents((current) =>
      current.map((student, idx) =>
        idx === index
          ? {
              ...student,
              status: student.status === "Active" ? "Inactive" : "Active",
            }
          : student
      )
    );
  };

  useEffect(() => {
    console.log("Student list updated:", students.length);
  }, [students]);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="container">
        <header className="page-header">
          <div className="page-header__left">
            <h3 className="page-title">Total Students</h3>
            <span className="student-count">{students.length}</span>
          </div>

          <input
            type="text"
            className="search-input"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </header>

        <StudentForm addStudent={addStudent} />
        <StudentList students={filteredStudents} toggleStatus={toggleStatus} />
      </main>

      <Footer />
    </>
  );
}

export default App;
