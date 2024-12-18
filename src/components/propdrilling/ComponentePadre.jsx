import { useState } from "react"
import { ComponenteHijo } from "./ComponenteHijo"

export const ComponentePadre = () => {
    const [mensajeDelNieto, setMensajeDelNieto] = useState('');

    const recibirMensaje = (mensaje) => {
        setMensajeDelNieto(mensaje)
    }

    return (
        <>
            <h3>Soy el componente padre</h3>

            <p>Mensaje del nieto: {mensajeDelNieto || 'no hay mensaje'}</p>
            <ComponenteHijo onRecibirMensaje={recibirMensaje} />
        </>
    )
}
