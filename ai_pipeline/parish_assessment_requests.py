from selenium import webdriver
from selenium.webdriver.common.by import By
import time

from assess_with_ai import get_ai_assessment
from prompts import st_georges_cathedral_prompt, st_patricks_soho_prompt, farm_street_prompt, corpus_christi_prompt, st_peter_and_paul_prompt, st_etheldreda_prompt, st_anselm_and_st_caecilia_prompt, brompton_oratory_prompt, our_lady_queen_of_heaven_prompt, our_lady_of_the_rosary_prompt, westminster_cathedral_prompt, holy_apostles_prompt, st_james_prompt, st_marys_cadogan_street_prompt, st_simon_stock_prompt, most_precious_blood_prompt


def navigate_to_parish_newsletter(driver: webdriver, url):
    try:
        driver.get(url)

        # Find all pdfs links
        all_pdfs = driver.find_elements(
            By.XPATH, '//a[contains(@href, "pdf")]')

        # filter out music sheets (if any - looking at you, St Pat's)
        newsletter_pdfs_only = [
            pdfLink for pdfLink in all_pdfs if "MUSIC" not in pdfLink.get_attribute("href")]

        # select the most recent newsletter
        most_recent_newsletter_link = newsletter_pdfs_only[0]

        return most_recent_newsletter_link.get_attribute("href")
    except:
        return ""


def get_st_georges_newsletter_assessment(driver: webdriver):
    st_georges_newsletter_url = navigate_to_parish_newsletter(
        driver, "https://www.stgeorgescathedral.org.uk/news/")
    st_georges_assessment = get_ai_assessment(
        st_georges_cathedral_prompt, st_georges_newsletter_url)
    return [st_georges_assessment, st_georges_newsletter_url]


def get_st_patricks_soho_newsletter_assessment(driver: webdriver):
    st_patricks_soho_newsletter_url = navigate_to_parish_newsletter(
        driver, "https://www.stpatricksoho.org/newsletter")
    st_patricks_soho_assessment = get_ai_assessment(
        st_patricks_soho_prompt, st_patricks_soho_newsletter_url)
    return [st_patricks_soho_assessment, st_patricks_soho_newsletter_url]


def get_farm_street_newsletter_assessment(driver: webdriver):
    farm_street_newsletter_url = navigate_to_parish_newsletter(
        driver, "https://www.farmstreet.org.uk/newsletters")
    farm_street_assessment = get_ai_assessment(
        farm_street_prompt, farm_street_newsletter_url)
    return [farm_street_assessment, farm_street_newsletter_url]


def get_corpus_christi_newsletter_assessment(driver: webdriver):
    corpus_christi_newsletter_url = navigate_to_parish_newsletter(
        driver, "https://corpuschristimaidenlane.org.uk/news/")
    corpus_christi_assessment = get_ai_assessment(
        corpus_christi_prompt, corpus_christi_newsletter_url)
    return [corpus_christi_assessment, corpus_christi_newsletter_url]


def get_st_peter_and_paul_newsletter_assessment(driver: webdriver):
    st_peter_and_paul_newsletter_url = navigate_to_parish_newsletter(
        driver, "https://parish.rcdow.org.uk/clerkenwell/__homepage/parish-newsletters-2025/")  # TODO: Will break in 2026
    st_peter_and_paul_assessment = get_ai_assessment(
        st_peter_and_paul_prompt, st_peter_and_paul_newsletter_url)
    return [st_peter_and_paul_assessment, st_peter_and_paul_newsletter_url]


def get_st_etheldreda_newsletter_assessment(driver: webdriver):
    st_etheldreda_newsletter_url = navigate_to_parish_newsletter(
        driver, "https://www.stetheldreda.co.uk/masstimes")
    st_etheldreda_assessment = get_ai_assessment(
        st_etheldreda_prompt, st_etheldreda_newsletter_url)
    return [st_etheldreda_assessment, st_etheldreda_newsletter_url]


def get_our_lady_queen_of_heaven_newsletter_assessment(driver: webdriver):
    our_lady_queen_of_heaven_newsletter_url = navigate_to_parish_newsletter(
        driver, "https://parish.rcdow.org.uk/queensway/")
    our_lady_queen_of_heaven_assessment = get_ai_assessment(
        our_lady_queen_of_heaven_prompt, our_lady_queen_of_heaven_newsletter_url)
    return [our_lady_queen_of_heaven_assessment, our_lady_queen_of_heaven_newsletter_url]


def get_our_lady_of_the_rosary_newsletter_assessment(driver: webdriver):
    our_lady_of_the_rosary_newsletter_url = navigate_to_parish_newsletter(
        driver, "https://parish.rcdow.org.uk/marylebone/newsletters-2023-6/")
    our_lady_of_the_rosary_assessment = get_ai_assessment(
        our_lady_of_the_rosary_prompt, our_lady_of_the_rosary_newsletter_url)
    return [our_lady_of_the_rosary_assessment, our_lady_of_the_rosary_newsletter_url]


def get_st_james_newsletter_assessment(driver: webdriver):
    st_james_newsletter_url = navigate_to_parish_newsletter(
        driver, "https://www.sjrcc.org.uk/")
    st_james_assessment = get_ai_assessment(
        st_james_prompt, st_james_newsletter_url)
    return [st_james_assessment, st_james_newsletter_url]


def get_most_precious_blood_newsletter_assessment(driver: webdriver):
    most_precious_blood_newsletter_url = navigate_to_parish_newsletter(
        driver, "https://www.preciousblood.org.uk/")
    most_precious_blood_assessment = get_ai_assessment(
        most_precious_blood_prompt, most_precious_blood_newsletter_url)
    return [most_precious_blood_assessment, most_precious_blood_newsletter_url]


def get_html_parish_newsletter(driver: webdriver, url):
    try:
        driver.get(url)
        page_text = driver.find_element("tag name", "body").text
        return page_text
    except:
        return ""


def get_st_anselm_and_st_caecilia_newsletter_assessment(driver: webdriver):
    newsletter_url = "https://parish.rcdow.org.uk/lincolnsinnfields/"
    newsletter_text = get_html_parish_newsletter(driver, newsletter_url)
    ai_assessment = get_ai_assessment(
        st_anselm_and_st_caecilia_prompt + newsletter_text)
    return [ai_assessment, newsletter_url]


def get_brompton_oratory_newsletter_assessment(driver: webdriver):
    newsletter_url = "https://www.bromptonoratory.co.uk/weekly-parish-newsletter"
    newsletter_text = get_html_parish_newsletter(driver, newsletter_url)
    ai_assessment = get_ai_assessment(
        brompton_oratory_prompt + newsletter_text)
    return [ai_assessment, newsletter_url]


def get_westminster_cathedral_schedule_table_html(driver: webdriver):
    confessions_page_url = "https://westminstercathedral.org.uk/reconciliation/"
    driver.get(confessions_page_url)
    time.sleep(3)
    # filter out irrelevant events
    mass_times_button = driver.find_element(
        By.XPATH, "//label[contains(text(), 'Mass Times')]")
    mass_times_button.click()
    daily_office_button = driver.find_element(
        By.XPATH, "//label[contains(text(), 'Daily Office')]")
    daily_office_button.click()
    exposition_button = driver.find_element(
        By.XPATH, "//label[contains(text(), 'Exposition')]")
    exposition_button.click()

    # get the resulting table
    events_table_html = driver.find_element(
        By.CLASS_NAME, "ics-calendar-month-grid").get_attribute("outerHTML")
    return events_table_html


def get_westminster_cathedral_schedule_assessment(driver: webdriver):
    confession_webpage_url = "https://westminstercathedral.org.uk/reconciliation/"
    confession_schedule_html = get_westminster_cathedral_schedule_table_html(
        driver)
    ai_assessment = get_ai_assessment(
        westminster_cathedral_prompt + confession_schedule_html)
    return [ai_assessment, confession_webpage_url]


def navigate_to_holy_apostles_newsletter(driver: webdriver):
    driver.get("https://parish.rcdow.org.uk/pimlico/news/category/newsletter/")

    time.sleep(2)
    newsletters = driver.find_elements(
        By.PARTIAL_LINK_TEXT, "Sunday")

    most_recent_newsletter_webpage = newsletters[0]
    most_recent_newsletter_webpage.click()

    download_button = driver.find_element(
        By.XPATH, '//a[contains(@href, "pdf")]')

    newsletter_pdf_url = download_button.get_attribute("href")
    return newsletter_pdf_url


def get_holy_apostles_newsletter_assessment(driver: webdriver):
    holy_apostles_newsletter_url = navigate_to_holy_apostles_newsletter(driver)
    holy_apostles_assessment = get_ai_assessment(
        holy_apostles_prompt, holy_apostles_newsletter_url)
    return [holy_apostles_assessment, holy_apostles_newsletter_url]


# mailchimp newsletter
def navigate_to_st_marys_cadogan_street_newsletter(driver: webdriver):
    driver.get("https://www.stmaryscadoganstreet.co.uk/newsletter")

    time.sleep(2)

    newsletters = driver.find_elements(
        By.XPATH, '//a[contains(@href, "newsletter")]')

    newsletters_with_most_recent_first = newsletters[::-1]

    most_recent_newsletter_webpage_link = newsletters_with_most_recent_first[0].get_attribute(
        "href")

    return most_recent_newsletter_webpage_link


def get_st_marys_cadogan_street_newsletter_assessment(driver: webdriver):
    st_marys_cadogan_street_newsletter_webpage_url = navigate_to_holy_apostles_newsletter(
        driver)
    newsletter_text = get_html_parish_newsletter(
        driver, st_marys_cadogan_street_newsletter_webpage_url)
    st_marys_cadogan_street_assessment = get_ai_assessment(
        st_marys_cadogan_street_prompt + newsletter_text)
    return [st_marys_cadogan_street_assessment, st_marys_cadogan_street_newsletter_webpage_url]


def navigate_to_st_simon_stock_newsletter(driver: webdriver):
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


def get_st_simon_stock_newsletter_assessment(driver: webdriver):
    st_simon_stock_newsletter_url = navigate_to_st_simon_stock_newsletter(
        driver)
    st_simon_stock_assessment = get_ai_assessment(
        st_simon_stock_prompt, st_simon_stock_newsletter_url)
    return [st_simon_stock_assessment, st_simon_stock_newsletter_url]
