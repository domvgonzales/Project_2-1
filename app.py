from flask import Flask, render_template, jsonify
import pandas as pandas
import csv 
import psycopg2 as psycopg2

app = Flask(__name__)

# @app.route("/")
# def home():
#     return render_template("index.html")

# @app.route("/spotify_data")
# def read_spotify_hits_sql():
#     conn = psycopg.connect(dbname="spotify_data", user="postgres", password="BUChoy123!!!", host="127.0.0.1", port="5432")
#     dataframe = pd.read_sql("SELECT * FROM spotify_data", conn)
#     json_data = dataframe.to_json(orient="records")
#     return json_data

# if __name__ == "main":
#     app.run(debug=True)

@app.route('/')
def home():
    return render_template("home.html")


@app.route("/hitwords")
def hitwords():
    return render_template("hitwords.html")


@app.route('/contributors')
def contributer():
    return render_template('contributer.html')


@app.route('/barcharts')
def bar_2():
    return render_template('bars.html')


# @app.route('/teamComparisons')
# def bar_3():
#     return render_template('bar_3.html')


# @app.route('/easternConference')
# def eastern():
#     return render_template('eastern.html')


# @app.route('/westernConference')
# def western():
#     return render_template('western.html')


# @app.route('/bracketPredictions')
# def bracker():
#     return render_template('bracket.html')


# @app.route('/contributors')
# def contributor():
#     return render_template('contributor.html')


if __name__ == '__main__':
    app.run(debug=True)
