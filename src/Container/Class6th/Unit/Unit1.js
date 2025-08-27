import style from '../../App.module.css'
import { Link} from 'react-router-dom';
const Unit1=()=>{
  const Exercises=["Exercise1","Exercise2","Exercise3"]
  return(
    <>
      <ul>
        {Exercises.map((Exercises,index)=>(
      <li className={style.subjectList} key={index}  ><Link to={`exercise${(index+1)}`}>{Exercises}</Link></li>
        ))}
      </ul>
    </>
  )
}
export default Unit1
