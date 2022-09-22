import { buildQuery } from "../lib/buildQuery";
import { ProviderParams } from "../lib/Providers";

describe("buildQuery", () => {
  it("builds correct query", async function () {
    const params: ProviderParams = {
      specialty_ids: ["000-000-001", "000-000-002", "000-000-003"],
      gender: "f",
      max_age: 123,
      min_age: 2,
    };

    const query = buildQuery(params);
    const tempQuery =
      "specialty_ids=000-000-001,000-000-002,000-000-003&gender=f&max_age=123&min_age=2";

    expect(query).toEqual(tempQuery);
  });

  it("builds correct query with exclusions", async function () {
    const params: ProviderParams = {
      gender: "f",
      max_age: 123,
      min_age: 2,
      exclude: {
        specialty_ids: ["000-000-001", "000-000-002", "000-000-003"],
        location_ids: ["000-000-00a", "000-000-00b"],
      },
    };

    const query = buildQuery(params);
    const tempQuery =
      "gender=f&max_age=123&min_age=2&_excl_specialty_ids=000-000-001,000-000-002,000-000-003&_excl_location_ids=000-000-00a,000-000-00b";

    expect(query).toEqual(tempQuery);
  });
});
