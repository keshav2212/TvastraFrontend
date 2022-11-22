import axios from "axios";
import {when} from "jest-when";
import {urls} from "../config/env-config";
import {authHeader, isLoggedIn, login, logout} from "./authService";

jest.mock("axios", () => ({
    get: jest.fn(),
}));

describe("Basic logic", () => {
    const testUsername = "testUsername";
    const testPassword = "testPassword";
    const expectedToken = "testUsername:testPassword";

    beforeAll(() => {
        window.btoa = (data) => data;
    });

    it("should set auth header if logged in successfuly", async () => {
        const testConfig = {
            headers: {
                Authorization: 'Basic testUsername:testPassword'
            }
        };
        when(axios.get)
            .calledWith(`${urls.service}/login`, testConfig)
            .mockResolvedValue({data: "userDetails"});

        const actualUserDetails = await login(testUsername, testPassword);

        expect(actualUserDetails).toBe("userDetails");
    });

    afterEach(() => {
        sessionStorage.removeItem("token");
    });
});
