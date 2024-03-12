import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Messaging.css";

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/message/get")
      .then((res) => {
        console.log(res.data);
        setMessages(res.data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  const handleAddData = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/message/insert", { message: newMessage })
      .then((res) => {
        console.log(res.data);
        setNewMessage("");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/api/message/deleteOne`, {
        data: { _id: id },
      })
      .then((res) => {
        console.log(res.data);
        setMessages(messages.filter((message) => message._id !== id));
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="messaging-container">
      <div className="message-list">
        {messages.map((message) => (
          <div className="message-item" key={message._id}>
            {message.message}
            <button onClick={() => handleDelete(message._id)}>delete</button>
          </div>
        ))}
      </div>
      <input
        className="message-input"
        type="text"
        name="message"
        value={newMessage}
        onChange={handleAddData}
      />
      <button className="send-button" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
};

export default Messaging;
