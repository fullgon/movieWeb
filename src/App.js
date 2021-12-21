import { useState } from "react";


function App() {
  const [toDo, setToDO] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDO(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    
    if(toDo === ""){
      return;
    }
    setToDos((cuAr) => [toDo, ...cuAr]);
    setToDO("");
    
  }
  console.log(toDos);
  return (    
   <div>
     <h1>My ToDos ({toDos.length})</h1>
     <form onSubmit={onSubmit}>
     <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do..."></input>
     <button>Add to do</button>
     </form>
     <hr/>
     <ul>
       {toDos.map((item, index) => <li key={index}>{item}</li>)}
     </ul>
     </div>
  );
}

export default App;
