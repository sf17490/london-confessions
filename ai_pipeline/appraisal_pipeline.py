from selenium import webdriver
from selenium.webdriver.common.by import By

from assess_with_ai import get_ai_assessment
from prompts import st_georges_cathedral_prompt, st_patricks_soho_prompt, st_simon_stock_prompt
import json
import time


driver = webdriver.Chrome()


def navigate_to_st_georges_newsletter():
    driver.get("https://www.stgeorgescathedral.org.uk/news/")

    download_button = driver.find_element(
        By.PARTIAL_LINK_TEXT, "Sunday Newsletter")

    newsletter_pdf_url = download_button.get_attribute("href")
    return newsletter_pdf_url


st_georges_newsletter_url = navigate_to_st_georges_newsletter()

st_georges_assessment = get_ai_assessment(
    st_georges_cathedral_prompt, st_georges_newsletter_url)


def navigate_to_st_patricks_newsletter():
    driver.get("https://www.stpatricksoho.org/newsletter")
    time.sleep(2)

    # give in to cookies
    accept_cookies_button = driver.find_element(
        By.XPATH, '//button[text()="Allow all cookies"]')
    accept_cookies_button.click()

    # Hunch that st pat's newsletter is always the second button
    download_buttons = driver.find_elements(
        By.PARTIAL_LINK_TEXT, "Download")

    print("downloads buttons for st pats")
    print(download_buttons)

    # For some reason the print statements help
    print("Finding st pat's second download button...")
    second = download_buttons[1]
    print(second)

    newsletter_pdf_url = second.get_attribute("href")
    return newsletter_pdf_url


st_pats_newsletter_url = navigate_to_st_patricks_newsletter()

st_pats_assessment = get_ai_assessment(
    st_patricks_soho_prompt, st_pats_newsletter_url)


def navigate_to_st_simon_stock_newsletter():
    driver.get("https://carmelitechurch.org/newsletter/")

    time.sleep(2)
    download_buttons = driver.find_elements(
        By.PARTIAL_LINK_TEXT, "Sunday")

    print("Finding St Simon Stock's most recent newsletter...")
    most_recent_newsletter_webpage = download_buttons[0]
    most_recent_newsletter_webpage.click()

    download_button = driver.find_element(
        By.PARTIAL_LINK_TEXT, "Sunday")

    newsletter_pdf_url = download_button.get_attribute("href")
    return newsletter_pdf_url


st_simon_stock_newsletter_url = navigate_to_st_simon_stock_newsletter()
st_simon_stock_assessment = get_ai_assessment(
    st_simon_stock_prompt, st_simon_stock_newsletter_url)


appraisals = [{
    "name": "stGeorges",
    "appraisal": json.loads(st_georges_assessment)
},
    {
    "name": "St Patrick's",
    "appraisal": json.loads(st_pats_assessment)
},
    {
    "name": "our_lady_of_mount_carmel_and_st_simon_stock",
    "appraisal": json.loads(st_simon_stock_assessment)
}
]

appraisals_json = json.dumps(appraisals, indent=2, ensure_ascii=False)

with open("ai_pipeline/appraisals.json", "w") as f:
    f.write(appraisals_json)
