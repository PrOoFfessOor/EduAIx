import style from './App.module.css';
import { Link } from "react-router-dom";

const Subject = () => {
  const subj = ["maths", "science", "english", "hindi","social science ","sanskeit","computer science","physical education","art"];
  return (
    <div className={style.Subject}>
      <h1>Select Subjects</h1>
      <ul>
        {subj.map((subject, index) => (
          <li key={index} className={style.subjectList}>
            <Link to={subject}>{subject}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Subject;