import React, { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";
import { Formik } from "formik";
function ChatHome() {
  const room_name = "cool";
  const [messages, setmessages] = useState([]);
  const client = new w3cwebsocket(
    "ws://127.0.0.1:8000/ws/chat/" + room_name + "/"
  );
  useEffect((messages) => {
    console.log("useEffect ran from chat page");
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = async (chat_message) => {
      const dataFromServer = JSON.parse(chat_message.data);
      console.log("got reply! ", chat_message);

      if (dataFromServer) {
        setmessages((messages) => [...messages, dataFromServer.message]);
      }
    };
  }, []);
  return (
    <div>
      <h6>Room Name : {room_name}</h6>
      {messages &&
        messages.map((message) => {
          return <div key={message.id}>{message}</div>;
        })}
      {/* <Formik
        initialValues={{ name: "jared" }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik> */}
    </div>
  );
}

export default ChatHome;
