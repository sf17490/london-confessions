from selenium import webdriver
from selenium.webdriver.common.by import By

from parish_assessment_requests import get_st_georges_newsletter_assessment, get_st_patricks_soho_newsletter_assessment, get_farm_street_newsletter_assessment, get_corpus_christi_newsletter_assessment, get_st_peter_and_paul_newsletter_assessment, get_st_etheldreda_newsletter_assessment, get_st_anselm_and_st_caecilia_newsletter_assessment, get_brompton_oratory_newsletter_assessment, get_our_lady_queen_of_heaven_newsletter_assessment, get_our_lady_of_the_rosary_newsletter_assessment, get_westminster_cathedral_schedule_assessment
from assess_with_ai import get_ai_assessment
from prompts import st_simon_stock_prompt
import json
import time


driver = webdriver.Chrome()

st_georges_assessment_and_newsletter = get_st_georges_newsletter_assessment(
    driver)

st_patricks_soho_assessment_and_newsletter = get_st_patricks_soho_newsletter_assessment(
    driver)

farm_street_assessment_and_newsletter = get_farm_street_newsletter_assessment(
    driver)

corpus_christi_assessment_and_newsletter = get_corpus_christi_newsletter_assessment(
    driver
)

sts_peter_and_paul_assessment_and_newsletter = get_st_peter_and_paul_newsletter_assessment(
    driver
)

st_etheldreda_assessment_and_newsletter = get_st_etheldreda_newsletter_assessment(
    driver
)

our_lady_queen_of_heaven_assessment_and_newsletter = get_our_lady_queen_of_heaven_newsletter_assessment(
    driver
)

our_lady_of_the_rosary_assessment_and_newsletter = get_our_lady_of_the_rosary_newsletter_assessment(
    driver
)

st_anselm_and_st_caecilia_assessment_and_newsletter = get_st_anselm_and_st_caecilia_newsletter_assessment(
    driver)

brompton_oratory_assessment_and_newsletter = get_brompton_oratory_newsletter_assessment(
    driver
)

westminster_cathedral_assessment_and_schedule = get_westminster_cathedral_schedule_assessment(
    driver
)


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
    "name": "St George's Cathedral",
    "appraisal": json.loads(st_georges_assessment_and_newsletter[0]),
    "newsletterUrl": st_georges_assessment_and_newsletter[1]
},
    {
    "name": "St Patrick's",
    "appraisal": json.loads(st_patricks_soho_assessment_and_newsletter[0]),
    "newsletterUrl": st_patricks_soho_assessment_and_newsletter[1]
},
    {
    "name": "Our Lady of Mount Carmel & St Simon Stock",
    "appraisal": json.loads(st_simon_stock_assessment),
    "newsletterUrl": st_simon_stock_newsletter_url
},
    {
    "name": "Immaculate Conception",
    "appraisal": json.loads(farm_street_assessment_and_newsletter[0]),
    "newsletterUrl": farm_street_assessment_and_newsletter[1]

},
    {
    "name": "Corpus Christi",
    "appraisal": json.loads(corpus_christi_assessment_and_newsletter[0]),
    "newsletterUrl": corpus_christi_assessment_and_newsletter[1]

},
    {
    "name": "Sts Peter & Paul",
    "appraisal": json.loads(sts_peter_and_paul_assessment_and_newsletter[0]),
    "newsletterUrl": sts_peter_and_paul_assessment_and_newsletter[1]

},
    {
    "name": "St Etheldreda's",
    "appraisal": json.loads(st_etheldreda_assessment_and_newsletter[0]),
    "newsletterUrl": st_etheldreda_assessment_and_newsletter[1]

},
    {
    "name": "St Anselm & St Cæcilia",
    "appraisal": json.loads(st_anselm_and_st_caecilia_assessment_and_newsletter[0]),
    "newsletterUrl": st_anselm_and_st_caecilia_assessment_and_newsletter[1]

},
    {
    "name": "Brompton Oratory",
    "appraisal": json.loads(brompton_oratory_assessment_and_newsletter[0]),
    "newsletterUrl": brompton_oratory_assessment_and_newsletter[1]

},
    {
    "name": "Our Lady, Queen of Heaven",
    "appraisal": json.loads(our_lady_queen_of_heaven_assessment_and_newsletter[0]),
    "newsletterUrl": our_lady_queen_of_heaven_assessment_and_newsletter[1]

},
    {
    "name": "Our Lady of the Rosary",
    "appraisal": json.loads(our_lady_of_the_rosary_assessment_and_newsletter[0]),
    "newsletterUrl": our_lady_of_the_rosary_assessment_and_newsletter[1]
},
    {
    "name": "Westminster Cathedral",
    "appraisal": json.loads(westminster_cathedral_assessment_and_schedule[0]),
    "newsletterUrl": westminster_cathedral_assessment_and_schedule[1]
}

]

appraisals_json = json.dumps(appraisals, indent=2, ensure_ascii=False)

with open("ai_pipeline/appraisals.json", "w") as f:
    f.write(appraisals_json)
