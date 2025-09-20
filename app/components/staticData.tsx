import React, { useState } from "react";
import { DayOfWeek } from "../types";
import styles from "./staticData.module.css";
import appraisals from "../../ai_pipeline/appraisals.json";
import { getDisruptionDetails } from "../helpers";
import {
  DisruptedOrUnknownChurchEntry,
  DisruptedOrUnknownChurchEntryProps,
} from "./disruptedOrUnknownChurchEntry";

function StaticData({ dayOfWeek }: { dayOfWeek: DayOfWeek }) {
  switch (dayOfWeek) {
    case "Monday":
      return mondayChurches();
    case "Tuesday":
      return tuesdayChurches();
    case "Wednesday":
      return wednesdayChurches();
    case "Thursday":
      return thursdayChurches();
    case "Friday":
      return fridayChurches();
    case "Saturday":
      return saturdayChurches();
    case "Sunday":
      return sundayChurches();
  }
}

export default StaticData;

function mondayChurches() {
  return (
    <div>
      {timeSlot("11:30", [westminsterCathedral, stsPeterAndPaul])}
      {timeSlot("12:00", [
        bromptonOratory,
        stGeorgesCathedral,
        stPatricksSoho,
        stsPeterAndPaul,
        farmStreet,
        westminsterCathedral,
        spanishPlace,
      ])}
      {timeSlot("12:15", [warwickStreet])}
      {timeSlot("12:30", [
        spanishPlace,
        stMaryMoorfields,
        stPatricksSoho,
        farmStreet,
      ])}
      {timeSlot("12:35", [corpusChristi])}
      {timeSlot("13:20", [stEtheldredras])}
      {timeSlot("16:30", [westminsterCathedral])}
      {timeSlot("17:00", [westminsterCathedral])}
      {timeSlot("17:30", [bromptonOratory, notreDame, stAnselmAndStCecilia])}
      {timeSlot("17:40", [mountCarmel])}
      {timeSlot("17:45", [ukrainianCathedral])}
    </div>
  );
}

function tuesdayChurches() {
  return (
    <div>
      {timeSlot("06:45", [ukrainianCathedral])}
      {timeSlot("11:30", [westminsterCathedral])}
      {timeSlot("12:00", [
        bromptonOratory,
        stGeorgesCathedral,
        farmStreet,
        stPatricksSoho,
        westminsterCathedral,
        stCharlesBorromeo,
      ])}
      {timeSlot("12:15", [warwickStreet])}
      {timeSlot("12:30", [stMaryMoorfields, farmStreet, stPatricksSoho])}
      {timeSlot("13:20", [stEtheldredras])}
      {timeSlot("16:30", [westminsterCathedral])}
      {timeSlot("17:00", [westminsterCathedral])}
      {timeSlot("17:30", [bromptonOratory, stAnselmAndStCecilia])}
      {/*Can't find notre dame */}
      {timeSlot("17:40", [mountCarmel])}
      {timeSlot("18:00", [ukrainianCathedral])}
    </div>
  );
}

function wednesdayChurches() {
  return (
    <div>
      {timeSlot("06:45", [ukrainianCathedral])}
      {timeSlot("11:30", [westminsterCathedral])}
      {timeSlot("12:00", [
        bromptonOratory,
        stGeorgesCathedral,
        farmStreet,
        stPatricksSoho,
        westminsterCathedral,
        stCharlesBorromeo,
      ])}
      {timeSlot("12:15", [warwickStreet])}
      {timeSlot("12:30", [stMaryMoorfields, farmStreet, stPatricksSoho])}
      {timeSlot("13:20", [stEtheldredras])}
      {timeSlot("16:30", [westminsterCathedral])}
      {timeSlot("17:00", [westminsterCathedral])}
      {timeSlot("17:30", [bromptonOratory, stAnselmAndStCecilia])}
      {/*Can't find notre dame */}
      {timeSlot("17:40", [mountCarmel])}
      {timeSlot("18:00", [ukrainianCathedral])}
    </div>
  );
}

function thursdayChurches() {
  return (
    <div>
      {timeSlot("06:45", [ukrainianCathedral])}
      {timeSlot("11:30", [westminsterCathedral])}
      {timeSlot("12:00", [
        bromptonOratory,
        stGeorgesCathedral,
        farmStreet,
        stPatricksSoho,
        westminsterCathedral,
        stCharlesBorromeo,
      ])}
      {timeSlot("12:15", [warwickStreet])}
      {timeSlot("12:30", [stMaryMoorfields, farmStreet, stPatricksSoho])}
      {timeSlot("13:20", [stEtheldredras])}
      {timeSlot("16:30", [westminsterCathedral])}
      {timeSlot("17:00", [westminsterCathedral])}
      {timeSlot("17:30", [bromptonOratory, stAnselmAndStCecilia])}
      {/*Can't find notre dame */}
      {timeSlot("17:40", [mountCarmel])}
      {timeSlot("18:00", [ukrainianCathedral])}
    </div>
  );
}

function fridayChurches() {
  return (
    <div>
      {timeSlot("06:45", [ukrainianCathedral])}
      {timeSlot("11:30", [westminsterCathedral])}
      {timeSlot("12:00", [
        bromptonOratory,
        stGeorgesCathedral,
        farmStreet,
        stPatricksSoho,
        westminsterCathedral,
        stCharlesBorromeo,
      ])}
      {timeSlot("12:15", [warwickStreet])}
      {timeSlot("12:30", [stMaryMoorfields, farmStreet, stPatricksSoho])}
      {timeSlot("13:20", [stEtheldredras])}
      {timeSlot("16:30", [westminsterCathedral])}
      {timeSlot("17:00", [westminsterCathedral])}
      {timeSlot("17:30", [bromptonOratory, stAnselmAndStCecilia])}
      {/*Can't find notre dame */}
      {timeSlot("17:40", [mountCarmel])}
      {timeSlot("18:00", [ukrainianCathedral])}
    </div>
  );
}

function saturdayChurches() {
  return (
    <div>
      {timeSlot("07:45", [ukrainianCathedral])}
      {timeSlot("10:00", [bromptonOratory, stGeorgesCathedral])}
      {timeSlot("10:30", [bromptonOratory, stGeorgesCathedral, mountCarmel])}
      {timeSlot("11:00", [bromptonOratory, farmStreet, mountCarmel])}
      {timeSlot("11:30", [
        bromptonOratory,
        farmStreet,
        mountCarmel,
        westminsterCathedral,
      ])}
      {timeSlot("12:00", [bromptonOratory, westminsterCathedral])}
      {timeSlot("15:00", [bromptonOratory])}
      {timeSlot("15:30", [bromptonOratory])}
      {timeSlot("16:00", [bromptonOratory])}
      {timeSlot("16:15", [queenOfHeaven])}
      {timeSlot("16:30", [bromptonOratory])}
      {timeSlot("16:45", [spanishPlace])}
      {timeSlot("17:00", [
        bromptonOratory,
        westminsterCathedral,
        stGeorgesCathedral,
        spanishPlace,
        stAnselmAndStCecilia,
        mountCarmel,
        holyApostles,
      ])}
      {timeSlot("17:15", [warwickStreet, ourLadyOfTheRosary])}
      {timeSlot("17:30", [
        bromptonOratory,
        westminsterCathedral,
        stGeorgesCathedral,
        stPatricksSoho,
        stAnselmAndStCecilia,
        mountCarmel,
      ])}
      {timeSlot("17:45", [farmStreet, stMarysCadoganStreet])}
      {timeSlot("18:00", [ukrainianCathedral, stMarysCadoganStreet])}
    </div>
  );
}

function sundayChurches() {
  return (
    <div>
      {timeSlot("07:45", [farmStreet, ukrainianCathedral])}
      {timeSlot("08:30", [bromptonOratory])}
      {timeSlot("09:15", [farmStreet])}
      {timeSlot("09:30", [bromptonOratory])}
      {timeSlot("09:45", [ukrainianCathedral])}
      {timeSlot("10:00", [stGeorgesCathedral])}
      {timeSlot("10:30", [bromptonOratory])}
      {timeSlot("10:45", [farmStreet, westminsterCathedral])}
      {timeSlot("11:00", [westminsterCathedral])}
      {timeSlot("11:30", [westminsterCathedral])}
      {timeSlot("11:45", [ukrainianCathedral])}

      {timeSlot("12:00", [
        bromptonOratory,
        stGeorgesCathedral,
        westminsterCathedral,
      ])}
      {timeSlot("12:45", [farmStreet])}
      {timeSlot("16:45", [ukrainianCathedral])}
      {timeSlot("17:00", [westminsterCathedral])}
      {timeSlot("17:15", [farmStreet])}
      {timeSlot("17:30", [westminsterCathedral])}
      {timeSlot("18:00", [bromptonOratory, westminsterCathedral])}
      {timeSlot("18:30", [bromptonOratory])}
      {timeSlot("18:45", [farmStreet])}
    </div>
  );
}

function timeSlot(time: string, churches: React.JSX.Element[]) {
  return (
    <div id={time}>
      <h2>{time}</h2>
      {churches}
      <hr />
    </div>
  );
}

function displayChurch(name: string, url: string, location: string) {
  const maybeDisruptionDetails = getDisruptionDetails(name, appraisals);

  const specialNoticeChurchDetails: DisruptedOrUnknownChurchEntryProps = {
    name: name,
    location: location,
    url: url,
    disruptionReason: maybeDisruptionDetails.disruptionReason,
    newsletterUrl: maybeDisruptionDetails.newsletterUrl,
  };

  return (
    <div key={name}>
      {maybeDisruptionDetails.disruptionReason !== "" ? (
        <DisruptedOrUnknownChurchEntry {...specialNoticeChurchDetails} />
      ) : (
        <DisplayChurchEntry {...{ name, url, location }} />
      )}
    </div>
  );
}

export type DisplayDodgyChurchEntryProps = {
  name: string;
  url: string;
  location: string;
  showMoreDetails: ShowMoreProps;
};
export function DisplayDodgyChurchEntry({
  name,
  url,
  location,
  showMoreDetails,
}: DisplayDodgyChurchEntryProps) {
  return (
    <div data-testid="disruptionContainer" className={styles.disruptedNotice}>
      <a
        data-testid="linkToChurchWebsite"
        href={url}
        className={styles.churchLink}
        key={`${name}-church`}
      >
        <div data-testid="churchName" className={styles.churchName}>
          {name}
        </div>
        <div data-testid="churchLocation" className={styles.churchLocation}>
          {location}
        </div>
      </a>
      <ShowMore {...showMoreDetails} />
    </div>
  );
}

export type DisplayChurchEntryProps = {
  name: string;
  url: string;
  location: string;
};

export function DisplayChurchEntry({
  name,
  url,
  location,
}: DisplayChurchEntryProps) {
  return (
    <div>
      <a
        data-testid="linkToChurchWebsite"
        href={url}
        key={`${name}-church`}
        className={styles.churchLink}
      >
        <div data-testid="churchName" className={styles.churchName}>
          {name}
        </div>
        <div data-testid="churchLocation" className={styles.churchLocation}>
          {location}
        </div>
      </a>
    </div>
  );
}

export type ShowMoreProps = {
  disruptionReason: string;
  newsletterUrl: string;
};

export function ShowMore({ disruptionReason, newsletterUrl }: ShowMoreProps) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div>
      <div data-testid="disruptionRow" className={styles.disruptionRow}>
        <div data-testid="disruptionWarning">
          {" "}
          ⚠️ Maybe disrupted this week!
        </div>
        <button
          data-testid="showMoreButton"
          onClick={() => setShowDescription(!showDescription)}
        >
          Show more{" "}
        </button>
      </div>
      {showDescription ? (
        <div>
          <p data-testid="description">{disruptionReason}</p>
          {displayNewsletter(newsletterUrl)}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function displayNewsletter(newsletterUrl: string) {
  return (
    <p data-testid="newsletterUrl">
      See newsletter <a href={newsletterUrl}>here</a>.
    </p>
  );
}

const westminsterCathedral = displayChurch(
  "Westminster Cathedral",
  "https://westminstercathedral.org.uk/",
  "Victoria SW1P 1LT"
);

const stsPeterAndPaul = displayChurch(
  "Sts Peter & Paul",
  "https://parish.rcdow.org.uk/clerkenwell/",
  "Clerkenwell EC1R 1UL"
);

const bromptonOratory = displayChurch(
  "Brompton Oratory",
  "https://www.bromptonoratory.co.uk/#about",
  "Knightsbridge SW7 2RP"
);

const farmStreet = displayChurch(
  "Immaculate Conception",
  "https://www.farmstreet.org.uk/",
  "Mayfair W1K 3AH"
);

const stGeorgesCathedral = displayChurch(
  "St George's Cathedral",
  "https://www.stgeorgescathedral.org.uk/",
  "Southwark SE1 7HY"
);

const spanishPlace = displayChurch(
  "St James'",
  "https://www.sjrcc.org.uk/",
  "Spanish Place W1U 3QY"
);

const stPatricksSoho = displayChurch(
  "St Patrick's",
  "https://www.stpatricksoho.org/",
  "Soho W1D 4NR"
);

const warwickStreet = displayChurch(
  "Our Lady of the Assumption",
  "https://www.warwickstreet.org.uk/",
  "Piccadilly W1B 5LZ"
);

const stMaryMoorfields = displayChurch(
  "St Mary Moorfields",
  "https://parish.rcdow.org.uk/moorfields/",
  "Liverpool Street EC2M 7LS"
);

const corpusChristi = displayChurch(
  "Corpus Christi",
  "https://corpuschristimaidenlane.org.uk/",
  "Covent Garden  WC2E 7NB"
);

const stEtheldredras = displayChurch(
  "St Etheldreda's",
  "https://www.stetheldreda.co.uk/",
  "Farringdon EC1N 6RY"
);

const notreDame = displayChurch(
  "Notre Dame de France (French)",
  "https://www.ndfchurch.org/en/",
  "Leicester Square WC2H 7BX"
);

const stAnselmAndStCecilia = displayChurch(
  "St Anselm & St Cæcilia",
  "https://parish.rcdow.org.uk/lincolnsinnfields/",
  "Holborn WC2B 6DX"
);

const mountCarmel = displayChurch(
  "Our Lady of Mount Carmel & St Simon Stock",
  "https://carmelitechurch.org/",
  "High Street Kensington W8 4BB"
);

const ukrainianCathedral = displayChurch(
  "Ukrainian Catholic Cathedral",
  "https://www.ucc-gb.com/cathedral",
  "Mayfair W1K 5BQ"
);

const queenOfHeaven = displayChurch(
  "Our Lady, Queen of Heaven",
  "https://parish.rcdow.org.uk/queensway/",
  "Queensway W2 6LT"
);

const ourLadyOfTheRosary = displayChurch(
  "Our Lady of the Rosary",
  "https://parish.rcdow.org.uk/marylebone/mass-times/",
  "Marylebone NW1 5QT"
);

const stMarysCadoganStreet = displayChurch(
  "St Mary's Cadogan Street",
  "https://www.stmaryscadoganstreet.co.uk/",
  "Sloane Square SW3 2QP"
);

const holyApostles = displayChurch(
  "Holy Apostles",
  "https://parish.rcdow.org.uk/pimlico/",
  "Pimlico SW1V 4LY"
);

const stCharlesBorromeo = displayChurch(
  "St Charles Borromeo",
  "https://parish.rcdow.org.uk/oglestreet/",
  "Fitzrovia W1W 6HS "
);

//Excluded (and why):
//https://ssjc.uk/st-theodore/ - Eastern Rite, really close to Westminster Cathedral, not much info

//Suspended over summer
const mostPreciousBlood = displayChurch(
  "Most Precious Blood",
  "https://www.preciousblood.org.uk/",
  "Borough Market SE1 1TD"
);
