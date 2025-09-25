from openai import OpenAI, APIError, APITimeoutError
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
    try:
        response = client.responses.create(
            model="gpt-5",
            input=prompt_with_pdf_attached,
            timeout=30
        )
        return response.output_text
    except (APIError, APITimeoutError) as e:
        print("Error from AI!")
        print(e)
        return "{ \"changed\": \"unknown\"}"

# Example error:
# openai.BadRequestError: Error code: 400 - {'error': {'message': 'Timeout while downloading https://carmelitechurch.org/wp-content/uploads/2025/09/Sunday-21st-September-2025.pdf.', 'type': 'invalid_request_error', 'param': 'url', 'code': 'invalid_value'}}
