import style from '../../../App.module.css'
import { Link } from 'react-router-dom';
const Exercise1=()=>{
  const questions = ["Q1", "Q2", "Q3", "Q4"];
  return(

    <>
     <ul>{questions.map((question,index)=>(
      <li className={style.subjectList} key={index}>
        <Link to ={`question${(index+1)}`}> {question}</Link>
          </li>
      ))}
      </ul> 
    </>
  )
}
export default Exercise1