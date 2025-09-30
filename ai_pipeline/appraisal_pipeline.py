from selenium import webdriver

from parish_assessment_requests import get_st_georges_newsletter_assessment, get_st_patricks_soho_newsletter_assessment, get_farm_street_newsletter_assessment, get_corpus_christi_newsletter_assessment, get_st_peter_and_paul_newsletter_assessment, get_st_etheldreda_newsletter_assessment, get_st_anselm_and_st_caecilia_newsletter_assessment, get_brompton_oratory_newsletter_assessment, get_our_lady_queen_of_heaven_newsletter_assessment, get_our_lady_of_the_rosary_newsletter_assessment, get_westminster_cathedral_schedule_assessment, get_holy_apostles_newsletter_assessment, get_st_james_newsletter_assessment, get_st_marys_cadogan_street_newsletter_assessment, get_st_simon_stock_newsletter_assessment, get_most_precious_blood_newsletter_assessment
import json


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

# sts_peter_and_paul_assessment_and_newsletter = get_st_peter_and_paul_newsletter_assessment(
#     driver
# )

st_etheldreda_assessment_and_newsletter = get_st_etheldreda_newsletter_assessment(
    driver
)

our_lady_queen_of_heaven_assessment_and_newsletter = get_our_lady_queen_of_heaven_newsletter_assessment(
    driver
)

our_lady_of_the_rosary_assessment_and_newsletter = get_our_lady_of_the_rosary_newsletter_assessment(
    driver
)

holy_apostles_assessment_and_newsletter = get_holy_apostles_newsletter_assessment(
    driver
)

st_anselm_and_st_caecilia_assessment_and_newsletter = get_st_anselm_and_st_caecilia_newsletter_assessment(
    driver)

st_james_assessment_and_newsletter = get_st_james_newsletter_assessment(
    driver
)

most_precious_blood_assessment_and_newsletter = get_most_precious_blood_newsletter_assessment(
    driver
)

brompton_oratory_assessment_and_newsletter = get_brompton_oratory_newsletter_assessment(
    driver
)

st_marys_cadogan_steet_assessment_and_newsletter = get_st_marys_cadogan_street_newsletter_assessment(
    driver
)

westminster_cathedral_assessment_and_schedule = get_westminster_cathedral_schedule_assessment(
    driver
)


st_simon_stock_assessment_and_newsletter = get_st_simon_stock_newsletter_assessment(
    driver)


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
    "appraisal": json.loads(st_simon_stock_assessment_and_newsletter[0]),
    "newsletterUrl": st_simon_stock_assessment_and_newsletter[1]
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
    # TODO: The AI keeps getting this pdf wrong. Fix later. Might need new model
    #     {
    #     "name": "Sts Peter & Paul",
    #     "appraisal": json.loads(sts_peter_and_paul_assessment_and_newsletter[0]),
    #     "newsletterUrl": sts_peter_and_paul_assessment_and_newsletter[1]

    # },
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
},
    {
    "name": "Holy Apostles",
    "appraisal": json.loads(holy_apostles_assessment_and_newsletter[0]),
    "newsletterUrl": holy_apostles_assessment_and_newsletter[1]
},
    {
    "name": "St James'",
    "appraisal": json.loads(st_james_assessment_and_newsletter[0]),
    "newsletterUrl": st_james_assessment_and_newsletter[1]
},
    {
    "name": "St Mary's Cadogan Street",
    "appraisal": json.loads(st_marys_cadogan_steet_assessment_and_newsletter[0]),
    "newsletterUrl": st_marys_cadogan_steet_assessment_and_newsletter[1]
},
    {
    "name": "Most Precious Blood",
    "appraisal": json.loads(most_precious_blood_assessment_and_newsletter[0]),
    "newsletterUrl": most_precious_blood_assessment_and_newsletter[1]
},
    {
    "name": "Our Lady of the Assumption",
    "appraisal": {"changed": "unknown"},
    "newsletterUrl": "https://www.warwickstreet.org.uk/"
},
    {
    "name": "St Mary Moorfields",
    "appraisal": {"changed": "unknown"},
    "newsletterUrl": "https://parish.rcdow.org.uk/moorfields/"
}

]

appraisals_json = json.dumps(appraisals, indent=2, ensure_ascii=False)

with open("ai_pipeline/appraisals.json", "w") as f:
    f.write(appraisals_json)
