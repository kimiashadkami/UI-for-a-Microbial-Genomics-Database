import genomics_data_index.api as gdi

from flask import Flask, jsonify, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__) #referencing this file

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

    db = gdi.GenomicsDataIndex.connect('salmonella-project') #connecting to db
    #post method
    if request.method == "POST":
        query_text = request.form['query'] #reading from the form
        #hasa:gi|194447306|ref|NC_011083.1|:63393:C:A hasa:gi|194447306|ref|NC_011083.1|:4876176:A:G
        query = db.samples_query()
        query_string = query_text
        query_string_components = query_string.split(' ')
        for query_string in query_string_components:
            if query_string.startswith('isa:'):
                substring = query_string[len('isa:'):]
                query = query.isa(substring)
            elif query_string.startswith('hasa:'):
                substring = query_string[len('hasa:'):]
                query = query.hasa(substring)
        query.tolist()

        from genomics_data_index.api.query.SamplesQuery import SamplesQuery

        def query_to_plot_json(query: SamplesQuery) -> str:
            summary_df = query.summary_features()
            plot_df = summary_df.reset_index()[['Mutation', 'Count']].rename({
                'Mutation': 'name',
                'Count': 'value'
            }, axis='columns')
            plot_df['id'] = plot_df['name']
            plot_json = plot_df.to_json(orient='records')
            # plot_json contains the data as a JSON string
            return plot_json

        return render_template("result.html", result = query_to_plot_json(query))
    #get method
    else:
        return render_template("result.html", result =  query.tolist())


if __name__ == "__main__":
    app.run(debug = True)
    #debug = True means if we have any errors they will pop up in the page
    #app.run is the entry point for python
