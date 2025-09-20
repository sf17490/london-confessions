import React from "react";
import styles from "./displayUnknownChurchEntry.module.css";

export type DisplayUnknownChurchEntryProps = {
  name: string;
  url: string;
  location: string;
};

function MyDisplayUnknownChurchEntry({
  churchData,
}: {
  churchData: DisplayUnknownChurchEntryProps;
}) {
  return (
    <div
      data-testid="uncheckedChurchContainer"
      className={styles.uncheckedChurch}
    >
      <a
        data-testid="churchLink"
        href={churchData.url}
        className={styles.churchLink}
      >
        <div data-testid="churchName" className={styles.churchName}>
          {churchData.name}
        </div>

        <div data-testid="churchLocation" className={styles.churchLocation}>
          {churchData.location}
        </div>
      </a>
      <div data-testid="uncheckedWarning">
        ❓ We were unable to verify this confession time
      </div>
    </div>
  );
}

{
  /* <div>
  <a
    data-testid="linkToChurchWebsite"
    href={url}
    key={`${name}-church`}
    className={styles.churchLink}
  />
  <div data-testid="churchName" className={styles.churchName}>
    {name}
  </div>
  <div data-testid="churchLocation" className={styles.churchLocation}>
    {location}
  </div>
</div>; */
}

export default MyDisplayUnknownChurchEntry;
