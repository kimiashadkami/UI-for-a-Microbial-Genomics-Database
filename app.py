# from flask import Flask, render_template, url_for, request, redirect
# from flask_sqlalchemy import SQLAlchemy
# from datetime import datetime
#
#
# app = Flask(__name__) #referencing this file
# #telling our app where our database is located
# #//// is an absolute path, /// is a relative path
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
# db = SQLAlchemy(app)
#
# class Todo(db.Model):
#     id = db.Column(db.Integer, primary_key = True)
#     content = db.Column(db.String(200), nullable = False)
#     date_created = db.Column(db.DateTime, default = datetime.utcnow)
#
#     def __repr__(self):
#         return '<Task %r>' % self.id
#
# @app.route('/', methods=['POST', 'GET']) #passing the url string of your route
# #__ is defining a variable internally
#
# #defining a function for that route
# def index():
#     if request.method == "POST":
#         task_content = request.form['content'] #reading from the form
#         new_task = Todo(content = task_content) #modeling it into our db
#
#         #pushing it into our db
#         try:
#             db.session.add(new_task)
#             db.session.commit()
#             return redirect("/")
#         except:
#             return "There was an issue adding your task :)"
#
#     else:
#         tasks = Todo.query.order_by(Todo.date_created).all() #query!!!!!!
#         return render_template('index.html', tasks=tasks)
#
# if __name__ == "__main__":
#     app.run(debug = True)
#     #debug = True means if we have any errors they will pop up in the page
#     #app.run is the entry point for python
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
