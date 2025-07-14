from flask import Flask, jsonify, render_template
import json

api = Flask(__name__)

def read_json_db():
    with open('db.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data
                
@api.route("/vagas", methods=['GET'])
def listar_vagas():
    vagas = read_json_db()
    return render_template('index.html', vagas=vagas)

if __name__ == "__main__":
    api.run(debug=True) 