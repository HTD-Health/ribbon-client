# Overview

Wrapper library for [Ribbon API](https://ribbon.readme.io/docs) destined for Node.js and React

**NOTE:** Current version supports only a few `GET` requests available in Ribbon API.

## Table of Contents

- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Usage](#usage)
  - [Clinical Areas](#clinical-areas)
  - [Condition Cost Estimate](#condition-cost-estimate)
  - [Conditions](#conditions)
  - [Insurances](#insurances)
  - [Languages](#languages)
  - [Locations](#locations)
  - [Organizations](#organizations)
  - [Procedure Cost Estimate](#procedure-cost-estimate)
  - [Procedures](#procedures)
  - [Providers](#providers)
  - [Specialties](#specialties)
  - [Treatments](#treatments)

## Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

### Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

### Report bugs using Github's [issues](https://github.com/HTD-Health/ribbon-client/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/HTD-Health/ribbon-client/issues/new); it's that easy!

### Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People _love_ thorough bug reports. I'm not even kidding.

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Installation

Using npm:

```bash
$ npm install ribbon-client
```

## Usage

### Getting started

Client for frontend applications (to be paired with a [proxy](https://github.com/HTD-Health/ribbon-proxy) server)

```js
import { Ribbon } from "ribbon-client";

const ribbon = new Ribbon({
  url: "https://yourproxy.com/",
  target: "proxy",
});
```

Client for node application (to be connected to a test environment)

```js
const Ribbon = require("ribbon-client");
const ribbon = new Ribbon({
  url: "https://test.ribbonhealth.com/v1/",
  target: "ribbon-test",
  apiKey: "000000",
});
```

Client for node application (to be connected to a production environment)

```js
const Ribbon = require("ribbon-client");
const ribbon = new Ribbon({
  url: "https://ribbonhealth.com/v1/",
  target: "ribbon",
  apiKey: "000000",
});
```

## Api

The client allows the user to build simple requests that are sent directly to the ribbon API or through a proxy server. A few examples are shown below.

### Clinical Areas

Getting clinical areas ([Docs](https://ribbon.readme.io/docs/clinical-areas-endpoint)

```js
const data: ProvidersResponse = await ribbon.ClinicalAreas.find({
  clinical_area: "skin",
});
```

### Condition Cost Estimate

Getting estimate ([Docs](https://ribbon.readme.io/docs/estimate-condition-cost))

```js
const data: ConditionCostEstimateResponse =
  await ribbon.ConditionCostEstimate.find({
    condition_ids: [
      "00000000-0000-0000-0000-000000000000",
      "00000000-0000-0000-0000-000000000001",
    ],
    member_age: 50,
    member_gender: "f",
    member_zip: "00000",
  });
```

### Conditions

Getting conditions list ([Docs](https://ribbon.readme.io/docs/conditions-endpoint))

```js
// search for conditions related to cancer
const data: ConditionsResponse = await ribbon.Conditions.find({
  search: "cancer",
});
```

### Insurances

Getting insurances list ([Docs](https://ribbon.readme.io/docs/insurances-reference-endpoint))

```js
// search for insurances of type PPO in Alaska state
const data: InsurancesResponse = await ribbon.Insurances.find({
  state: "AK",
  plan_type: "PPO",
});
```

### Languages

Getting languages list([Docs](https://ribbon.readme.io/docs/languages-endpoint))

```js
// search for languages that include "lish" phrase in their names
const data: LanguagesResponse = await ribbon.Languages.find({
  search: "lish",
});
```

### Locations

Getting locations list ([Docs](https://ribbon.readme.io/docs/locate-nearby-locations-facilities))

```js
// search for locations in Washington that supports specific insurance
const data: LocationsResponse = await ribbon.Locations.find({
  address: "washington",
  insurance_ids: ["00000000-0000-0000-0000-000000000000"],
});
```

Excluding data from search ([Docs](https://ribbon.readme.io/docs/exclude-locations-from-search))

```js
// search for locations in Washington that don't support specific insurance
const data: LocationsResponse = await ribbon.Locations.find({
  address: "washington",
  exclude: {
    insurance_ids: ["00000000-0000-0000-0000-000000000000"],
  },
});
```

### Organizations

Getting organizations list ([Docs](https://ribbon.readme.io/docs/search-for-organizations))

```js
// search for organizarions in Boston
const data: OrganizationsResponse = await ribbon.Organizations.find({
  address: "boston",
});
```

### Procedure Cost Estimate

Getting estimation ([Docs](https://ribbon.readme.io/docs/estimate-costs-for-a-procedure))

```js
const data: ProcedureCostEstimateResponse =
  await ribbon.ProcedureCostEstimate.find({
    procedure_ids: [
      "00000000-0000-0000-0000-000000000000",
      "00000000-0000-0000-0000-000000000001",
    ],
    member_zip: "00000",
  });
```

### Procedures

Getting procedures list ([Docs](https://ribbon.readme.io/docs/estimate-costs-for-a-procedure))

```js
// search for procedures related to x-ray
const data: ProceduresResponse = await ribbon.Procedures.find({
  search: "x-ray",
});
```

### Providers

Getting providers ([Docs](https://ribbon.readme.io/docs/search-for-doctors))

```js
// search for high rated providers aged 45 and below
const data: ProvidersResponse = await ribbon.Providers.find({
  max_age: 45,
  min_rating: 9,
});
```

Specifying response shape ([Docs](https://ribbon.readme.io/docs/including-specific-fields-or-excluding-fields))

```js
// search providers but response should consist of only "clinical_areas" and "specialties" fields
const data: ProvidersResponse = await ribbon.Providers.find({
  max_age: 45,
  min_rating: 9,
  fields: ["clinical_areas", "specialties"],
});
```

Excluding data from search ([Docs](https://ribbon.readme.io/docs/exclude-providers-from-search-1))

```js
// search for low rated providers
const data: ProvidersResponse = await ribbon.Providers.find({
  max_age: 45,
  fields: ["ratings_avg", "first_name", "last_name", "age"],
  exclude: {
    min_rating: 3,
  },
});
```

### Specialties

Getting specialties list ([Docs](https://ribbon.readme.io/docs/specialties-reference-endpoint))

```js
// search for specialties related to cancer
const data: SpecialtiesResponse = await ribbon.Specialties.find({
  search: "cancer",
});
```

### Treatments

Getting treatments list ([Docs]())

```js
// search for treatments related to insomnia
const data: TreatmentsResponse = await ribbon.Treatments.find({
  search: "insomnia",
});
```
