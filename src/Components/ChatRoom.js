import MessagesContainer from './MessagesContainer'
import SendMessageForm from './SendMessageForm';
const ChatRoom=({messages,sendMessage})=>{
    return(
        <div>
            <MessagesContainer messages={messages} />
            <SendMessageForm sendMessage={sendMessage} />
        </div>
    )
}
export default ChatRoom;