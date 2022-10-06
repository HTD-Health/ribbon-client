import { TreatmentsResponse, Ribbon } from "../lib";
import { readFile } from "fs/promises";

describe("Treatments", () => {
  it("should return treatment list", async function () {
    const ribbonClient = new Ribbon({
      url: "test",
      target: "proxy",
    });

    const mockedData = JSON.parse(
      await readFile("__tests__/mocks/multipleTreatments.json", "utf8")
    );

    jest
      .spyOn(ribbonClient.Treatments, "find")
      .mockImplementationOnce((): Promise<TreatmentsResponse> => {
        return Promise.resolve(mockedData);
      });
    const data = await ribbonClient.Treatments.find({ search: "insomnia" });
    expect(Array.isArray(data?.results)).toBe(true);
    expect(data?.results.length).toEqual(7);
    expect(data?.results[0].display).toBe("quis");
    expect(data?.results[0].type).toBe("providers");
    expect(Array.isArray(data?.results[0].specialties)).toBe(true);
  });
});
