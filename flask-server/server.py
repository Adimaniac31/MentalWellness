from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Members API Route
@app.route("/members")
def members():
    response = jsonify({"members": ["Member1", "Member2", "Member3"]})
    return response

if __name__ == "__main__":
    app.run(debug=True)
