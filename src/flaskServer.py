from flask import Flask, app, render_template, request

app = Flask(__name__, static_url_path='/static')

@app.route("/", methods=['POST', 'GET'])
def index():
    return render_template("index.html")

@app.route("/software/", methods=['POST', 'GET'])
def software():
    return render_template("software.html")

@app.route("/gear/", methods=['GET'])
def gear():
    return render_template('gear.html')


if __name__ == "__main__":
    app.run(debug=True)