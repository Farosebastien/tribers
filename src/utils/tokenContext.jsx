import { createContext } from "react";
import { useToken } from './Hooks';

//Création et export d'un context pour le token
export const TokenContext = createContext();

//Création d'un provider
export const TokenProvider = ({ children })  => {

    //Récupération du token et de isLoading du hook useToken
    const { token, isLoading } =  useToken();

    //Rendu du provider qui affiche son children en lui donnant accés à token et isLoading
    return (
        <TokenContext.Provider value={{ token, isLoading }}>
            {children}
        </TokenContext.Provider>
    )
}