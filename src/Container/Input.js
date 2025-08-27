import style from './App.module.css'
const Input=({input ,handleOnKeyDown ,handleOnChange})=>{
  return (
    <>
      <input 
        className={style.input}
        type="text" placeholder="Ask Anything"
        value={input}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        />
    </>
  )
}
export default Input