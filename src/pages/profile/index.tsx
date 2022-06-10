import { ProfileForm } from "entities/user"

export const ProfilePage = () => {
    return (
        <section className="flex grow flex-col items-center px-10 py-5">
            <ProfileForm />
        </section>
    )
}
