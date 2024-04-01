 const MessagesContainer = ({messages}) => {
  return (
    <div>
      {messages.map((msg, index) => 
        <table striped bordered>
          <tr key={index}>
            <td>
                {console.log(msg)}
              {msg.message} - @{msg.sender}
            </td>
          </tr>
        </table>
      )}
    </div>
  );
};
export default MessagesContainer
