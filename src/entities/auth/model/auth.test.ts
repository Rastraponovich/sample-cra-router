import { allSettled, fork } from "effector"
import { $credential, AuthDomain, setCredentialFx } from "."
import { authModel } from ".."
import { loginFx } from "../lib/api"

describe("testing auth model", () => {
    it("when enter credential data", async () => {
        const setCredentialFxMock = jest.fn()

        const scope = fork(AuthDomain, {
            handlers: new Map([[setCredentialFx, setCredentialFxMock]]),
        })

        const payload = { email: "wilde@bk.ru", password: "" }

        await allSettled(setCredentialFx, { scope, params: payload })

        expect(setCredentialFxMock).toBeCalledTimes(1)
        expect(setCredentialFxMock).toHaveBeenCalledWith(payload)
    })
})
