----------- Challange to display fname and lname --------------


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

* You might have noticed through this experience that we have so many functions and we have to seperate const's 
* When you create a contacat app or some sort of input these pieces of information are associated with each other
the fname and lname probably should belong inside same javaScript object, so how can we do that.

* How do we mangage a more complex piece of state.
we can use useState to store object of storing a simple value

* How colud we know which input actually triggered the handleChange?
Notice in our input we've got the property or attribute called name and this sets it to a particular value that we can check for.

* But notice these input not showing what i am typing what's going on?
Remember the "value" attribute inside input is controlled components so what they're showing inside <h1></h1> is set to the fullName.fName
and we haven't actually got a way to set that full name yet.


* This will not work because when i type in fname input firtst then it show the fname like this "Hello Kashif"
but as soon as i typed in lname then it will delete the fname and show like this "Hello Abdullah"
this is because it delete the previous value we can see this by using react dev tool go to inspect, components
so what we doing is each time we are calling setFullName we're replacing the entire object of {fname: "", lname: ""} with the only 
one of them.

function handleChange(event) {
    const newValue = event.target.value
    const inputName = event.target.name

    if (inputName === 'fName'){
      setFullName({fName : newValue})
    } else if (inputName === 'lName') {
      setFullName({lName:newValue})
    }
}

