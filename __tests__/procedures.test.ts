import { ProceduresResponse, Ribbon } from "../lib";
import { readFile } from "fs/promises";

describe("Procedures", () => {
  it("should return procedure list", async function () {
    const ribbonClient = new Ribbon({
      url: "test",
      target: "proxy",
    });

    const mockedData = JSON.parse(
      await readFile("__tests__/mocks/multipleProcedures.json", "utf8")
    );

    jest
      .spyOn(ribbonClient.Procedures, "find")
      .mockImplementationOnce((): Promise<ProceduresResponse> => {
        return Promise.resolve(mockedData);
      });
    const data = await ribbonClient.Procedures.find({ search: "x-ray" });
    expect(Array.isArray(data?.results)).toBe(true);
    expect(data?.results.length).toEqual(8);
    expect(data?.results[0].display_name).toBe("veniam Lorem aliqua mollit");
  });
});
