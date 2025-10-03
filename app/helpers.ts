export type appraisal = {
  name: string;
  appraisal: {
    changed: string; //true/false/unknown. Figure out a way to make this a "ChangeStatus" type
    reason?: string;
  };
  newsletterUrl: string;
};

export function getDisruptionDetails(
  churchName: string,
  appraisalsJson: appraisal[]
) {
  const maybeChurchDisruptedDetails = appraisalsJson.find(
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
