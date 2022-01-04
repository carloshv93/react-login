import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState("");

  const handleEmailChange = ({ target: { value } }) => setEmail(value);

  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLogged(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Log in</h2>
        <label>
          Email
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit"> Log in </button>
        {isLogged && <span>Successfully logged</span>}
      </form>
    </div>
  );
}

export default App;
