from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

WISHES_FILE = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "wishes.json"
)


def load_wishes():
    if os.path.exists(WISHES_FILE):
        with open(WISHES_FILE, "r") as file:
            return json.load(file)
    return []


def save_wishes(wishes):
    with open(WISHES_FILE, "w") as file:
        json.dump(wishes, file)


@app.route("/")
def home():
    render_template("Index.html")


@app.route("/api/wishes", methods=["GET", "POST"])
def manage_wishes():
    wishes = load_wishes()

    if request.method == "POST":
        data = request.get_json()
        wish = data.get("wish", "").strip()

        if not wish:
            return jsonify({"error": "Empty wish"}), 400

        wishes.append(wish)
        save_wishes(wishes)

        return jsonify({"message": "Wish saved!"})

    return jsonify(wishes)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
