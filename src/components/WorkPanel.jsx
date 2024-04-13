export default function WorkPanel({
  workInfo,
  workHandle,
  isActive,
  toggleOn,
  toggleOff,
  submitWork,
}) {
  return (
    <div className="formSection">
      <h3>Work experience</h3>
      {isActive ? (
        <>
          <label>
            Start date:
            <input
              name="companyStart"
              value={workInfo.companyStart}
              onChange={workHandle}
              type="text"
            />
          </label>
          <label>
            End date:
            <input
              name="companyEnd"
              value={workInfo.companyEnd}
              onChange={workHandle}
              type="text"
            />
          </label>

          <label>
            Company name:
            <input
              name="companyName"
              value={workInfo.companyName}
              onChange={workHandle}
              type="text"
            />
          </label>

          <label>
            Position:
            <input
              name="positionName"
              value={workInfo.positionName}
              onChange={workHandle}
              type="text"
            />
          </label>

          <textarea
            name="tasks"
            placeholder="Responsibilities"
            style={{ maxWidth: "350px" }}
            value={workInfo.tasks}
            onChange={workHandle}
          />
          <button onClick={submitWork}>Add</button>
          <button onClick={toggleOff}>Cancel</button>
        </>
      ) : (
        <button onClick={toggleOn}>Add experience</button>
      )}
    </div>
  );
}
