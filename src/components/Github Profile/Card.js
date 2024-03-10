import React from "react";

const Card = ({ user }) => {
  const {
    avatar_url,
    name,
    login,
    created_at,
    followers,
    following,
    public_repos,
    message,
  } = user;

  const createdDate = new Date(created_at);
  return (
    <div className="profileCard-container">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      {name || login ? (
        <div className="name-container">
          <a href={`https://github.com/${login}`} target="_blank">
            {name || login}
          </a>
          <p>
            User Joined on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </p>
        </div>
      ) : (
        <p className="error">User {message}</p>
      )}
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
