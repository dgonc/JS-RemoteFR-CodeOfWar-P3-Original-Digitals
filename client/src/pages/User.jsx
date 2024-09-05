import { useLoaderData } from "react-router-dom";

function User() {
    const userData = useLoaderData();
    console.info(userData)
    return (
        <h2>Gestion de compte</h2>
    )
}

export default User;