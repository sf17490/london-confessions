# Experimental chat gpt prompt:

## Webpage newsletters:

### Westminster Cathedral

At Westminster Cathedral, I am expecting a confession timetable as follows:
Weekdays: 11:30-12:30 and 16:30-17:30
Saturdays: 11:30-12:30 and 17:00-18:00
Sundays: 10:45-12:30 and 17:00-18:00

Check this is correct according to this image only.

Pay especial attention to li web elements containing the word "onfessions"

If I am correct, return a json response like so:
{ changed: false }

If I am incorrect, return a json response like so:

{ changed: true, reason: "insert max 3 sentences here explaining the change in confession times. Express yourself in an offical, public-announcement way. " }

If there is insufficient information to determine if I am correct or not, return a json response like so:

{ changed: "unknown"}

Do not elaborate. Communicate entirely using a json response only.

## PDF newsletters:

### Most Precious Blood, Southwark

```
I am expecting confessions to be on weekdays (Tues-Fri) at 12:30pm at Most Precious Blood, Southwark. Check this is correct according to this parish newsletter only: https://www.preciousblood.org.uk/uploads/1/7/5/4/17544525/newsthisweek.pdf

If I am correct, return a json response like so:
{ changed: false }

If I am incorrect, return a json response like so:

{ changed: true, reason: "insert max 4 sentences here explaining the change in confession times" }

If there is insufficient information to determine if I am correct or not, return a json response like so:

{ changed: "unknown"}

Do not elaborate. Communicate entirely using a json response only.
```

This prompt fails because chatGPT can't access the pdf at that page. (it works for Chiswick though). May need to upload pdfs directly and do RAG.

### St George's Cathedral, Southwark

At St George's Cathedral, I am expecting a confession timetable as follows: Weekdays: 12-12:20 Saturdays: 10:00 - 11:00 and 17:00-18:00 Sundays: 10:00-10:30 and 12:00-12:30 Check this is correct according to this pdf only. If I am correct, return a json response like so: { changed: false } If I am incorrect, return a json response like so: { changed: true, reason: "insert max 4 sentences here explaining the change in confession times. Express yourself in an official, public-announcement way. " } If there is insufficient information to determine if I am correct or not, return a json response like so: { changed: "unknown"} Do not elaborate. Communicate entirely using a json response only.

Response:

{ "changed": true, "reason": "Please note a small adjustment to the Saturday evening Confession schedule. Confessions will be available from 5:00pm until 5:50pm, not until 6:00pm. All other Confession times remain as previously stated. Thank you for your attention to this update." }

### Brompton Oratory

At Brompton Oratory, I am expecting a confession timetable as follows: Weekdays: 12-12:30 and 17:30-18:00 Saturdays: 10:00 - 12:45 & 15:00-18:00 and 17:00-18:00 Sundays: after each mass. Check this is correct according to this pdf only. If I am correct, return a json response like so: { changed: false } If I am incorrect, return a json response like so: { changed: true, reason: "insert max 4 sentences here explaining the change in confession times. Express yourself in an official, public-announcement way. " } If there is insufficient information to determine if I am correct or not, return a json response like so: { changed: "unknown"} Do not elaborate. Communicate entirely using a json response only.

### St Patrick's Soho

At St Patrick's Soho, I am expecting a confession timetable as follows: Weekdays: 12-12:40 and Saturdays: 17:30 - 18:00 and nothing on Sunday. Check this is correct according to this pdf only. If I am correct, return a json response like so: { changed: false } If I am incorrect, return a json response like so: { changed: true, reason: "insert max 4 sentences here explaining the change in confession times. Express yourself in an official, public-announcement way. " } If there is insufficient information to determine if I am correct or not, return a json response like so: { changed: "unknown"} Do not elaborate. Communicate entirely using a json response only.

### Our lady of Mount Carmel & St Simon Stock

At Our lady of Mount Carmel & St Simon Stock, I am expecting a confession timetable as follows: Weekdays: 17:40-18:00, Saturdays: 11:30 - 12:15 & 17:00-18:00 and nothing on Sunday. Check this is correct according to this newsletter only. If I am correct, return a json response like so: { changed: false } If I am incorrect, return a json response like so: { changed: true, reason: "insert max 4 sentences here explaining the change in confession times. Express yourself in an official, public-announcement way."} If there is insufficient information to determine if I am correct or not, return a json response like so: {changed: "unknown"} Do not elaborate. Communicate entirely using a json response only.
