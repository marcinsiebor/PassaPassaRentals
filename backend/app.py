from flask import Flask, request, jsonify, session
from flask_cors import CORS
import hashlib
import sqlite3

app = Flask(__name__)
CORS(app)

# Set the secret key
app.config['SECRET_KEY'] = 'secret here'

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def create_users_table():
    with sqlite3.connect('rental-users.db') as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstname TEXT NOT NULL,
                lastname TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                mobile TEXT NOT NULL,
                gender TEXT NOT NULL,
                hashed_password TEXT NOT NULL,
                reservations TEXT DEFAULT '[]' 
            )
        ''')
        conn.commit()

def create_reservations_table():
    with sqlite3.connect('rental-users.db') as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS reservations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                brand TEXT NOT NULL,
                from_location TEXT NOT NULL,
                to_location TEXT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users (id)
            )
        ''')
        conn.commit()

create_users_table()
create_reservations_table()

@app.route("/")
def hello():
    return "<h1>Passa Backend Works!!!!!!!!!!</h1><p>Welcome to the backend</p><p>Backend Done By Ahmed, Mohammed and Marcin!!"


@app.route('/register', methods=['POST'])
def register_user():
    data = request.json

    # Validate required fields
    required_fields = ['firstname', 'lastname', 'email', 'mobile', 'gender', 'pwd']

    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing required field: {field}'}), 400

    # Validate email uniqueness
    with sqlite3.connect('rental-users.db') as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users WHERE email = ?', (data['email'],))
        existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({'error': 'Email is already registered'}), 400

    # Hash the password before storing it
    hashed_password = hash_password(data['pwd'])

    # Create a user object and add it to the users table
    with sqlite3.connect('rental-users.db') as conn:
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO users (firstname, lastname, email, mobile, gender, hashed_password)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', (data['firstname'], data['lastname'], data['email'], data['mobile'], data['gender'], hashed_password))
        conn.commit()

    return jsonify({'message': 'Registration successful'})

@app.route('/login', methods=['POST'])
def login_user():
    data = request.json

    # Validate required fields
    required_fields = ['email', 'pwd']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing required field: {field}'}), 400

    # Check if the user exists
    with sqlite3.connect('rental-users.db') as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users WHERE email = ?', (data['email'],))
        user = cursor.fetchone()

    if user:
        # Check if the provided password matches the hashed password in the database
        hashed_password = hash_password(data['pwd'])
        if hashed_password == user[6]:  # Assuming hashed_password is at index 6
            # Store user ID in session
            session['user_id'] = user[0]
            return jsonify({'message': 'Login successful'})
        else:
            return jsonify({'error': 'Invalid password'}), 401
    else:
        return jsonify({'error': 'User not found'}), 404

@app.route('/logout', methods=['POST'])
def logout_user():
    # Clear the user ID from the session
    session.pop('user_id', None)
    return jsonify({'message': 'Logout successful'})

@app.route('/make-reservation/<int:user_id>', methods=['POST'])
def make_reservation(user_id):
    data = request.json

    # Print the received data
    print('Received Data:', data)

    with sqlite3.connect('rental-users.db') as conn:
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO reservations (user_id, brand, from_location, to_location)
            VALUES (?, ?, ?, ?)
        ''', (user_id, data.get('brand'), data.get('from_location'), data.get('to_location')))
        conn.commit()

    return jsonify({'message': 'Reservation successful'})



@app.route('/user-reservations/<int:user_id>', methods=['GET'])
def get_user_reservations(user_id):
    with sqlite3.connect('rental-users.db') as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM reservations WHERE user_id = ?', (user_id,))
        reservations = [
            {'id': row[0], 'user_id': row[1], 'brand': row[2], 'from_location': row[3], 'to_location': row[4]}
            for row in cursor.fetchall()
        ]
    print(reservations)
    return jsonify(reservations)

@app.route('/openai-api-key', methods=['GET'])
def get_openai_api_key():
    openai_api_key = 'api key here'
    return jsonify({'openai_api_key': openai_api_key})


if __name__ == '__main__':
    app.run(debug=True)
