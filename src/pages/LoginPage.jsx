import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const LoginPage = () => {

    const { setUser } = useContext(UserContext)

    const handleSetUser = () => {

        setUser({
            id: 124,
            username: 'javier',
            password: 'asdasd'
        })

        alert('se envio el usuario')
    }

    return (
        <>
            <div>LoginPage </div>

            <button
                onClick={handleSetUser}
                className="bg-blue-400 p-2 border rounded-sm mt-5"
            >Crea un usuario
            </button>
        </>

    )
}
