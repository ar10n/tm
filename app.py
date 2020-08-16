from flask import Flask, render_template, request
from flask_mail import Mail, Message
from waitress import serve
from secrets import *

app = Flask(__name__)

app.config['MAIL_SERVER'] = MAIL_SERVER
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = MAIL_USERNAME
app.config['MAIL_PASSWORD'] = MAIL_PASSWORD
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form['form-name']
        phone = request.form['form-phone']
        email = request.form['form-email']
        text = request.form['form-text']
        msg = Message('Сообщение с сайта', sender="z@tendermarkt.ru", recipients=['sergey.nikitin@tendermarkt.ru'])
        msg.body = "Имя: {}. Телефон: {}. Почта: {}. Сообщение: {}".format(name, phone, email, text)
        mail.send(msg)
        return render_template('index.html')
    else:
        return render_template('index.html')


serve(app, listen='*:8080')
# if __name__ == '__main__':
#     app.run()
