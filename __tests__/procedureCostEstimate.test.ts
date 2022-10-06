import { ProcedureCostEstimateResponse, Ribbon } from "../lib";
import { readFile } from "fs/promises";

describe("ProcedureCostEstimate", () => {
  it("should return a response with estimates", async function () {
    const ribbonClient = new Ribbon({
      url: "test",
      target: "proxy",
    });
    const mockedData = JSON.parse(
      await readFile("__tests__/mocks/singleProcedureCostEstimate.json", "utf8")
    );

    jest
      .spyOn(ribbonClient.ProcedureCostEstimate, "find")
      .mockImplementationOnce((): Promise<ProcedureCostEstimateResponse> => {
        return Promise.resolve(mockedData);
      });
    const data = await ribbonClient.ProcedureCostEstimate.find({
      procedure_ids: ["1d3a7521-d8ab-404f-a6a2-d082b1f37f16"],
      member_zip: "10001",
    });
    expect(data?.data.cost_estimates.minimum).toEqual(33.66);
    expect(data?.data.cost_estimates.median).toEqual(37.18);
    expect(data?.data.cost_estimates.maximum).toEqual(60.97);
  });
});
