import { useState } from "react"

function App() {

const [result, setResult] = useState("")

const handleClick = (e) =>{
   setResult(result.concat(e.target.name))
}

const clear =() =>{
  setResult("")
}

const calculation =()=>{

  try {
     setResult(eval(result).toString()) 
    
  } catch (error) {
    
    setResult("ERROR")
  }
}

  return (
  <>

  <div className="mx-auto container mt-24 bg-slate-800 w-80 rounded-md">
          <p className="text-white text-center pt-2 text-3xl font-bold">Calculator</p>
    <div className="flex items-center justify-center p-4">
      <input className="text-right border-none rounded h-10 pr-3 w-56 " type="text" name="" value={result}  />

    </div>

    <div className="grid grid-rows-3 pb-3">

      <div className="flex items-center justify-center gap-4 p-2  mx-auto ">
      <button onClick={handleClick} name="7" className="rounded bg-gray-500 p-4 shadow-black shadow-md " >7</button>
      <button onClick={handleClick} name="8" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">8</button>
      <button onClick={handleClick} name="9" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">9</button>
      <button onClick={clear} id="clear" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">C</button>
      </div>

      <div className="flex items-center justify-center gap-4">
      <button onClick={handleClick} name="4" className="rounded bg-gray-500 p-4 shadow-black shadow-md "> 4</button>
      <button onClick={handleClick} name="5" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">5</button>
      <button onClick={handleClick} name="6" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">6</button>
      <button onClick={handleClick} name="+" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">+</button>
      </div>

      <div className="flex items-center justify-center gap-4">
      <button onClick={handleClick} name="1" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">1</button>
      <button onClick={handleClick} name="2" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">2</button>
      <button onClick={handleClick} name="3" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">3</button>
      <button onClick={handleClick} name="/" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">/</button>
        </div>

      <div className="flex items-center justify-center gap-4 ">
      <button onClick={handleClick} name="0" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">0</button>
      <button onClick={handleClick} name="*" className="rounded bg-gray-500 p-4 shadow-black shadow-md " >*</button>
      <button onClick={handleClick} name="-" className="rounded bg-gray-500 p-4 shadow-black shadow-md ">-</button>
      <button onClick={calculation} id="calculation"  className="rounded bg-gray-500 p-4 shadow-black shadow-md ">=</button>
       </div>

    </div>
  </div>
  </>
  )
}

export default App
