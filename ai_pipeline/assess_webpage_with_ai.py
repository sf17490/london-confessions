
from prompts import brompton_oratory_prompt
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


def get_ai_assessment(prompt):
    prompt_with_pdf_attached = [
        {
            "role": "user",
            "content": [
                {
                    "type": "input_text",
                    "text": prompt
                }
            ]
        }
    ]
    response = client.responses.create(
        model="gpt-5",
        input=prompt_with_pdf_attached
    )
    return response.output_text


def get_brompton_oratory_assessment():
    return get_ai_assessment(brompton_oratory_prompt)
