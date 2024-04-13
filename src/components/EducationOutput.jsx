import "../styles/education.css";

export default function EducationOutput({ educationItems }) {
  return (
    <>
      <h2 className="education-title">EDUCATION</h2>
      {educationItems.map((item) => (
        <div key={item.id} className="education-output">
          <p>{item.schoolName}</p>
          <p>{item.title}</p>
          <p>{item.startDate}</p>
          <p>{item.endDate}</p>
        </div>
      ))}
    </>
  );
}
