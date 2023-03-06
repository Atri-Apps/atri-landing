from .atri import Atri
from fastapi import Request, Response
from atri_utils import *

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    at.code_one_snippet.styles.left = "-7%";
    at.code_one_snippet.styles.top = "31%";
    at.code_two_snippet.styles.right = "-5%";
    at.code_two_snippet.styles.top = "15%";

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.sign_up_button.onClick:
        at.sign_up_status_text.custom.text = "Thank you for signing up!"
        at.sign_up_status.styles.display = "flex"