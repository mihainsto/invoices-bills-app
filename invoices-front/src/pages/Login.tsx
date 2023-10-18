import {useEffect, useState} from "react";
import { useLoginMutation } from "../genearted/graphql";
import {useLocalStorage, writeStorage,} from '@rehooks/local-storage';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login] = useLoginMutation();
  const [email, setEmail] = useState("lisa@simpson.com");
  const [password, setPassword] = useState("secret42");
  const [error, setError] = useState("");
    const navigate = useNavigate();
    const token = useLocalStorage("accessToken")

    useEffect(() => {
        if(token[0]){
            navigate("/home");
        }
    }, [token])
    return (
    <div>ete

      <p>Log in to access the invoice app</p>

      <div>
        <p>username:</p>
        <input value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      </div>

      <div>
        <p>password:</p>
        <input value={password} onChange={(e) => {setPassword(e.target.value)}}/>
      </div>

        <div>
            <button className="mt-5" onClick={async () => {
                try{
                    const result = await login({
                        variables: { email, password },
                    });
                    writeStorage('accessToken', result.data!.login.accessToken)
                } catch (e) {
                    setError("Wrong credentials!")
                }


            }}>
                Login
            </button>
        </div>

        <p>{error}</p>
    </div>
  );
};

export default Login;
