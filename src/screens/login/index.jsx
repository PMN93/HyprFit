import React, { createContext, useEffect, useState } from "react";
import logo from "../../assets/fundo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(email, password);
      const user = userCredential;

      if (user) {
        console.log("Usuário logado:", user.user.email);
        localStorage.setItem("Email", user.user.email);
        // navigate("/initpage");
        navigate("/initexerc");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
    }
  };

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  return (
    <div className="flex flex-col w-screen h-screen justify-start items-center pt-48">
      <img className="w-60 h-44" src={logo}></img>
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-3xl font-bold">Entre com sua conta</h1>
      </div>
      <div className="flex flex-col w-96 mt-8">
        <input
          className="border border-gray-300 p-2 mb-1 rounded-md focus:outline-black"
          type="text"
          placeholder="E-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          className="border border-gray-300 p-2 rounded-md focus:outline-black"
          type="password"
          placeholder="Senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex flex-col w-96 mt-8">
        <button
          className="bg-black text-white p-2 rounded-md hover:bg-gray-700"
          onClick={() => {
            handleLogin();
          }}
        >
          Entrar
        </button>
      </div>
      {/* <div className="flex flex-row mt-6 gap-2">
        <p>Esqueceu sua senha?</p>
        <a
          onClick={() => {
            sendPasswordResetEmail(auth, "pedro.mora.neto1993@gmail.com");
          }}
          className="text-black underline cursor-pointer"
        >
          Redefinir
        </a>
      </div> */}
      {/* <div className="flex flex-row mt-8 gap-2">
        <Link to={"/signup"}>
        <button className="rounded-md p-2 text-black bg-transparent border-solid border-2 border-black font-bold ">
          CRIAR UMA CONTA
        </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Login;
