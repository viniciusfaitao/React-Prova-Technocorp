import axios from "axios";
import { UseItinerary } from "./index";

jest.mock("axios");

const mockItinerary = {
  data: {
    0: {
      lat: "-30.03078557730300000",
      lng: "-51.22762910938000000",
    },
    1: {
      lat: "-30.03084257730300000",
      lng: "-51.22691410938000000",
    },
  },
};

describe("UseItinerary", () => {
  it("Should successfuly get data from API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockItinerary));
    await expect(UseItinerary("5527")).resolves.toEqual(mockItinerary.data);
  });
});
