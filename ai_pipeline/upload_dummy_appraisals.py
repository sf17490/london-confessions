import json

example_ai_assessment = '{ changed: true, reason: "According to this newsletter, Saturday confessions are from 10:00-11:00 and 17:00-17:50, not until 18:00. Weekday confessions remain 12:00-12:20 and Sunday confessions remain 10:00-10:30 and 12:00-12:30. Please note this schedule is subject to updates via the Cathedral website." }'

example_json = {
    "name": "stGeorges",
    "appraisal": example_ai_assessment
}

with open("appraisals.json", "w") as f:
    json.dump(example_json, f, indent=4)
