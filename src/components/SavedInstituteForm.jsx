import "../App.css";

const SavedInstituteForm = ({ data }) => {
  if (!data)
    return <p className="nodata">No data saved yet.</p>;

  return (
    <div className="card">
      <h2>{data.institute}</h2>

      <p><b>Review:</b> {data.reviews}</p>
      <p><b>Syllabus Updated:</b> {data.syllabusUpdated}</p>
      <p><b>Practical Learning:</b> {data.practicalLearning}</p>
      <p><b>Infrastructure:</b> {data.infrastructure}</p>
      <p><b>Overall Review:</b> {data.overallReview}</p>

      <hr />

      <h3>Your Info</h3>
      <p><b>Name:</b> {data.name}</p>
      <p><b>Mobile:</b> {data.mobile}</p>
      <p><b>Email:</b> {data.email}</p>
    </div>
  );
};

export default SavedInstituteForm;
