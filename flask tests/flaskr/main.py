from flask import (Blueprint, 
                    flash, g, 
                    redirect, 
                    render_template, 
                    request, url_for)
import functools

bp = Blueprint('main', __name__, url_prefix='/main')

def software():
    pass

def contact():
    pass

def gear():
    pass