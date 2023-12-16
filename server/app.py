from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# Endpoint for handling login/signup
@app.route('/api/auth', methods=['POST'])
def authenticate_user():
    # Placeholder logic for authentication
    # You can add your own logic to validate user credentials
    # For simplicity, this example returns a success message

    data = request.get_json()

    # Check username and password (replace this with your actual authentication logic)
    if data.get('username') == 'example_user' and data.get('password') == 'example_password':
        return jsonify({'message': 'Authentication successful'})
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)