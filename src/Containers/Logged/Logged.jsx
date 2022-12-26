import { useLogin } from "../../utils/Hooks";

function Logged () {

    const { toggleConnected } = useLogin();

    const userData = JSON.parse(localStorage.getItem("userData"));

    const deconnection = () => {
        toggleConnected();
        localStorage.removeItem("userData");
    }

    return (
        <div>
            <p>hello utilisateur {userData.id}</p>
            <button onClick={() => deconnection()}>Me déconnecter</button>
        </div>
    )
}

export default Logged;