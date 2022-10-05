import { LanguageResponse, Ribbon } from "../lib";
import { readFile } from "fs/promises";

describe("Languages", () => {
  it("should return language list", async function () {
    const ribbonClient = new Ribbon({
      url: "test",
      target: "proxy",
    });

    const mockedData = JSON.parse(
      await readFile("__tests__/mocks/multipleLanguages.json", "utf8")
    );

    jest
      .spyOn(ribbonClient.Languages, "find")
      .mockImplementationOnce((): Promise<LanguageResponse> => {
        return Promise.resolve(mockedData);
      });
    const data = await ribbonClient.Languages.find({ search: "occaecat" });
    expect(Array.isArray(data?.data)).toBe(true);
    expect(data?.data.length).toEqual(7);
    expect(data?.data[0].display_name).toBe("occaecat");
  });
});
