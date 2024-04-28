import React, { useState } from "react";


function App() {
  const [fname, setfName] = useState("")

  const [lname, setlName] = useState("")
  
  function handlefChange(event) {
    // console.log("change")
    setfName(event.target.value)
  }

  function handlelChange(event){
    // console.log("change")
    setlName(event.target.value)

  }


  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form>
        <input 
        name="fName" 
        placeholder="First Name"
        value={fname} 
        onChange={handlefChange}
        />
        <input 
        name="lName" 
        placeholder="Last Name"
        value={lname} 
        onChange={handlelChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
