import { useState, createContext } from 'react';

//Création et export d'un context pour le login
export const LoginContext = createContext();

//Création d'un provider
export function LoginProvider({ children }) {

    //Variable booléen pour la connection en utilisant le state
    const [isConnected, setConnected] = useState(false);

    //Fonction toggleConnected qui inverse la valeur de isConnected à chaque appel
    const toggleConnected = () => {
        setConnected(!isConnected);
    }

    //Rendu du provider qui affiche son children en lui donnant accés à isConnected et toggleConnected
    return(
        <LoginContext.Provider value={{ isConnected, toggleConnected }}>
            {children}
        </LoginContext.Provider>
    )
}