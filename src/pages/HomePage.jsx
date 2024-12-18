import { useContext } from "react"
import { UserContext } from "../context/UserContext"


export const HomePage = () => {

    const { user } = useContext(UserContext)
    console.log(user);

    return (
        <div>
            <div className="mt-5">HomePage <span>{user?.username}</span></div>

            <pre>{JSON.stringify(user, null, 3)}</pre>
        </div>
    )
}
