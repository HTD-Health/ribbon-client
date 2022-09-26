import { ProvidersResponse, Ribbon } from "../lib";
import { readFile } from "fs/promises";

describe("Providers", () => {
  it("should return a response with same npi", async function () {
    const ribbonClient = new Ribbon({
      url: "test",
    });
    const mockedData = JSON.parse(
      await readFile("__tests__/mocks/singleProvider.json", "utf8")
    );

    jest
      .spyOn(ribbonClient.Providers, "find")
      .mockImplementationOnce((): Promise<ProvidersResponse> => {
        return Promise.resolve(mockedData);
      });
    const data = await ribbonClient.Providers.find({
      npis: ["232323"],
    });
    expect(data?.data.length).toEqual(1);
    expect(data?.data[0].npi).toBe("123");
  });
});
