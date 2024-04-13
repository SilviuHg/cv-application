export default function EducationPanel({
  educationInfo,
  educationHandle,
  isActive,
  toggleOn,
  toggleOff,
  submitEducation,
}) {
  return (
    <div className="formSection">
      <h3>Education</h3>
      {isActive ? (
        <>
          <label>
            School/University:
            <input
              name="schoolName"
              value={educationInfo.schoolName}
              onChange={educationHandle}
              type="text"
            />
          </label>
          <label>
            Title/Degree:
            <input
              name="title"
              value={educationInfo.title}
              onChange={educationHandle}
              type="text"
            />
          </label>

          <label>
            Start date:
            <input
              name="startDate"
              value={educationInfo.startDate}
              onChange={educationHandle}
              type="text"
            />
          </label>

          <label>
            End date:
            <input
              name="endDate"
              value={educationInfo.endDate}
              onChange={educationHandle}
              type="text"
            />
          </label>
          <button onClick={submitEducation}>Add</button>
          <button onClick={toggleOff}>Cancel</button>
        </>
      ) : (
        <button onClick={toggleOn}>Add qualification</button>
      )}
    </div>
  );
}
