from openai import OpenAI, APIError, APITimeoutError
import os

# from dotenv import load_dotenv

# load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


def get_ai_assessment(prompt, pdf_url=None):
    prompt_with_maybe_pdf_attached = create_prompt_with_maybe_pdf(
        prompt, pdf_url)
    try:
        response = client.responses.create(
            model="gpt-5",
            input=prompt_with_maybe_pdf_attached,
            timeout=45
        )
        return response.output_text
    except (APIError, APITimeoutError) as e:
        print("Given this prompt:")
        print(prompt)
        print("Error from AI!")
        print(e)
        return "{ \"changed\": \"unknown\"}"

# Example error:
# openai.BadRequestError: Error code: 400 - {'error': {'message': 'Timeout while downloading https://carmelitechurch.org/wp-content/uploads/2025/09/Sunday-21st-September-2025.pdf.', 'type': 'invalid_request_error', 'param': 'url', 'code': 'invalid_value'}}


def create_prompt_with_maybe_pdf(prompt, pdfUrl=None):
    if pdfUrl:
        return [
            {
                "role": "user",
                "content": [
                        {
                            "type": "input_file",
                            "file_url": pdfUrl  # May be cheaper to just put the pdf url in the prompt you know
                        },
                    {
                            "type": "input_text",
                            "text": prompt
                    }
                ]
            }
        ]
    else:
        return [
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
