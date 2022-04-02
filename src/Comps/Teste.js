import React from "react";

function Teste() {
    
      const [operation, setOperation] = React.useState([]);
      React.useEffect(() => {
        console.log(operation);
      }, [operation]);
      function addOperation(value) {
          setOperation([...operation, value]);
      }
      return (
        <div>
          <button onClick={e => addOperation(2)}>Add</button>
          <ul>
            {operation.map((o,i)=>(<li key={i}>{o}</li>))}
          </ul>      
        </div>
      )
    }

  export default Teste;