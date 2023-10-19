import { useContext } from "react";
import { Context } from "../../provider/AuthContext";


const Home = () => {
    const authinfo = useContext(Context);
    
    return (
        <div>
            <h2>Home content {authinfo.name}</h2>
        </div>
    );
};

export default Home;