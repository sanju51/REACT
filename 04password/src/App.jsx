import {useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const[length,setlength]=useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const[characters,setCharacters]=useState(false)
  const[password,setpassword]=useState("")
  const passwordRef=useRef(null)


  

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="QWERTTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed) str+="0123456789"
    if(characters) str+="!@#$%^&*(){}[]`-_+"

    for(let i=1;i<=length;i++){
     let ch=Math.floor(Math.random()*str.length+1)
    
     pass+=str.charAt(ch)
    }
    setpassword(pass)
  }
,[length,numberAllowed,characters,setpassword])

const clipboard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,7)
  window.navigator.clipboard.writeText(password)
  
},[password])

useEffect(()=>{
  passwordgenerator()
},[length,numberAllowed,characters,passwordgenerator])

  return (
    <div className="w-full max-w-md mx-auto mt-24 bg-gray-900 text-orange-500 rounded-lg shadow-lg px-6 py-6">
  <h1 className="text-white text-3xl font-semibold text-center mb-4 py-3">
    Password generator
  </h1>
  <div className="flex items-center bg-white rounded-md overflow-hidden shadow-inner">
    <input
      type="text"
      value={password}
      readOnly
      placeholder="Password"
      className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 outline-none"
      readOnly
      ref={passwordRef}
    />

    <button 
    onClick={clipboard}
    className='outline-none bg-blue-700 text-white px-6 py-3 shrink-0 '>Copy</button>  
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-2 py-2">
        <input type="range" min={8}
        max={50}
        value={length}
        onChange={(e)=>{
          setlength(e.target.value)
        }}
        className='cursor-pointer'/>
        <label>Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type='checkbox'
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>{
          setnumberAllowed((prev)=>!prev);
        }
        } />
        <label>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type='checkbox'
        defaultChecked={characters}
        id="characterInput"
        onChange={()=>{
          setCharacters((prev)=>!prev);
        }
        } />
        <label>Character</label>
      </div>
      
    </div>
</div>
    
  )
}

export default App
