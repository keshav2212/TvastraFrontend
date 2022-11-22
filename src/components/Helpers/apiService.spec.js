import axios from "axios";
import apiService from "./apiService";


jest.mock("axios");

describe("Api Service",()=>{
    let internalServerError;
    let badRequestError;

    const assign = window.location.assign;

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { assign: jest.fn() }
    });
  });
    beforeEach(() => {
    internalServerError = {
        response: {
            status: 500
        }
    };
    badRequestError = {
        response: {
            status: 400
        }
    };
    });

    it("Should handle internal server error for get call", async ()=>{
        axios.get.mockRejectedValue(internalServerError);
        await apiService.get(expect.any(String));

        expect(window.location.assign).toBeCalledTimes(1);
        expect(window.location.assign).toBeCalledWith("/error");
    });
    it("Should handle internal server error for post call", async()=>{
        axios.post.mockRejectedValue(internalServerError);

        await apiService.post(expect.any(String), expect.any(Object));
        expect(window.location.assign).toBeCalledTimes(1);
        expect(window.location.assign).toBeCalledWith("/error");
    });
    it("Should rethrow error from get call if not internal server error", async()=>{
        axios.get.mockRejectedValue(badRequestError);

        try{
            await apiService.get(expect.any(String));
            fail("Error not rethrown");
        }catch(error){
            expect(error).toEqual(badRequestError);
        }
    });
    it("Should return promise without handling error for post call", async()=>{
        axios.post.mockRejectedValue(internalServerError);

        try{
            await apiService.postWithoutErrorHandling(expect.any(String), expect.any(Object));

        }catch(error){
            expect(window.location.assign).not.toHaveBeenCalled();
        }
    });


})