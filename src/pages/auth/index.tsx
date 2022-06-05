import { AuthForm } from "entities/auth"

export const AuthPage = () => {
    return (
        <div className="flex grow flex-col space-y-2 px-4 py-2 font-sans md:space-y-4 md:px-10 md:py-5">
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-gray-200 p-4">
                <AuthForm />
            </div>
        </div>
    )
}
