import React,{useState} from 'react'


const Mirror = () => {
    const [display,setDisplay] = useState("")
  return (
    <div className='mirror'>
        <h3>Enter text for mirror input!!</h3>
        <input onChange={(e) => setDisplay(e.target.value)} value={display} />
        <h3 className='hello'>{display}</h3>
    </div>
  )
}

export default Mirror