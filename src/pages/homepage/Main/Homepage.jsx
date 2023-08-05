import React, { useState } from "react";
// import Header from "../component/Header";
import Clock from "../component/Component/Clock";
import Todo from "../component/Component/Todo";
import Header from "../component/Component/header";
import axios from "axios";
import MySelection from "../../../components/MySelection";

import styled from "styled-components";

const Quotes = () => {
  const [clickedGenre, setClickedGenre] = useState(false);

  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.unsplash.com/photo-1515443744693-d2880a7772db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
  );
  const [quote, setQuote] = useState(
    "It's easy to look genius inside a room full of idiots"
  );
  const [author, setAuthor] = useState("");
  const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";

  const headers = {
    "X-Api-Key": "xaZgJqpbJ8371wFQQjB3DQ==IMXuuKk25l6MjKEZ",
  };

  const Background = styled.div`
    background-image: url("paper.gif");
  `;

  const getQuotes = () => {
    axios
      .get(url, {
        headers,
      })
      .then((response) => {
        const { quote, author } = response?.data?.[0];
        setQuote(quote);
        setAuthor(author);
      });
  };

  // const [type,setType] = useState('')
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div
      className="Homepage"
      style={{
        backgroundImage:
          'url("https://png.pngtree.com/thumb_back/fh260/background/20210430/pngtree-old-retro-vintage-background-paper-image_677109.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1
          style={{
            marginTop: "0rem",
            borderRadius: "5px",
            padding: "15px 25px",
            marginBottom: "0",
            color: "white",
     cursor: "pointer",
          }}
          onClick={() => {
            setClickedGenre(!clickedGenre);
          }}
        >
          Genre
        </h1>

        {(() => {
          if (clickedGenre === true) {
            return (
              <>
                <MySelection />
              </>
            );
          }
        })()}
      </div>

      <Header />
      <Clock />

      <div
        style={{
          width: "100vw",
        }}
      >
        <div
          className="quote-card"
          style={{
            margin: "0 auto",
            borderRadius: ".75rem",
            maxWidth: "40rem",
            marginBottom: "1rem",
            padding: "1.5rem",
            background: "rgba(255,255,255,.5)",
          }}
        >
          <h2
            className="font animate__animated animate__fadeIn"
            style={{ textAlign: "center", color: "#8f6001" }}
          >
            {quote}
          </h2>

          <h4 style={{ textAlign: "center", color: "#6B6130" }}> - {author}</h4>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <button
          id="nxtbtn"
          style={{
            background: "#8F6001",
            color: "white",
          }}
          onClick={getQuotes}
        >
          Next
        </button>
      </div>
      <div
        className="todoform"
        style={{ position: "fixed", bottom: "0.5rem", right: "0.5rem"}}

        // style={{
        //   display: "flex",
        //   justifyContent: "flex-end",
        // }}
      >
        {!showForm && (
          <button onClick={handleShowForm}> Open Todo Form </button>
        )}

        {showForm && <Todo handleClose={handleCloseForm} />}
        {/* {showForm && <button onClick={handleCloseForm}> X </button>} */}
      </div>
    </div>
  );
};

export default Quotes;
