import axios from "axios";
import { UseLotationLines } from "./index";

jest.mock("axios");

const mockLotation = {
  data: [
    {
      id: "29",
      codigo: "20.5-1",
      nome: "ALTO TERESOPOLIS - VIA PRAIA DE BELAS",
    },
    {
      id: "30",
      codigo: "20.5-2",
      nome: "ALTO TERESOPOLIS - VIA PRAIA DE BELAS",
    },
  ],
};

describe("UseLotationLines", () => {
  it("Should successfuly get data from API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockLotation));
    await expect(UseLotationLines()).resolves.toEqual(mockLotation.data);
  });

  it("Should successfuly at get Lotation with id", async () => {
    const id = "29";

    axios.get.mockImplementationOnce(() => Promise.resolve(mockLotation));
    await expect(
      UseLotationLines().then((response) =>
        response.filter((Lotation) => Lotation.id === id)
      )
    ).resolves.toEqual([mockLotation.data[0]]);
  });

  it("Should get a how many Lotation Lines exists in API data", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockLotation));
    await expect(
      UseLotationLines().then((response) => response.length)
    ).resolves.toEqual(2);
  });
});
