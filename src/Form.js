import React, { useState } from "react";

function Form() {
  const [recipient, setRecipient] = useState("Bob");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent to ${recipient}: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <label>
        To:{" "}
        <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
          <option value="Bob">Bob</option>
          <option value="Alice">Alice</option>
        </select>
      </label>
      <br />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;
