import { Link } from "react-router-dom";
import style from '../App.module.css'
const Maths = () => {
  const units = [
    "Unit 1","Unit 2","Unit 3","Unit 4","Unit 5","Unit 6","Unit 7","Unit 8","Unit 9","Unit 10","Unit 11","Unit 12","Unit 13","Unit 14","Unit 15",
  ];
  return (
    <>
      <ul >
        {units.map((unit,index)=>(
        <li className={style.subjectList} key={index}><Link to ={`unit${(index+1)}`}>{unit}</Link></li>
        ))}
      </ul>
    </>
  )
}
  
export default Maths;