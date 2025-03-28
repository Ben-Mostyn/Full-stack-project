import { useState } from "react"
import SignUp from "./components/LoginSystem/SignUp/SignUp"
import SignIn from "./components/LoginSystem/Signin/SignIn";


function App() {
  const [login, setLogin] = useState(false);

  const handleClick = () => {
    setLogin(!login);
  }

  return (
    <>
      <h1>Hello</h1>
      {login ? <SignIn /> : <SignUp />}
      <button onClick={handleClick}>{login ? <p>Sign Up</p> : <p>Login</p>}</button>
    </>
  )
}

export default App
