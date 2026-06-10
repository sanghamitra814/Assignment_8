function StudentCard({ student, index, toggleStatus }) {
  const isActive = student.status === "Active";

  return (
    <article className="student-card">
      <div className="student-card__top">
        <h4 className="student-card__name">{student.name}</h4>
        <span
          className={`student-card__status ${
            isActive
              ? "student-card__status--active"
              : "student-card__status--inactive"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <div className="student-card__details">
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>College:</strong> {student.college}
        </p>
        <p>
          <strong>Course:</strong> {student.course}
        </p>
      </div>

      <button
        type="button"
        className="student-card__button"
        onClick={() => toggleStatus(index)}
      >
        Toggle Status
      </button>
    </article>
  );
}

export default StudentCard;
