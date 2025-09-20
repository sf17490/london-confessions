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
          <div data-testid="uncheckedWarning">❓Unknown Status</div>
        </div>
      </a>
    </div>
  );
}

export default MyDisplayUnknownChurchEntry;
