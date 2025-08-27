import style from './App.module.css';
import { Link, Outlet } from "react-router-dom";

const Classroom = () => {
  const classes = ["Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"
  ];
  return (
    <>
      <h1>CLASS</h1>
      <ul>
        {classes.map((classes,index)=>(
      <li className={style.subjectList} key={index}><Link to={`class${(index+6)}`}>{classes}</Link></li>
        ))}
        
      </ul>
      <Outlet />
    </>
  );
};

export default Classroom;