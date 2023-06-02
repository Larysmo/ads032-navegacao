import { createContext, useState } from 'react'

const UserContext = createContext({
  userID: null,
  logado: false,
  handleLogin: () => { },
  handleLogout: () => { },
})

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState({ userID: null, logado: false })

  function login() {
    setCurrentUser({ userID: 100, logado: true })
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