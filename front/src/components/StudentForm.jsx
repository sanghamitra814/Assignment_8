import { useState } from "react";

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    college: "",
    course: "",
    status: "Active",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!student.name.trim() || !student.email.trim()) {
      return;
    }

    addStudent(student);

    setStudent({
      name: "",
      email: "",
      college: "",
      course: "",
      status: "Active",
    });
  };

  return (
    <section className="student-form">
      <h2 className="student-form__title">Add Student</h2>

      <form onSubmit={handleSubmit} className="student-form__form">
        <label className="student-form__label">
          Name
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="student-form__input"
            placeholder="Full Name"
          />
        </label>

        <label className="student-form__label">
          Email
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="student-form__input"
            placeholder="Email"
          />
        </label>

        <label className="student-form__label">
          College
          <input
            type="text"
            name="college"
            value={student.college}
            onChange={handleChange}
            className="student-form__input"
            placeholder="College Name"
          />
        </label>

        <label className="student-form__label">
          Course
          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            className="student-form__input"
            placeholder="Course"
          />
        </label>

        <button type="submit" className="student-form__button">
          Add Student
        </button>
      </form>
    </section>
  );
}

export default StudentForm;
