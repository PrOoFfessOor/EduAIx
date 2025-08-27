 import { useEffect } from 'react';
import style from '../App.module.css';
import heartImage from './human-heart.png';  // <-- Import your image

const Science = () => {

  const question = "Explain the human heart diagram and its function in Hindi.";  // You can hardcode or modify later

  const url = "https://6c7344b8-8b84-4d2e-a90f-f6b4807b6355-00-1deuo2nb7uq8m.sisko.replit.dev/"; 

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: question })
      });
      const info = await response.json();
      console.log(info.answer);   // you can keep console for debugging
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.science}>
      <h1>Human Heart Diagram</h1>
      <img src={heartImage} alt="Human Heart" width="85%" />
    </div>
  );
};

export default Science;