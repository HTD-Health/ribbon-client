import { buildQuery } from "../lib/buildQuery";

describe("Providers", () => {
  it("buildQuery", async function () {
    const params = {
      locations: ["city1", "city2"],
      maxAge: 123,
      minAge: 2,
    };

    const query = buildQuery(params);
    const tempQuery = "?locations=city1,city2&max_age=123&min_age=2&";

    expect(query).toEqual(tempQuery);
  });
});
