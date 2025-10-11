import { parse } from "date-fns";

export type appraisal = {
  name: string;
  appraisal: {
    changed: string; //true/false/unknown. Figure out a way to make this a "ChangeStatus" type
    reason?: string;
  };
  newsletterUrl: string;
};

type pipelineData = {
  date: string;
  appraisals: appraisal[];
};

export function getDisruptionDetails(
  churchName: string,
  appraisalsJson: pipelineData
) {
  const appraisalsData = appraisalsJson.appraisals;

  const maybeChurchDisruptedDetails = appraisalsData.find(
    (entry) => entry.name === churchName && entry.appraisal.changed !== "false"
  );

  if (maybeChurchDisruptedDetails) {
    return {
      disruptionReason: maybeChurchDisruptedDetails.appraisal.reason,
      newsletterUrl: maybeChurchDisruptedDetails.newsletterUrl,
    };
  } else {
    return {
      disruptionReason: "",
      newsletterUrl: "",
    };
  }
}

export function getDateOfPipelineRun(appraisalsJson: pipelineData) {
  return parse(appraisalsJson.date, "dd-MM-yyyy", new Date());
}
