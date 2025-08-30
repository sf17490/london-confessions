from selenium import webdriver
from selenium.webdriver.common.by import By

from assess_with_ai import get_ai_assessment
from prompts import st_georges_cathedral_prompt, st_patricks_soho_prompt
import json


driver = webdriver.Chrome()


def navigate_to_st_georges_newsletter():
    driver.get("https://www.stgeorgescathedral.org.uk/news/")

    download_button = driver.find_element(
        By.PARTIAL_LINK_TEXT, "Sunday Newsletter")

    newsletter_pdf_url = download_button.get_attribute("href")
    return newsletter_pdf_url


st_georges_newsletter_url = navigate_to_st_georges_newsletter()


def navigate_to_st_patricks_newsletter():
    driver.get("https://www.stpatricksoho.org/newsletter")

    # Hunch that st pat's newsletter is always the second button
    download_buttons = driver.find_elements(
        By.PARTIAL_LINK_TEXT, "Download")

    # For some reason the print statements help
    print("Finding st pat's second download button...")
    second = download_buttons[1]
    print(second)

    newsletter_pdf_url = second.get_attribute("href")
    return newsletter_pdf_url


st_pats_newsletter_url = navigate_to_st_patricks_newsletter()

appraisals_json = [{
    "name": "stGeorges",
    "appraisal": get_ai_assessment(st_georges_cathedral_prompt, st_georges_newsletter_url)
},
    {
    "name": "stPatricks",
    "appraisal": get_ai_assessment(st_patricks_soho_prompt, st_pats_newsletter_url)
}
]

print("appraisals json is...")
print(appraisals_json)


with open("appraisals.json", "w") as f:
    json.dump(appraisals_json, f, indent=4)
