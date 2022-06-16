import { Loader } from "entities/booking/ui"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { SuspenseLoader } from "shared"

export const withRouter = (component: () => React.ReactNode) => () =>
    (
        <BrowserRouter>
            <Suspense fallback={<SuspenseLoader />}>{component()}</Suspense>
        </BrowserRouter>
    )
