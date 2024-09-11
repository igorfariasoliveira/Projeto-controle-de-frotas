import { useState } from "react";
import styles from "./Login.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Teste");
  };
  return (
    <div className={styles.principal}>
      <div className={styles.img}></div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.campo}>
          <AccountCircleIcon/>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuário"
          />
        </div>
        <div className={styles.campo}>
          <VpnKeyIcon/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
