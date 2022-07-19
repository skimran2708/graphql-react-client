import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GET_ALL_QUOTES } from "../gqlOperations/Queries";

const Home = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  if (!localStorage.getItem("token")) {
    navigate("/login");
    return <h1>Login First</h1>;
  }
  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }
  if (data.quotes.length === 0) return <h2>No Quotes Available</h2>;

  return (
    <div className="container">
      {data.quotes.map((quote: any) => {
        return (
          <blockquote>
            <h6>{quote.text}</h6>
            <p className="right-align">~{quote.by}</p>
          </blockquote>
        );
      })}
    </div>
  );
};

export default Home;
