from flask import (Blueprint, 
                    flash, g, 
                    redirect, 
                    render_template, 
                    request, url_for)
import functools

bp = Blueprint('app', __name__, url_prefix='/app')