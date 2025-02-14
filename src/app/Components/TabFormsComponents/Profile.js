import React from "react";

const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    setData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };

  console.log("errors", errors);
  return (
    <div>
      <div>
        <label>Name :</label>
        <input
          type={"text"}
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
        <span className="error">{errors && errors.name}</span>
      </div>

      <div>
        <label>Age :</label>
        <input
          type={"number"}
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
        <span className="error">{errors && errors.age}</span>
      </div>
      <div>
        <label>Email :</label>
        <input
          type={"text"}
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
        <span className="error">{errors && errors.email}</span>
      </div>
    </div>
  );
};

export default Profile;
