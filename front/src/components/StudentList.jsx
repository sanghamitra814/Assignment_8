import StudentCard from "./StudentCard";

function StudentList({ students, toggleStatus }) {
  return (
    <section className="student-list">
      {students.length === 0 ? (
        <div className="student-list__empty">
          <p>No students have been added yet.</p>
        </div>
      ) : (
        students.map((student, index) => (
          <StudentCard
            key={index}
            index={index}
            student={student}
            toggleStatus={toggleStatus}
          />
        ))
      )}
    </section>
  );
}

export default StudentList;
