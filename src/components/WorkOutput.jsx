import "../styles/work.css";
export default function WorkOutput({ workItems }) {
  return (
    <>
      <h2 className="work-title">EXPERIENCE</h2>
      {workItems.map((item) => (
        <div key={item.id} className="work-output">
          <p>{item.positionName}</p>
          <p>{item.companyStart}</p>
          <p>{item.companyEnd}</p>
          <p>{item.companyName}</p>
          <p>{item.tasks}</p>
        </div>
      ))}
    </>
  );
}
