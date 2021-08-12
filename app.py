import genomics_data_index.api as gdi
import json
from flask import Flask, jsonify, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from genomics_data_index.api.query.SamplesQuery import SamplesQuery
app = Flask(__name__) #referencing this file

json_result = ""

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/aboutus.html')
def aboutus():
    return render_template("aboutus.html")

@app.route('/contactus.html')
def contactus():
    return render_template("contactus.html")

@app.route('/index.html')
def home():
    return render_template("index.html")

@app.route('/result.html', methods=['POST', 'GET'])
def query():
    if request.method == "POST":
        query_string = request.form['query']
        return render_template("result.html", query_str = query_string)
    else:
        query_string = request.form['query']
        return render_template("result.html", query_str = query_string)

@app.route('/get-data', methods=['POST', 'GET'])
def returnJSONResult():
    db = gdi.GenomicsDataIndex.connect('salmonella-project') #connecting to db
    if request.method == "GET":
        #hasa:gi|194447306|ref|NC_011083.1|:63393:C:A hasa:gi|194447306|ref|NC_011083.1|:4876176:A:G
        query = db.samples_query()
        query_string = request.args.get('query_str')
        query_string_components = query_string.split(' ')
        for query_string in query_string_components:
            if query_string.startswith('isa:'):
                substring = query_string[len('isa:'):]
                query = query.isa(substring)
            elif query_string.startswith('hasa:'):
                substring = query_string[len('hasa:'):]
                query = query.hasa(substring)

        def query_to_plot_json(query: SamplesQuery) -> str:
            summary_df = query.summary_features()
            plot_df = summary_df.reset_index()[['Mutation', 'Count']].rename({
                'Mutation': 'name',
                'Count': 'value'
            }, axis='columns')
            plot_df['id'] = plot_df['name']
            plot_json = jsonify(plot_df.to_dict(orient='records'))
            return plot_json

        return query_to_plot_json(query)

if __name__ == "__main__":
    app.run(debug = True)
    #debug = True means if we have any errors they will pop up in the page
    #app.run is the entry point for python
