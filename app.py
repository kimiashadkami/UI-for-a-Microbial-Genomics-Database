import genomics_data_index.api as gdi

from flask import Flask, jsonify, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__) #referencing this file

db = gdi.GenomicsDataIndex.connect('salmonella-project') #connecting to db

@app.route('/') #passing the url string of your route
#defining a function for that route
def index():
    return render_template("index.html")

@app.route('/result.html', methods=['POST', 'GET']) #passing the url string of your route
#defining a function for that route
def query():

    #post method
    if request.method == "POST":
        query_text = request.form['query'] #reading from the form

        return render_template("result.html", result = query_text)
    #get method
    else:
        return render_template("result.html", result =  query_text)

if __name__ == "__main__":
    app.run(debug = True)
    #debug = True means if we have any errors they will pop up in the page
    #app.run is the entry point for python
