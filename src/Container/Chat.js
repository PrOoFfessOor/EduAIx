import { useEffect, useRef } from 'react';
import Input from './Input';
import style from './App.module.css';

const Chat = ({ input, handleOnKeyDown, handleOnChange, message }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <>
      <div className={style.message}>
        {[...message].map((msg, index) => (
          <div key={index} className={style.messageBlock}>
            <div className={style.userMessage}><strong>You:</strong> {msg.user}</div>
            <div className={style.jarvisMessage}><strong>AI:</strong> {msg.jarvis}</div>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <Input handleOnChange={handleOnChange} input={input} handleOnKeyDown={handleOnKeyDown} />
    </>
  );
};

export default Chat;