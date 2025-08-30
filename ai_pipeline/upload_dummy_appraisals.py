import json

example_ai_assessment = '{ changed: true, reason: "According to this newsletter, Saturday confessions are from 10:00-11:00 and 17:00-17:50, not until 18:00. Weekday confessions remain 12:00-12:20 and Sunday confessions remain 10:00-10:30 and 12:00-12:30. Please note this schedule is subject to updates via the Cathedral website." }'

example_json = [{'name': 'stGeorges', 'appraisal': '{ changed: true, reason: "Per the newsletter, weekday Confessions are 12:00–12:20. On Saturdays they are 10:00–11:00 and 17:00–17:50, not until 18:00. Sundays remain 10:00–10:30 and 12:00–12:30." }'}, {'name': 'stPatricks', 'appraisal': '{ "changed": true, "reason": "According to this newsletter, Confession is Monday to Friday from 12:15pm to 12:40pm, not from 12:00pm. On Saturdays, Confession is from 5:30pm to 5:55pm, not until 6:00pm. No Sunday Confession is listed." }'}, {
    'name': 'our_lady_of_mount_carmel_and_st_simon_stock', 'appraisal': '{ "changed": true, "reason": "Please note an adjustment to the Saturday evening Confessions: they are listed as 17:00-17:50, not 17:00-18:00. Weekday Confessions remain 17:40-18:00 (Mon-Fri). No Sunday Confessions are advertised in this newsletter." }'}]

with open("ai_pipeline/appraisals.json", "w") as f:
    json.dump(example_json, f, indent=4)
