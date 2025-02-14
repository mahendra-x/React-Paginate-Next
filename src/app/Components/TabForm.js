import React, { useState } from "react";
import Interest from "./TabFormsComponents/Interest";
import Profile from "./TabFormsComponents/Profile";
import Settings from "./TabFormsComponents/Settings";

const TabForm = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState({
    name: "Joe Doe",
    age: 29,
    email: "Joe07@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });
  const [errors, setError] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data || !data.name) {
          err.name = "Name is Required";
        }
        if (!data || data.age < 18) {
          err.age = "Age must be greater than 18";
        }
        if (!data || data.email.length < 5) {
          err.email = "Email is not valid";
        }
        // console.log("err", err);
        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interest = "Select atleast one checkbox";
        }

        setError(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => true,
    },
  ];
  // console.log("currentTab", currentTab);
  const Activetab = tabs[currentTab].component;
  const handlePrevClick = () => {
    setCurrentTab((prevState) => prevState - 1);
  };
  const handleNextClick = () => {
    if (tabs[currentTab].validate()) {
      setCurrentTab((prevState) => prevState + 1);
    }
  };
  const handleSubmitClick = () => {
    const convertToJson = JSON.stringify(data)
    alert(convertToJson)
  };
  return (
    <div className="p-10">
      <div className="tab-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={"tab-heading " + (index == currentTab ? "active" : "")}
            onClick={() => tabs[currentTab].validate() && setCurrentTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <Activetab data={data} setData={setData} errors={errors} />
      </div>
      <div className="flex gap-5 pt-5">
        {currentTab > 0 && <button type="button"  className="border-2 border-cyan-800 p-2" onClick={handlePrevClick}>Prev</button>}
        {currentTab < tabs.length - 1 && (
          <button onClick={handleNextClick} className="border-2 border-cyan-800 p-2">Next</button>
        )}
        {currentTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick} className="border-2 border-cyan-800 p-2">Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
