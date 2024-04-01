import { useState } from "react";
const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message);
          setMessage("");
        }}
      >
        <input
          className="border px-1 border-teal-800 rounded mx-2"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></input>
        <button className="mt-4 bg-teal-800 rounded p-2 text-stone-100" type="submit" disabled={!message}>
          Send
        </button>
      </form>
    </>
  );
};
export default SendMessageForm;
