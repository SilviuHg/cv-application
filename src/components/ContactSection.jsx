export default function ContactSection({ contactInfo, contactHandle }) {
  return (
    <div className="formSection">
      <h3>Contact</h3>
      <label>
        First name:
        <input
          name="firstName"
          value={contactInfo.firstName}
          onChange={contactHandle}
          type="text"
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={contactInfo.lastName}
          onChange={contactHandle}
          type="text"
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          value={contactInfo.email}
          onChange={contactHandle}
          type="text"
        />
      </label>

      <label>
        Phone:
        <input
          name="phoneNumber"
          value={contactInfo.phoneNumber}
          onChange={contactHandle}
          type="text"
        />
      </label>
    </div>
  );
}
