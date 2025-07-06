import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import WaitingRoom from "./Components/WaitingRoom";
import ChatRoom from "./Components/ChatRoom";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

function App() {
  const [conn, setConn] = useState();
  const [messages, setMessages] = useState([]);

  const api = process.env.REACT_APP_BACKEND_URL

  const joinChatRoom = async (username, chatRoom) => {
    try {
      console.log("Attempting to join chat room...");

      const conn = new HubConnectionBuilder()
        .withUrl(`${api}/Chat`)
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("ReceiveMessage", (sender, message) => {
        setMessages((messages) => [...messages, { sender, message }]);
      });

      conn.on("ReceiveSpecificMessage", (sender, message) => {
        setMessages((messages) => [...messages, { sender, message }]);
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatRoom });

      setConn(conn);
    } catch (e) {
      console.log("Error:", e);
    }
  };
  const sendMessages = async (message) => {
    try {
      console.log(message)
      await conn.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center my-52">
      <div className="flex h-10 justify-center font-bold text-lg">
        Welcome To ChatNet!
      </div>
      {!conn ? (
        <WaitingRoom joinChatRoom={joinChatRoom} />
      ) : (
        <ChatRoom messages={messages} sendMessage={sendMessages} />
      )}
    </div>
  );
}

export default App;
