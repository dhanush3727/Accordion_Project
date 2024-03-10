import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Profile.css";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const result = await response.json();
      console.log(result);
      if (result) {
        setUserData(result);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleSubmit = () => {
    fetchProfileData();
    setUserName("");
  };

  if (loading) {
    return <p>Loading data please wait</p>;
  }

  return (
    <div className="profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          className="search-username"
          placeholder="Search github Progfile"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <Card user={userData} /> : null}
    </div>
  );
};

export default Profile;
