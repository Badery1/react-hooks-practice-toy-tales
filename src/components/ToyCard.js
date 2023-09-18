import React, { useState } from "react";

function ToyCard({ toy, onDelete }) {
  const [likes, setLikes] = useState(toy.likes);

  function handleLikeClick() {
    const updatedLikes = likes + 1;

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("You're not allowed to like this!");
        }
        return res.json();
      })
      .then((updatedToy) => {
        setLikes(updatedToy.likes);
      })
      .catch((error) => console.error("Error:", error.message));
  }
  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something bad happened");
        }
        onDelete(toy.id);
      })
      .catch((error) => console.error("Error:", error.message));
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
