from flask import Flask, render_template
import os

from . import main


def create_app(test_config=None):
    # Create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY="dev",
        DATABASE= os.path.join(app.instance_path, "flaskr.sqliter"),
    )
    # Register the blueprint
    app.register_blueprint(main.bp)

    if test_config is None:
        # Load the instance config, if it exists, when not testing
        app.config.from_pyfile("config.py", silent=True)
    
    else:
        # Load the test config if passed in
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/')
    def home():
        return render_template("/app/index.html")
    
    return app
