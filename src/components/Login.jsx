import { useState } from "react";

function Login() {
  const [username, setUsername] = useState('');
  const [password, serPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }
}
return(
  <div>
    <h2>Login</h2>
    <input 
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="Usuário" 
    />
  </div>
)