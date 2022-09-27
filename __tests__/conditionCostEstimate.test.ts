import { ConditionCostEstimateResponse, Ribbon } from "../lib";
import { readFile } from "fs/promises";

describe("ConditionCostEstimate", () => {
  it("should return a response with estimates", async function () {
    const ribbonClient = new Ribbon({
      url: "test",
      target: "proxy",
    });
    const mockedData = JSON.parse(
      await readFile("__tests__/mocks/singleConditionCostEstimate.json", "utf8")
    );

    jest
      .spyOn(ribbonClient.ConditionCostEstimate, "find")
      .mockImplementationOnce((): Promise<ConditionCostEstimateResponse> => {
        return Promise.resolve(mockedData);
      });
    const data = await ribbonClient.ConditionCostEstimate.find({
      condition_ids: ["628283f8-05cc-44dc-88de-8d7cd0d578e9"],
      member_age: 48,
      member_zip: "100000",
      member_gender: "f",
    });
    expect(data?.data.cost_estimates.one_year).toEqual(1644.5585);
    expect(data?.data.cost_estimates.five_year).toEqual(7360.5625);
    expect(data?.data.cost_estimates.ten_year).toEqual(15811.39);
    expect(data?.data.cost_estimates.lifetime).toEqual(186185.9764);
  });
});
