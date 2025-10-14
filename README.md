## London Confessions

I set an AI loose in the streets of London with the instruction to "Do Catholic Stuff!" It got frustrated when it went to confession only to find that confessions were cancelled that day. So it's started reading every London parish newsletter each week and sticking their confession times up on this website. Now I can see at a glance if confession is cancelled and where I can go instead. Maybe you'll find it helpful too? 🤷

👉 www.londonconfessions.com 👈

<img src="image-1.png" width=200 />

## How it works: Non-Technical Explanation

The confession times of every church in Central London (Zone 1) are listed on this website.(\*)

For each church, we give chatGPT a copy of this week's parish newsletter and ask it "Are these confession times accurate according to this newsletter?" If the times are inaccurate, chatGPT gives us a brief assessment highlighting the difference. This is where the "disruption" notices come from:

![Example of disruption notice](image-2.png)

If the newsletter does not detail any changes to this week's confession schedule, then it is marked as "✅ Good service".

Some churches are marked as "Unknown status". This can happen for a few reasons, the most likely ones being:

- The church doesn't keep an up-to-date online newsletter.
- The AI took too long to understand the newsletter so we gave up.
- The AI has gone on strike until I put more money into my openAI account.

(\*) Only English-speaking, Catholic churches that maintain a publically accessible newsletter are included. So churches like the Ukrainian Catholic Cathedral in Mayfair are excluded from this website. I don't want to send American tourists to confess their sins in Ukrainian at 6:45AM!

## How it works: "Carlo Acutis" Level explanation

This is a Next.js project with a Typescript frontend and a Python backend. Inside the `ai_pipeline` folder, newsletters are scraped from parish websites using Selenium. These newsletters are posted to the chatGPT API with the relevant prompt (see `prompts.py`) and are then written to json (`appraisals.json`). That json file is used to configure the frontend.
