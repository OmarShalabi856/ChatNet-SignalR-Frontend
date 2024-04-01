import { useState } from "react";
const WaitingRoom = ({joinChatRoom}) => {

    const [username,setUsername] = useState("");
    const [chatRoom,setChatRoom] = useState("");

    return(
        <>
        <form className="flex flex-col w-48 justify-center items-center " onSubmit={(e)=>{
            e.preventDefault();
            joinChatRoom(username,chatRoom)
        }}>
            <div className="flex mt-2">
            <label>Username:</label>
            <input className="border px-1 border-teal-800 rounded mx-2" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            
            <div className="flex mt-2">
            <label>ChatRoom:</label>
            <input className="border px-1 border-teal-800 rounded mx-2" value={chatRoom}  onChange={(e)=>{setChatRoom(e.target.value)}}/>
            </div>
            
             
             <button className="mt-4 bg-teal-800 rounded p-2 text-stone-100">Join Chat!</button>
        </form>
        </>
    )
}

export default WaitingRoom