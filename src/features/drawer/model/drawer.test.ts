import { allSettled, fork } from "effector"
import { drawerModel } from ".."
import { DrawerDomain } from "./drawer"

describe("testing toggled Drawer", () => {
    it("when toggled drawer", async () => {
        const scope = fork(DrawerDomain, {
            handlers: new Map([[drawerModel.toggleDrawerFx, jest.fn()]]),
        })

        const state = scope.getState(drawerModel.$isOpenedDrawer)

        allSettled(drawerModel.toggleDrawerFx, { scope, params: {} })
        expect(scope.getState(drawerModel.$isOpenedDrawer)).toBe(!state)
    })
})
