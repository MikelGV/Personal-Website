from flask import Flask, app, render_template, request

app = Flask(__name__, static_url_path='/static')

@app.route("/", methods=['POST', 'GET'])
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)