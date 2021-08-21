from flask import Flask, app, render_template, request

app = Flask(__name__)

@app.route("/", methods=['POST', 'GET'])
def index():
    return render_template("index.html")