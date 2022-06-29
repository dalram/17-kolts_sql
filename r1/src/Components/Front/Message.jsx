import { useContext } from "react";
import FrontContext from "../../Contexts/FrontContext";

const Message = () => {
  const { message } = useContext(FrontContext);

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
