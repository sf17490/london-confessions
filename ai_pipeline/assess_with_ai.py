from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


def get_ai_assessment(prompt, pdf_url):
    prompt_with_pdf_attached = [
        {
            "role": "user",
            "content": [
                    {
                        "type": "input_file",
                        "file_url": pdf_url  # May be cheaper to just put the pdf url in the prompt you know
                    },
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

# Example error responses:
# If I give it a 'pdf_url' that's really a html page, such as https://www.bromptonoratory.co.uk/weekly-parish-newsletter
# openai.BadRequestError: Error code: 400 - {'error': {'message': 'The file type you uploaded is not supported. Please try again with a pdf', 'type': 'invalid_request_error', 'param': 'input', 'code': 'unsupported_file'}}
