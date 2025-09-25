from selenium import webdriver
from selenium.webdriver.common.by import By

from assess_with_ai import get_ai_assessment
from prompts import st_georges_cathedral_prompt
# from prompts import st_georges_cathedral_prompt


def navigate_to_st_georges_newsletter(driver: webdriver):
    try:
        driver.get("https://www.stgeorgescathedral.org.uk/news/")

        download_button = driver.find_element(
            By.PARTIAL_LINK_TEXT, "Sunday Newsletter")

        newsletter_pdf_url = download_button.get_attribute("href")
        return newsletter_pdf_url
    except:
        return ""


def get_st_georges_newsletter_assessment(driver: webdriver):
    st_georges_newsletter_url = navigate_to_st_georges_newsletter(driver)
    st_georges_assessment = get_ai_assessment(
        st_georges_cathedral_prompt, st_georges_newsletter_url)
    return [st_georges_assessment, st_georges_newsletter_url]
