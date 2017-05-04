from flask import Flask, render_template
from flask_restful import Resource, Api
from server.resources.search import Search
from server.resources.user import UserRegister
from flask_jwt import JWT
from server.security import authenticate, identity

app = Flask(__name__,static_folder="./static", template_folder="./templates")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'phidb'
api = Api(app)


@app.before_first_request
def create_tables():
    db.create_all()

jwt = JWT(app, authenticate, identity)  # /auth


@app.route('/')
def root():
    return render_template('index.html')

api.add_resource(UserRegister, '/register')
api.add_resource(Search, '/search')


if __name__ == '__main__':
    from server.db import db
    db.init_app(app)
    app.run(port=5000, debug=True)
