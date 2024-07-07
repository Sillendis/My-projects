import s from "./../Dialogues.module.css";

const MessageItem = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

export default MessageItem;