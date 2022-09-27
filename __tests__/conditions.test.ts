import { ConditionsResponse, Ribbon } from "../lib";
import { readFile } from "fs/promises";

describe("ConditionCostEstimate", () => {
  it("should return a response with estimates", async function () {
    const ribbonClient = new Ribbon({
      url: "test",
      target: "proxy",
    });
    const mockedData = JSON.parse(
      await readFile("__tests__/mocks/multipleConditions.json", "utf8")
    );

    jest
      .spyOn(ribbonClient.Conditions, "find")
      .mockImplementationOnce((): Promise<ConditionsResponse> => {
        return Promise.resolve(mockedData);
      });
    const data = await ribbonClient.Conditions.find({
      search: "lorem",
    });
    expect(data?.results.length).toEqual(3);
    expect(data?.results[0].uuid).toEqual(
      "3d31f420-17cc-48d0-b311-e0e31019fb5f"
    );
    expect(data?.results[0].display).toEqual("sint");
    expect(data?.results[0].modules[0]).toEqual("condition_cost_estimate");
    expect(data?.results[0].specialties.length).toEqual(2);
    expect(data?.results[0].specialties[1].display).toEqual(
      "sunt tempor cupidatat"
    );
    expect(data?.results[0].specialties[1].uuid).toEqual(
      "41d5eb40-7950-411e-9be4-87be2ead4411"
    );
  });
});
