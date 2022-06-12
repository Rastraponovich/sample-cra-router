import { ProfileForm } from "entities/user"

export const ProfilePage = () => {
    return (
        <section className="relative flex grow flex-col">
            <div className="absolute inset-0 flex flex-col">
                <div className="flex-1"></div>
                <div className="relative flex-1 bg-slate-50 ">
                    <svg
                        className="absolute -translate-y-[80%] text-slate-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="currentColor"
                            fillOpacity="1"
                            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="z-10 flex grow flex-col items-center px-10 py-5">
                <ProfileForm />
            </div>
        </section>
    )
}
