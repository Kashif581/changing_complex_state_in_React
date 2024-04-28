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

* we want to get hold of the previous value of this fullName object and then only add to it the parts which have been changed. In order to do this,
* this is really the key. As we type into our inputs, React will re-render our App component,
but our

* app has state, right? In the form of the fullName JavaScript object. And React remembers the value of this object.
This means that we can make use of this remembered value as we're updating our first name or our last name.

* So then the question really becomes, well how can we use a function that gives a different output depending on the previous value?

const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const newValue = event.target.value
    const inputName = event.target.name

    setFullName(prevValue =>{
        // console.log(prevValue)
        if (inputName === 'fName') {
          return {
            fName: newValue,
            lName: prevValue.lName
          }
        } else if (inputName === 'lName') {
          return {
            fName: prevValue.fName,
            lName: newValue
          }
        }
    
       })
  }

  * we can make this simple

   const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // destructring
    const {value, name} = event.target;

   setFullName(prevValue =>{
    // console.log(prevValue)
    if (name === 'fName') {
      return {
        fName: value,
        lName: prevValue.lName
      }
    } else if (name === 'lName') {
      return {
        fName: prevValue.fName,
        lName: value
      }
    }

   })

  }

* make sure that in the future when you're creating your own apps, or in any of the exercises or challenges,
don't try to access the event or anything related to the event, inside a stateful setter. e.g setName
