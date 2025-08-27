import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Chat from './Container/Chat';
import style from './Container/App.module.css';
import Layout from './Container/Layout';
import { useEffect, useState } from 'react';
import About from './Container/About';
import Classroom from './Container/Classroom';
import Class6 from './Container/Class6th/Class6';
import Maths from './Container/subject/Maths';
import Science from './Container/subject/Science'
import Unit1 from './Container/Class6th/Unit/Unit1';
import Question1 from './Container/Class6th/Unit/Question1';
import Exercise1 from './Container/Class6th/Unit/Exercise/Exercise1';

function App() {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const [subject, setSubject] = useState("Science");   // default subject
  const [grade, setGrade] = useState("Class 9");       // default grade

  const speak = (text) => {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.lang = "hi-IN"; // Hindi, change to "en-IN" if English
    text_speak.volume = 1;
    text_speak.rate = 1.09;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
  };

  const data = async () => {
    try {
      const lastUserMessage = message[message.length - 1].user;
      const url = "https://educationai-u5bl.onrender.com"

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: lastUserMessage,
          subject,
          grade
        })
      });

      const info = await response.json();

      if (info.response) {
        const updatedMessages = [...message];
        updatedMessages[updatedMessages.length - 1].jarvis = info.response;
        setMessage(updatedMessages);
        speak(info.response);
      } else {
        alert("Tutor did not respond.");
      }

    } catch (err) {
      console.error("Frontend Error:", err);
      alert("Server not responding. Try again.");
    }
  }

  useEffect(() => {
    if (message.length > 0 && message[message.length - 1].jarvis === "") {
      data();
    }
  }, [message]);

  const handleOnChange = (e) => setInput(e.target.value);

  useEffect(() => {
    const handleDocumentClick = () => { if (active) setActive(false); };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [active]);

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setMessage([...message, { user: input, jarvis: "" }]);
      setInput("");
    }
  };

  const handleOnClick = (e) => {
    e.stopPropagation();
    setActive(!active);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout active={active} handleOnClick={handleOnClick} />,
      children: [
        { index: true, element: <Chat input={input} handleOnChange={handleOnChange} handleOnKeyDown={handleOnKeyDown} message={message} /> },
        { path: "about", element: <About /> },
        { path: "classroom", element: <Classroom /> },
        { path:"classroom/class6", element:<Class6/> },
        { path:"classroom/class6/maths", element:<Maths/> },
        { path:"classroom/class6/science", element:<Science/> },
        { path:"classroom/class6/maths/unit1", element:<Unit1/> },
        { path:"classroom/class6/maths/unit1/exercise1", element:<Exercise1/> },
        { path:"classroom/class6/maths/unit1/exercise1/question1", element:<Question1/> },
        { path: "*", element: <h1 style={{ textAlign: "center" }}>404 - Page Not Found</h1> }
      ]
    }
  ]);

  return (
    <div className={style.body}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
