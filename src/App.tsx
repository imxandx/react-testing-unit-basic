import { useState } from "react";

function App() {

  const [message, setMessage] = useState("Message")

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <button 
      style={{backgroundColor: "rgb(40, 40, 40)", color: "white", padding: "10px"}}
      onClick={() => setMessage("New message!")}>Change message</button>
    </div>
  );
}

export default App;
