

# Document Manager
This is a bare metal document management demo a complete React + Express application that integrates with a Python API service (mocking API calls with msw).

## Prerequisites
- Node.js (v16 or later)
- Python 3.8+
- npm

---

### How to Stand Up and Run Locally

1. **Install Prerequisites**
    - Install Node.js: `brew install node`
    - Install Python: `brew install python`
    - Verify: `node -v`, `npm -v`, `python3 --version`

2. **Follow README Steps**
    - Clone the project.
    - Set up and run the Python API first (port 5001).
    - Set up and run the Express server next (port 5000).
    - Set up and run the React app last (port 3000).

3. **Verify**
    - Open `http://localhost:3000` in your browser.

This setup demonstrates a full-stack app with React, Express, and a Python API, running locally on macOS. Let me know if you need further clarification!

1. **Clone the Repository**
   ```bash
   git clone <repo-url>
   cd document-manager-app

### client
React front end application utilizing MUI for bare styling.

2. **Setup React Frontend**
   ```bash
    cd client
    npm install
    npm start

### server
Express server that acts as a proxy, forwarding requests to the Python API.

3. **Setup Express Server**

   ```bash
    cd server
    npm install
    npm start
    
* Runs on http://localhost:5000


### python api
Simple Flask API that simulates a task management service.

4. **Setup Python API**
    ```bash
    cd python-api
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python app.py

* Runs on http://localhost:5001