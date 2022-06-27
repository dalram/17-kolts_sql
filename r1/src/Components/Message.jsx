import { useContext } from "react";
import ScootersContext from "../Contexts/ScootersContext";

const Message = () => {
  const { message } = useContext(ScootersContext);

  if (message === null) {
    return;
  }
  return (
    <div className="show-message">
      <div className={`message-${message.type}`}>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
