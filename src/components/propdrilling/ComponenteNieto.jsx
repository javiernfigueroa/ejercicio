export const ComponenteNieto = ({ onRecibirMensaje }) => {

    const enviarMensaje = () => {
        onRecibirMensaje('Hola soy tu nieto')
    }
    return (
        <>
            <h5>Soy el componente nieto</h5>
            <button className='border bg-blue-300 p-2 rounded sm' onClick={enviarMensaje}>Envia el mensaje</button>
        </>
    )
}
