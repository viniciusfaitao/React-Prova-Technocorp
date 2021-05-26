import axios from "axios";
import { UseBusLines } from "./index";

jest.mock("axios");

const mockBus = {
  data: [
    {
      id: "5518",
      codig: "250-1",
      nome: "1 DE MAIO",
    },
    {
      id: "5475",
      codigo: "T11-1",
      nome: "3ª PERIMETRAL",
    },
  ],
};

describe("UseBusLines", () => {
  it("Should successfuly get data from API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockBus));
    await expect(UseBusLines()).resolves.toEqual(mockBus.data);
  });

  it("Should successfuly at get Bus with id", async () => {
    const id = "5518";

    axios.get.mockImplementationOnce(() => Promise.resolve(mockBus));
    await expect(
      UseBusLines().then((response) => response.filter((bus) => bus.id === id))
    ).resolves.toEqual([mockBus.data[0]]);
  });

  it("Should get a how many Bus Lines exists in API data", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockBus));
    await expect(
      UseBusLines().then((response) => response.length)
    ).resolves.toEqual(2);
  });
});
