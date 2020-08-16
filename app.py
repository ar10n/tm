from flask import Flask, render_template
from waitress import serve

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


serve(app, listen='*:8080')
# if __name__ == '__main__':
#     app.run()
