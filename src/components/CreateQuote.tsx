import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_QUOTE } from "../gqlOperations/Mutations";
import { GET_ALL_QUOTES, USER_PROFILE } from "../gqlOperations/Queries";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const [createQuote, { loading, error, data }] = useMutation(CREATE_QUOTE, {
    refetchQueries: [
      GET_ALL_QUOTES,
      "GetAllQuotes",
      USER_PROFILE,
      "UserProfile",
    ],
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createQuote({
      variables: {
        text: quote,
      },
    });
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && <div className="green card-panel">{data.quote}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Write your quote here"
        />
        <button className="btn green">create</button>
      </form>
    </div>
  );
};

export default CreateQuote;
