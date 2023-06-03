import { createContext, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC9Q1y5v27rlyIcp0U-U5PiEn5pAWM7EMA",
  authDomain: "teste-pifrontend.firebaseapp.com",
  projectId: "teste-pifrontend",
  storageBucket: "teste-pifrontend.appspot.com",
  messagingSenderId: "592348516799",
  appId: "1:592348516799:web:e5f1de84fb2f87e6dfd10a",
  measurementId: "G-5KQJ20PB0M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const UserContext = createContext({
  userID: null,
  logado: false,
  handleLogin: () => { },
  handleLogout: () => { },
})

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState({ userID: null, logado: false })

  async function login(email, senha) { //'async' pra sinalizar função assíncrona, devido à necessidade de aguardar retorno de backend
    let response = false
    await signInWithEmailAndPassword(auth, email, senha) //'await' pra função esperar resposta com a validação do backend
    .then((userCredential) => { //se der certo
      setCurrentUser({ userID: userCredential.user.id, logado: true })
      response = true
    })
    .catch((error) => console.log(error.message)) //se der erro
    response = true
  return response
  }


  function logout() {
    setCurrentUser({ userID: null, logado: false })
  }

  const contexto = {
    userID: currentUser.userID,
    logado: currentUser.logado,
    handleLogin: login,
    handleLogout: logout,
  }

  return (
    <UserContext.Provider value={contexto}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext