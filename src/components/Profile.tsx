import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { USER_PROFILE } from "../gqlOperations/Queries";

const Profile = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(USER_PROFILE);
  if (!localStorage.getItem("token")) {
    navigate("/login");
    return <h1>unauthorized</h1>;
  }

  if (loading) return <h2>Profile is loading</h2>;
  if (error) console.log(error);

  return (
    <div className="container my-container">
      {/* <div className="center-align"> */}
      <img
        className="circle"
        style={{ border: "2px solid", marginTop: "10px" }}
        src={`https://robohash.org/${data.user.firstName}.png?size=150x150`}
        alt="pic"
      />
      <h5>
        {data.user.firstName} {data.user.lastName}
      </h5>
      <h6>Email - {data.user.email}</h6>
      {/* </div> */}
      <h3>Your quotes</h3>
      {data.user.quotes.map((quote: any) => {
        return (
          <blockquote>
            <h6>{quote.text}</h6>
          </blockquote>
        );
      })}
    </div>
  );
};

export default Profile;
