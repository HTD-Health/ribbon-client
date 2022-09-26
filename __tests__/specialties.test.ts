import { SpecialtiesResponse, Ribbon } from "../lib";
import { readFile } from "fs/promises";

describe("Specialties", () => {
  it("should return proper value", async function () {
    const ribbonClient = new Ribbon({
      url: "test",
    });

    const mockedData = JSON.parse(
      await readFile("__tests__/mocks/singleSpecialty.json", "utf8")
    );

    jest
      .spyOn(ribbonClient.Specialties, "find")
      .mockImplementationOnce((): Promise<SpecialtiesResponse> => {
        return Promise.resolve(mockedData);
      });
    const data = await ribbonClient.Specialties.find({ search: "Dentist" });
    expect(data?.results.length).toEqual(1);
    expect(data?.results[0].display).toBe("Family Medicine");
  });
});
