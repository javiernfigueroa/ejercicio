import { ComponenteNieto } from "./ComponenteNieto"

export const ComponenteHijo = ({ onRecibirMensaje }) => {
    return (
        <>
            <h3>Soy componente Hijo</h3>
            <ComponenteNieto onRecibirMensaje={onRecibirMensaje} />
        </>
    )
}
