import { ProviderApiResponse, Ribbon } from "../lib";
import { readFile } from "fs/promises";
import { SpecialtiesApiResponse } from "../lib/Specialties/specialtiesApiResponse";

describe("Specialties", () => {
  it("should return proper value", async function () {
    const ribbonClient = new Ribbon({
      proxyUrl: "test",
    });

    const mockedData = JSON.parse(
      await readFile("__tests__/mocks/singleSpecialty.json", "utf8")
    );

    jest
      .spyOn(ribbonClient.Specialties, "find")
      .mockImplementationOnce((): Promise<SpecialtiesApiResponse> => {
        return Promise.resolve(mockedData);
      });
    const data = await ribbonClient.Specialties.find({ search: "Dentist" });
    expect(data?.results.length).toEqual(1);
    expect(data?.results[0].display).toBe("Family Medicine");
  });
});

describe("Providers", () => {
  it("should return a response with same npi", async function () {
    const ribbonClient = new Ribbon({
      proxyUrl: "test",
    });
    const mockedData = JSON.parse(
      await readFile("__tests__/mocks/singleProvider.json", "utf8")
    );

    jest
      .spyOn(ribbonClient.Providers, "find")
      .mockImplementationOnce((): Promise<ProviderApiResponse> => {
        return Promise.resolve(mockedData);
      });
    const data = await ribbonClient.Providers.find({
      npis: ["232323"],
    });
    expect(data?.data.length).toEqual(1);
    expect(data?.data[0].npi).toBe("123");
  });
});
