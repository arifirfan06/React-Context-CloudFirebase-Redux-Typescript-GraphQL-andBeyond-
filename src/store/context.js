import { createContext, useState } from "react";

// actual or default value, nama variable harus sama dengan yang dibawah (userprovider)
export const UserCtx = createContext({
    currentUser: null,
    setUser: () => null,

})

export const UserProvider = ({children}) => {
    const [currentUser, setUser] = useState(null)
    const value = {currentUser, setUser}
    return (
        <UserCtx.Provider value={value}>{children}</UserCtx.Provider>
    )
}