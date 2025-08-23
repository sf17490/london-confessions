import React from "react";

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

function StaticData({ dayOfWeek }: { dayOfWeek: DayOfWeek }) {
  switch (dayOfWeek) {
    case "Monday":
      return mondayChurches();
    case "Tuesday":
      return tuesdayChurches();
    case "Wednesday":
      return WednesdayChurches();
    case "Thursday":
      return ThursdayChurches();
    case "Friday":
      return FridayChurches();
    case "Saturday":
      return SaturdayChurches();
    case "Sunday":
      return SundayChurches();
  }
}

export default StaticData;

function mondayChurches() {
  return (
    <div>
      <h2>11:30</h2>
      {westminsterCathedral}
      {stsPeterAndPaul}
      <h2>12:00</h2>
      {bromptonOratory}
      {stGeorgesCathedral}
      {stPatricksSoho}
      {stsPeterAndPaul}
      {farmStreet}
      {westminsterCathedral}
      {spanishPlace}
      <h2>12:15</h2>
      {warwickStreet}
      <h2>12:30</h2>
      {spanishPlace}
      {stMaryMoorfields}
      {stPatricksSoho}
      {farmStreet}
      <h2>12:35</h2>
      {corpusChristi}
      <h2>13:20</h2>
      {stEtheldredras}
      <h2>16:30</h2>
      {westminsterCathedral}
      <h2>17:00</h2>
      {westminsterCathedral}
      <h2>17:30</h2>
      {bromptonOratory}
      {/* <p>
        ⚠️ Brompton Oratory, Knightsbridge ⚠️ <a href=""> May be disrupted</a>
      </p> */}
      {notreDame}
      {stAnselmAndStCecilia}
      <h2>17:40</h2>
      {mountCarmel}
      <h2>17:45</h2>
      {ukrainianCathedral}
    </div>
  );
}

function tuesdayChurches() {
  return (
    <div>
      <h2>06:45</h2>
      {ukrainianCathedral}

      <h2>11:30</h2>
      {westminsterCathedral}
      <h2>12:00</h2>
      {bromptonOratory}
      {stGeorgesCathedral}
      {farmStreet}
      {stPatricksSoho}
      {westminsterCathedral}
      <h2>12:15</h2>
      {warwickStreet}
      <h2>12:30</h2>
      {stMaryMoorfields}
      {farmStreet}
      {stPatricksSoho}
      {/*corpus christi special*/}
      <h2>13:20</h2>
      {stEtheldredras}

      <h2>16:30</h2>
      {westminsterCathedral}
      <h2>17:00</h2>
      {westminsterCathedral}
      <h2>17:30</h2>
      {bromptonOratory}
      {/*Can't find notre dame */}
      {stAnselmAndStCecilia}
      <h2>17:40</h2>
      {mountCarmel}
      <h2>18:00</h2>
      {ukrainianCathedral}
    </div>
  );
}

function WednesdayChurches() {
  return (
    <div>
      <h2>06:45</h2>
      {ukrainianCathedral}

      <h2>11:30</h2>
      {westminsterCathedral}
      <h2>12:00</h2>
      {bromptonOratory}
      {stGeorgesCathedral}
      {farmStreet}
      {stPatricksSoho}
      {westminsterCathedral}
      <h2>12:15</h2>
      {warwickStreet}
      <h2>12:30</h2>
      {stMaryMoorfields}
      {farmStreet}
      {stPatricksSoho}
      {/*corpus christi special*/}
      <h2>13:20</h2>
      {stEtheldredras}

      <h2>16:30</h2>
      {westminsterCathedral}
      <h2>17:00</h2>
      {westminsterCathedral}
      <h2>17:30</h2>
      {bromptonOratory}
      {/*Can't find notre dame */}
      {stAnselmAndStCecilia}
      <h2>17:40</h2>
      {mountCarmel}
      <h2>18:00</h2>
      {ukrainianCathedral}
    </div>
  );
}

function ThursdayChurches() {
  return (
    <div>
      <h2>06:45</h2>
      {ukrainianCathedral}

      <h2>11:30</h2>
      {westminsterCathedral}
      <h2>12:00</h2>
      {bromptonOratory}
      {stGeorgesCathedral}
      {farmStreet}
      {stPatricksSoho}
      {westminsterCathedral}
      <h2>12:15</h2>
      {warwickStreet}
      <h2>12:30</h2>
      {stMaryMoorfields}
      {farmStreet}
      {stPatricksSoho}
      {/*corpus christi special*/}
      <h2>13:20</h2>
      {stEtheldredras}

      <h2>16:30</h2>
      {westminsterCathedral}
      <h2>17:00</h2>
      {westminsterCathedral}
      <h2>17:30</h2>
      {bromptonOratory}
      {/*Can't find notre dame */}
      {stAnselmAndStCecilia}
      <h2>17:40</h2>
      {mountCarmel}
      <h2>18:00</h2>
      {ukrainianCathedral}
    </div>
  );
}

function FridayChurches() {
  return (
    <div>
      <h2>06:45</h2>
      {ukrainianCathedral}

      <h2>11:30</h2>
      {westminsterCathedral}
      <h2>12:00</h2>
      {bromptonOratory}
      {stGeorgesCathedral}
      {farmStreet}
      {stPatricksSoho}
      {westminsterCathedral}
      <h2>12:15</h2>
      {warwickStreet}
      <h2>12:30</h2>
      {stMaryMoorfields}
      {farmStreet}
      {stPatricksSoho}
      {/*corpus christi special*/}
      <h2>13:20</h2>
      {stEtheldredras}

      <h2>16:30</h2>
      {westminsterCathedral}
      <h2>17:00</h2>
      {westminsterCathedral}
      <h2>17:30</h2>
      {bromptonOratory}
      {/*Can't find notre dame */}
      {stAnselmAndStCecilia}
      <h2>17:40</h2>
      {mountCarmel}
      <h2>18:00</h2>
      {ukrainianCathedral}
    </div>
  );
}

function SaturdayChurches() {
  return (
    <div>
      <h2>07:45</h2>
      {ukrainianCathedral}

      <h2>10:00</h2>
      {bromptonOratory}
      {stGeorgesCathedral}

      <h2>10:30</h2>
      {bromptonOratory}
      {stGeorgesCathedral}
      {mountCarmel}

      <h2>11:00</h2>
      {bromptonOratory}
      {farmStreet}
      {mountCarmel}

      <h2>11:30</h2>
      {bromptonOratory}
      {farmStreet}
      {mountCarmel}

      {westminsterCathedral}
      <h2>12:00</h2>
      {bromptonOratory}
      {westminsterCathedral}
      <h2>15:00</h2>
      {bromptonOratory}
      <h2>15:30</h2>
      {bromptonOratory}
      <h2>16:00</h2>
      {bromptonOratory}
      <h2>16:30</h2>
      {bromptonOratory}
      <h2>16:45</h2>
      {spanishPlace}
      <h2>17:00</h2>
      {westminsterCathedral}
      {stGeorgesCathedral}
      {bromptonOratory}
      {spanishPlace}
      {stAnselmAndStCecilia}
      {mountCarmel}

      <h2>17:15</h2>
      {warwickStreet}
      <h2>17:30</h2>
      {westminsterCathedral}
      {stGeorgesCathedral}
      {stPatricksSoho}
      {bromptonOratory}
      {stAnselmAndStCecilia}
      {mountCarmel}

      <h2>17:45</h2>
      {farmStreet}
      <h2>18:00</h2>
      {ukrainianCathedral}
    </div>
  );
}

function SundayChurches() {
  return (
    <div>
      <h2>07:45</h2>
      {farmStreet}
      {ukrainianCathedral}

      <h2>08:30</h2>
      {bromptonOratory}
      <h2>09:15</h2>
      {farmStreet}

      <h2>09:30</h2>
      {bromptonOratory}
      <h2>09:45</h2>
      {ukrainianCathedral}

      <h2>10:00</h2>
      {stGeorgesCathedral}

      <h2>10:30</h2>
      {bromptonOratory}
      <h2>10:45</h2>
      {farmStreet}

      {westminsterCathedral}
      <h2>11:00</h2>
      {westminsterCathedral}
      <h2>11:30</h2>
      {westminsterCathedral}
      <h2>11:45</h2>
      {ukrainianCathedral}

      <h2>12:00</h2>
      {bromptonOratory}
      {stGeorgesCathedral}
      {westminsterCathedral}
      <h2>12:45</h2>
      {farmStreet}

      <h2>16:45</h2>
      {ukrainianCathedral}

      <h2>17:00</h2>
      {westminsterCathedral}
      <h2>17:15</h2>
      {farmStreet}

      <h2>17:30</h2>
      {westminsterCathedral}
      <h2>18:00</h2>
      {bromptonOratory}
      {westminsterCathedral}
      <h2>18:30</h2>
      {bromptonOratory}
      <h2>18:45</h2>
      {farmStreet}
    </div>
  );
}

function displayChurch(name: string, url: string, location: string) {
  return (
    <p>
      <a href={url}>{name}</a>, {location}
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
