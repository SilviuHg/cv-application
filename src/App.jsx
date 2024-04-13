import { useState } from "react";
import "./App.css";
import ContactSection from "./components/ContactSection";
import EducationPanel from "./components/EducationPanel";
import EducationOutput from "./components/EducationOutput";
import WorkPanel from "./components/WorkPanel";
import WorkOutput from "./components/WorkOutput";
import Output from "./components/Output";

let educationItemsId = 0;
let workItemsId = 0;

function App() {
  const [contactInfo, setContactInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@yahoo.com",
    phoneNumber: "+0400 100 200",
  });
  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    title: "",
    startDate: "",
    endDate: "",
  });

  const [workInfo, setWorkInfo] = useState({
    companyStart: "",
    companyEnd: "",
    companyName: "",
    positionName: "",
    tasks: "",
  });

  const [educationItems, setEducationItems] = useState([]);

  const [workItems, setWorkItems] = useState([]);

  const [educationActiveIndex, setEdActiveIndex] = useState(0);

  const [workActiveIndex, setWorkActiveIndex] = useState(0);

  function handleAddEducationItems() {
    setEducationItems([
      ...educationItems,
      {
        id: educationItemsId++,
        schoolName: educationInfo.schoolName,
        title: educationInfo.title,
        startDate: educationInfo.startDate,
        endDate: educationInfo.endDate,
      },
    ]);
    setEdActiveIndex(0);
  }

  function handleAddWorkItem() {
    setWorkItems([
      ...workItems,
      {
        id: workItemsId++,
        companyStart: workInfo.companyStart,
        companyEnd: workInfo.companyEnd,
        companyName: workInfo.companyName,
        positionName: workInfo.positionName,
        tasks: workInfo.tasks,
      },
    ]);
    setWorkActiveIndex(0);
  }

  function handleContactChange(e) {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  }

  function handleEducationChange(e) {
    setEducationInfo({ ...educationInfo, [e.target.name]: e.target.value });
  }

  function handleWorkChange(e) {
    setWorkInfo({ ...workInfo, [e.target.name]: e.target.value });
  }

  return (
    <form>
      <div className="left-section">
        <ContactSection
          contactInfo={contactInfo}
          contactHandle={handleContactChange}
        />
        <EducationPanel
          educationInfo={educationInfo}
          educationHandle={handleEducationChange}
          isActive={educationActiveIndex === 1}
          toggleOn={() => setEdActiveIndex(1)}
          toggleOff={() => setEdActiveIndex(0)}
          submitEducation={handleAddEducationItems}
        />
        <WorkPanel
          workInfo={workInfo}
          workHandle={handleWorkChange}
          isActive={workActiveIndex === 1}
          toggleOn={() => setWorkActiveIndex(1)}
          toggleOff={() => setWorkActiveIndex(0)}
          submitWork={handleAddWorkItem}
        />
      </div>
      <div className="right-section">
        <div className="contact-section">
          <div className="left-info">
            <Output value={contactInfo.firstName} />
            <Output value={contactInfo.lastName} />
          </div>
          <div className="right-info">
            <Output value={contactInfo.email} />
            <Output value={contactInfo.phoneNumber} />
          </div>
        </div>
        <div className="experience-section">
          <EducationOutput educationItems={educationItems} />
          <WorkOutput workItems={workItems} />
        </div>
      </div>
    </form>
  );
}

export default App;
