import { useState } from "react";
import "../App.css";

function InstituteForm({ onSave }) {
  const [form, setForm] = useState({
    institute: "",
    reviews: "",
    syllabusUpdated: "",
    practicalLearning: "",
    infrastructure: "",
    overallReview: "",
    name: "",
    mobile: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};

    if (!form.institute.trim()) temp.institute = "Institute name required";
    if (!form.name.trim()) temp.name = "Name required";
    if (!form.mobile.trim()) temp.mobile = "Mobile number is required";
    if (!form.email.trim()) temp.email = "Email required";

    if (form.reviews.length < 10)
      temp.reviews = "Review must be at least 10 characters";

    if (!form.syllabusUpdated) temp.syllabusUpdated = "Required";
    if (!form.practicalLearning) temp.practicalLearning = "Required";

    if (!/^[0-9]{10}$/.test(form.mobile))
      temp.mobile = "Enter valid 10-digit number";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      temp.email = "Invalid email format";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    localStorage.setItem("instituteData", JSON.stringify(form));
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h2>Institute Review Form</h2>

      {[
        { name: "institute", placeholder: "Institute Name" },
        { name: "reviews", placeholder: "Review (min 10 chars)", type: "textarea" },
        { name: "infrastructure", placeholder: "Infrastructure Review" },
        { name: "overallReview", placeholder: "Overall Review" },
        { name: "name", placeholder: "Your Name" },
        { name: "mobile", placeholder: "Mobile Number" },
        { name: "email", placeholder: "Email Address" }
      ].map((field) => (
        <div key={field.name}>
          {field.type === "textarea" ? (
            <textarea
              className="input"
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
            ></textarea>
          ) : (
            <input
              className="input"
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
          )}
          {errors[field.name] && <p className="error">{errors[field.name]}</p>}
        </div>
      ))}

      <div>
        <label>Syllabus Updated?</label>
        <select name="syllabusUpdated" onChange={handleChange} className="input">
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.syllabusUpdated && <p className="error">{errors.syllabusUpdated}</p>}
      </div>

      <div>
        <label>Practical Learning?</label>
        <select name="practicalLearning" onChange={handleChange} className="input">
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.practicalLearning && <p className="error">{errors.practicalLearning}</p>}
      </div>

      <button className="btn" type="submit">Save</button>
    </form>
  );
}

export default InstituteForm;
