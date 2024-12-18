import { Link } from "react-router"

export const Navbar = () => {
    return (
        <nav className="flex gap-4 mt-2 -mb-1.5">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/login'}>Login</Link>
        </nav>
    )
}
