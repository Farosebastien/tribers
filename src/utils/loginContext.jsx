import { useState, createContext } from 'react';

export const LoginContext = createContext();


export function LoginProvider({ children }) {
    const [isConnected, setConnected] = useState(false);

    const toggleConnected = () => {
        setConnected(!isConnected);
    }

    return(
        <LoginContext.Provider value={{ isConnected, toggleConnected }}>
            {children}
        </LoginContext.Provider>
    )
}