import { Routes, Route, Navigate } from "react-router"
import { HomePage, AboutPage, LoginPage } from "./pages"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* <Route path="/*" element={<NotFound />} /> */}

            <Route path="/*" element={<Navigate to={'/'} />} />

        </Routes>
    )
}
