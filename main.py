from flask import Flask, render_template, request
from datetime import datetime
from fileinput import filename
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_cors import CORS

app = Flask(__name__, template_folder='pages')
CORS(app)
uri = "mongodb+srv://unurag:89800932@cluster0.tjnuduv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(uri, server_api=ServerApi('1'))
db = client["eventname"]



@app.route('/')
def index():
    return "Not allowed", 401

# open a page where main xlsx file can be uploaded
@app.route('/secret/uploadpdf')
def upload():
    return render_template('upload.html')

@app.route('/secret/filesuc', methods = ['POST'])
def filesuc():
    if request.method == 'POST':
        f = request.files['file']
        f.save(f.filename)
        return f"File {f.filename} uploaded successfully"

    return "File uploaded succesfully"

# creating an event
@app.route('/secret/createevent')
def createEvent():
    return render_template('cevent.html')

@app.route('/secret/eventsuc', methods = ['POST'])
def createEventSuc():
    if request.method == 'POST':
        eventName = request.form.get('eventname')
        startDate = request.form.get('startdate')
        endDate = request.form.get('enddate')
        objStartDate = datetime.strptime(startDate,"%Y-%m-%d")
        objEndDate = datetime.strptime(endDate,"%Y-%m-%d")

        collection = db["event"]
        post = {"_id": 1, "eventname": eventName, "startdate": f"{objStartDate.day}/{objStartDate.month}/{objStartDate.year}", "enddate": f"{objEndDate.day}/{objEndDate.month}/{objEndDate.year}"}
        collection.delete_many({})
        collection.insert_one(post)

        print(eventName)
        return 'Event created successfully'
    
@app.route('/secret/resultupload')
def result():
    return render_template('resultform.html')


@app.route('/event')
def event():
    collection = db['event']
    eventDet = collection.find_one({"_id":1})
    return eventDet

if __name__ == "__main__":
    app.run(debug=True)
    CORS(app)