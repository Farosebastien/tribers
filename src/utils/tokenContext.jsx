import { createContext } from "react";
import { useToken } from './Hooks';

export const TokenContext = createContext();

export const TokenProvider = ({ children })  => {
    const { token, isLoading } =  useToken();

    return (
        <TokenContext.Provider value={{ token, isLoading }}>
            {children}
        </TokenContext.Provider>
    )
}