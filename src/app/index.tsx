import { useEvent } from "effector-react"
import { appModel } from "entities/app"
import { useEffect } from "react"
import { AuthProvider } from "widgets/auth-context"
import "./App.css"
import { withProviders } from "./providers"

import { Router } from "./router"

const App = () => {
    const initApp = useEvent(appModel.events.initApp)
    useEffect(() => {
        initApp()
    }, [])
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    )
}

export default withProviders(App)
