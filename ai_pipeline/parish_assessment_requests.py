from selenium import webdriver
from selenium.webdriver.common.by import By

from assess_with_ai import get_ai_assessment
from prompts import st_georges_cathedral_prompt, st_patricks_soho_prompt, farm_street_prompt, corpus_christi_prompt, st_peter_and_paul_prompt, st_etheldreda_prompt, st_anselm_and_st_caecilia_prompt, brompton_oratory_prompt, our_lady_queen_of_heaven_prompt


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

# TODO: Finish this


def get_brompton_oratory_newsletter_assessment(driver: webdriver):
    newsletter_url = "https://www.bromptonoratory.co.uk/weekly-parish-newsletter"
    newsletter_text = get_html_parish_newsletter(driver, newsletter_url)
    ai_assessment = get_ai_assessment(
        brompton_oratory_prompt + newsletter_text)
    return [ai_assessment, newsletter_url]


driver = webdriver.Chrome()
brompton_oratory_text = get_html_parish_newsletter(driver,
                                                   "https://www.bromptonoratory.co.uk/weekly-parish-newsletter")
print(brompton_oratory_text)
