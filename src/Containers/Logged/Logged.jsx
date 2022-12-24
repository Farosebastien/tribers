import { useParams } from "react-router-dom";

function Logged () {
    const { id } = useParams();

    return (
        <p>hello utilisateur n°{id}</p>
    )
}

export default Logged;