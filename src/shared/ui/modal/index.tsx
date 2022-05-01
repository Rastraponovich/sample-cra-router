import { ReactNode } from "react"

interface ModalProps {
    children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-white/50"></div>

            <div className="z-10 flex w-1/2 max-w-[50%] flex-col bg-white">
                <h2>modal</h2>

                {children}
            </div>
        </div>
    )
}
