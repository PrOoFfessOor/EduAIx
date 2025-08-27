import { useEffect, useState } from 'react';
import style from '../../App.module.css';

const Question1 = () => {
  const [inp, setInp] = useState('');
  const [question, setQuestion] = useState(
    'Fill in the blanks:\na) 1 lakh = ______ ten thousand\nb) 1 Million = ____ hundred thousand\nc) 1 crore = ____ ten lakh\nd) 1 crore = _____ million\ne) 1 Million = _____ lakh'
  );
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [waitingForStudent, setWaitingForStudent] = useState(false);

  // ✅ Replace with your real API URL
  const url = 'https://your-api-endpoint.com/';

  // 🗣️ Text-to-speech
  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-IN';
    utter.rate = 1.05;
    utter.pitch = 1;
    utter.volume = 1;
    window.speechSynthesis.speak(utter);
  };

  // 🧠 Ask backend AI
  const askAI = async (q) => {
    const prompt = `
You are a kind and friendly school teacher. Explain this step by step like you're teaching a student.
Use simple language and examples. Pause after each main point and end each step with:
"Shall I explain the next part?"

Here is the question:
${q}
    `.trim();

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    const teachingScript = data.response;

    // ✅ Split answer into steps by cue phrase
    const stepsArray = teachingScript
      .split(/Shall I explain the next part\?/i)
      .map((s) => s.trim())
      .filter(Boolean);

    setSteps(stepsArray);
    setStepIndex(0);
    setWaitingForStudent(false);
  };

  // 🔄 Load teaching content when question changes
  useEffect(() => {
    askAI(question);
  }, [question]);

  // 🔁 Speak current step
  useEffect(() => {
    if (!waitingForStudent && stepIndex < steps.length) {
      const current = steps[stepIndex];
      speak(current + '. Shall I explain the next part?');
      setWaitingForStudent(true);
    }
  }, [stepIndex, waitingForStudent]);

  // ⌨️ Handle student reply
  const handleStudentReply = () => {
    const answer = inp.trim().toLowerCase();

    if (
      answer === '' ||
      answer.includes('yes') ||
      answer.includes('ok') ||
      answer.includes('next') ||
      answer.includes('continue')
    ) {
      // 👉 Continue to next step
      if (stepIndex < steps.length - 1) {
        setStepIndex((prev) => prev + 1);
        setWaitingForStudent(false);
      } else {
        speak('Great! That was the last part.');
      }
    } else {
      // ❓ Student asked a new question
      setQuestion(inp);
      setSteps([]);
      setStepIndex(0);
      setWaitingForStudent(false);
    }

    setInp('');
  };

  return (
    <div className={style.containerr}>
      <div className={style.questionn}>👩‍🏫 Q: {question}</div>

      <div className={style.answerr}>
        {steps.slice(0, stepIndex + 1).map((s, i) => (
          <p key={i} className={style.teachingStep}>👉 {s}</p>
        ))}
        {waitingForStudent && stepIndex < steps.length && (
          <p>✋ Do you want me to explain the next part?</p>
        )}
      </div>

      <input
        className={style.inputt}
        placeholder="Type here (or press Enter to continue)..."
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleStudentReply();
        }}
      />
    </div>
  );
};

export default Question1;