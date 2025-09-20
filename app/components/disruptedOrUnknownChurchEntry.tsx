import React from "react";
import DisplayUnknownChurchEntry from "./displayUnknownChurchEntry";
import { DisplayDodgyChurchEntry } from "./staticData";

export type DisruptedOrUnknownChurchEntryProps = {
  name: string;
  location: string;
  url: string;
  disruptionReason: string | undefined;
  newsletterUrl: string;
};

export function DisruptedOrUnknownChurchEntry(
  input: DisruptedOrUnknownChurchEntryProps
) {
  const name = input.name;
  const url = input.url;
  const location = input.location;
  const showMoreDetails = {
    disruptionReason: input.disruptionReason,
    newsletterUrl: input.newsletterUrl,
  };
  return (
    <div>
      {input.disruptionReason ? (
        <div data-testid="disruptionNotice">
          {
            <DisplayDodgyChurchEntry
              {...{ name, url, location, showMoreDetails }}
            />
          }
        </div>
      ) : (
        <div data-testid="uncheckedWarningNotice">
          <DisplayUnknownChurchEntry
            churchData={{ name: name, url: url, location: location }}
          />
        </div>
      )}
    </div>
  );
}
