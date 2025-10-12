import { getDisruptionDetails, getDateOfPipelineRun } from "../app/helpers";
import appraisals from "./dummyData/dummyAppraisals.json";

const expectedDisruptionDetails = {
  disruptionReason:
    "Per this newsletter, weekday Confessions are 12:15pm–12:40pm, not 12:00pm–12:40pm. Saturday Confessions are 5:30pm–5:55pm, not until 6:00pm. No Confessions are listed for Sunday.",
  newsletterUrl:
    "https://cdn.prod.website-files.com/604cd9b97ea6bcb8e1d06a8b/68c3e01901de551b2c3b4789_Sunday%2014th%20September%20-%20Exhaltation%20of%20Holy%20Cross.pdf",
};

const expectedUnknownDetails = {
  disruptionReason: undefined,
  newsletterUrl:
    "https://www.stgeorgescathedral.org.uk/media/1060/newsletter.pdf",
};

const expectedMissingChurchDetails = {
  disruptionReason: "",
  newsletterUrl: "",
};

describe("The 'getDisruptionDetails' function", () => {
  it("should return the correct data for a disrupted church", () => {
    const result = getDisruptionDetails("St Patrick's", appraisals);
    expect(result).toStrictEqual(expectedDisruptionDetails);
  });
  it("should return data when we don't know if the church is disrupted or not", () => {
    const result = getDisruptionDetails("St George's Cathedral", appraisals);
    expect(result).toStrictEqual(expectedUnknownDetails);
  });
  it("should not return data when the church data is missing", () => {
    const result = getDisruptionDetails("church of pastor bob", appraisals);
    expect(result).toStrictEqual(expectedMissingChurchDetails);
  });
  it("should not return empty data when church is not disrupted", () => {
    const result = getDisruptionDetails(
      "Our Lady of Mount Carmel & St Simon Stock",
      appraisals
    );
    expect(result).toStrictEqual(expectedMissingChurchDetails);
  });
});

describe("The getDateOfPipelineRun function", () => {
  it("should correctly find the date", () => {
    const result = getDateOfPipelineRun(appraisals);
    expect(result.toString).toEqual(new Date(2025, 9, 8).toString); //Months are zero-indexed
  });
});
