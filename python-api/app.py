from flask import Flask, jsonify

app = Flask(__name__)

user = {"username": "john_doe", "email": "john@example.com"}

documents = [
    {"id": 1, "title": "Doc 1", "content": "This is document 1.", "sources": ["Source A", "Source B"]},
    {"id": 2, "title": "Doc 2", "content": "This is document 2.", "sources": ["Source C"]}
]

@app.route('/user', methods=['GET'])
def get_user():
    return jsonify(user)

@app.route('/documents', methods=['GET'])
def get_documents():
    return jsonify(documents)

@app.route('/documents/<int:id>', methods=['GET'])
def get_document(id):
    doc = next((d for d in documents if d['id'] == id), None)
    return jsonify(doc) if doc else (jsonify({"error": "Document not found"}), 404)

if __name__ == '__main__':
    app.run(port=5001, debug=True)