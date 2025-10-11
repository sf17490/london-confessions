import json

example_ai_assessment = '{ changed: true, reason: "According to this newsletter, Saturday confessions are from 10:00-11:00 and 17:00-17:50, not until 18:00. Weekday confessions remain 12:00-12:20 and Sunday confessions remain 10:00-10:30 and 12:00-12:30. Please note this schedule is subject to updates via the Cathedral website." }'

example_json = {
    "date": "07/10/2025",
    "appraisals": [
        {
            "name": "St George's Cathedral",
            "appraisal": {
                "changed": "unknown"
            },
            "newsletterUrl": "https://www.stgeorgescathedral.org.uk/media/1060/newsletter.pdf"
        },
        {
            "name": "St Patrick's",
            "appraisal": {
                "changed": "true",
                "reason": "Per this newsletter, weekday Confessions are 12:15pm–12:40pm, not 12:00pm–12:40pm. Saturday Confessions are 5:30pm–5:55pm, not until 6:00pm. No Confessions are listed for Sunday."
            },
            "newsletterUrl": "https://cdn.prod.website-files.com/604cd9b97ea6bcb8e1d06a8b/68c3e01901de551b2c3b4789_Sunday%2014th%20September%20-%20Exhaltation%20of%20Holy%20Cross.pdf"
        },
        {
            "name": "Our Lady of Mount Carmel & St Simon Stock",
            "appraisal": {
                "changed": "false"
            },
            "newsletterUrl": "https://carmelitechurch.org/wp-content/uploads/2025/09/Sunday-14th-September-2025.pdf"
        }
    ]
}


with open("ai_pipeline/appraisals.json", "w") as f:
    json.dump(example_json, f, indent=4)
