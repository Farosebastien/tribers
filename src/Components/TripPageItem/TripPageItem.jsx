//import { useWeather } from "../../utils/Hooks";
import { TokenContext } from "../../utils/tokenContext";
import { useContext } from "react";

function TripPageItem (props) {



    const { token } = useContext(TokenContext);

    return (
        <p>hello {token}</p>
    )
}

export default TripPageItem;