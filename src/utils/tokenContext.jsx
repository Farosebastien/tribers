import { createContext } from "react";
import { useToken } from './Hooks';

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const token = useToken();

    return (
        <TokenContext.Provider value={{ token }}>
            {children}
        </TokenContext.Provider>
    )
}