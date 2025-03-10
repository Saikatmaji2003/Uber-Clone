# User Registration Endpoint
## **POST** `/users/register`

### **Description**
This endpoint allows users to register by providing their first name, last name, email, and password. The password is securely hashed before being saved to the database. Upon successful registration, a JSON Web Token (JWT) and user details are returned.

---

### **Request**

- **URL**: `/users/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`

#### **Request Body**
The request body should be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "strongpassword123"
}
```

Fields Description:
fullname.firstname (string, required): The first name of the user (minimum 3 characters).
fullname.lastname (string, optional): The last name of the user (minimum 3 characters).
email (string, required): A valid email address (must be unique).
password (string, required): The password (minimum 6 characters).

# LoginUser Endpoint

## **POST** `/users/login`

The `loginUser` controller is used to authenticate a user and generate an authentication token (JWT) upon successful login.

### **Request**

- **URL**: `/users/login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`

#### Request Body:

The request body should be a JSON object containing the user's credentials:

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

## Validation:
The controller performs validation on the following fields:

email: Must be a valid email format.
password: Must be at least 6 characters long.

## Response:
If the login is successful, the controller will respond with the following JSON object:

```json
{
  "token": "JWT token",
  "user": {
    // user details
  }
}
```

# GetUserProfile Endpoint

## **GET** `/users/profile`

### **Description**
Fetches the profile of the authenticated user.

### **Request**

- **URL**: `/users/profile`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: Bearer token (required)

### **Response**

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "user": {
      "_id": "user_id",
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      // other user fields
    }
  }
  ```

# LogoutUser Endpoint

## **GET** `/users/logout`

### **Description**
Logs out the authenticated user by clearing the authentication token.

### **Request**

- **URL**: `/users/logout`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: Bearer token (required)

### **Response**

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Logout success"
  }
  ```

# Captain Registration Endpoint

## **POST** `/captains/register`

### **Description**
This endpoint allows captains to register by providing their first name, last name, email, password, and vehicle details. The password is securely hashed before being saved to the database. Upon successful registration, a JSON Web Token (JWT) and captain details are returned.

---

### **Request**

- **URL**: `/captains/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`

#### **Request Body**
The request body should be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "strongpassword123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

Fields Description:
- `fullname.firstname` (string, required): The first name of the captain (minimum 3 characters).
- `fullname.lastname` (string, required): The last name of the captain (minimum 3 characters).
- `email` (string, required): A valid email address (must be unique).
- `password` (string, required): The password (minimum 6 characters).
- `vehicle.color` (string, required): The color of the vehicle (minimum 3 characters).
- `vehicle.plate` (string, required): The plate number of the vehicle (minimum 3 characters).
- `vehicle.capacity` (integer, required): The capacity of the vehicle (minimum 1).
- `vehicle.vehicleType` (string, required): The type of the vehicle (must be one of "car", "motorcycle", "auto").

### **Response**

- **Status**: `201 Created`
- **Body**:
  ```json
  {
    "token": "JWT token",
    "user": {
      "_id": "captain_id",
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // other captain fields
    }
  }
  ```

### **Example**
```bash
 json '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "strongpassword123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```
# Captain Login Endpoint

## **POST** `/captains/login`

### **Description**
This endpoint allows captains to log in by providing their email and password. Upon successful login, a JSON Web Token (JWT) and captain details are returned.

---

### **Request**

- **URL**: `/captains/login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`

#### **Request Body**
The request body should be in JSON format and include the following fields:

```json
{
  "email": "john.doe@example.com",
  "password": "strongpassword123"
}
```

Fields Description:
- `email` (string, required): A valid email address.
- `password` (string, required): The password (minimum 6 characters).

### **Response**

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "token": "JWT token",
    "user": {
      "_id": "captain_id",
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // other captain fields
    }
  }
  ```

### **Example**
```bash
curl -X POST "http://localhost:3000/captains/login" -H "Content-Type: application/json" -d '{
  "email": "john.doe@example.com",
  "password": "strongpassword123"
}'
```

# Get Captain Profile Endpoint

## **GET** `/captains/profile`

### **Description**
Fetches the profile of the authenticated captain.

---

### **Request**

- **URL**: `/captains/profile`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: Bearer token (required)

### **Response**

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // other captain fields
    }
  }
  ```

### **Example**
```bash
curl -X GET "http://localhost:3000/captains/profile" -H "Authorization: Bearer <token>"
```

# Captain Logout Endpoint

## **GET** `/captains/logout`

### **Description**
Logs out the authenticated captain by clearing the authentication token.

---

### **Request**

- **URL**: `/captains/logout`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: Bearer token (required)

### **Response**

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Logout success"
  }
  ```

### **Example**
```bash
curl -X GET "http://localhost:3000/captains/logout" -H "Authorization: Bearer <token>"
```


## Maps Endpoints

# Get Coordinates

## **GET** `/maps/get-coordinates`

### **Description**
 Fetches the latitude and longitude (coordinates) for a given address using the Google Maps API.

---

### **Request**

- **URL**: `/maps/get-coordinates`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: Bearer token (required)
 -**Query Parameters**:
    -`address (string, required)`: The address to fetch coordinates for.

### **Response**

- **Status**: `200 OK`
- **Body**:
    {
      "ltd": 12.34,
      "lng": 56.78
    }
### **Example**
```bash
 curl -X GET "http://localhost:3000/maps/get-coordinates?address=1600 Amphitheatre Parkway, Mountain View, CA" - H "Authorization: Bearer <token>" 
 ```

 ## Get Distance and Time
 
 ## **GET** `/maps/get-distance-time`

### **Description**
 Calculates the distance (in kilometers) and estimated travel time (in minutes) between two locations (origin and destination) using the Google Maps API.

---

### **Request**

- **URL**: `/maps/get-distance-time`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: Bearer token (required)
 -**Query Parameters**:
    `-origin (string, required)`: The origin address.
    `-destination (string, required)`: The destination address.

### **Response**

- **Status**: `200 OK`
- **Body**:
    {
  "distance": {
    "text": "10.5 km",
    "value": 10500
  },
  "duration": {
    "text": "15 mins",
    "value": 900
  },
  "status": "OK"
}
### **Example**
```bash
 curl -X GET "http://localhost:3000/maps/get-distance-time?origin=1600 Amphitheatre Parkway, Mountain View, CA
 -destination=1355 Market St, San Francisco, CA" -H "Authorization: Bearer <token>" 
 ```

 # Get Suggestion

 ## **GET** `/maps/get-suggestion

### **Description**
 Provides autocomplete suggestions for addresses based on user input using the Google Places API.

---

### **Request**

- **URL**: `/maps/get-suggestion`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: Bearer token (required)
 -**Query Parameters**:
    `input (string, required)`: The input for autocomplete suggestions.

### **Response**

- **Status**: `200 OK`
- **Body**:
 [
    {
        "description": "Sheryians Coding School Center 2, Indrapuri C sector, Sector C, Indrapuri, Bhopal, Madhya Pradesh, India",
        "matched_substrings": [
            {
                "length": 9,
                "offset": 0
            }
        ],
        "place_id": "ChIJ1f5qyUZDfDkRgndnGs2_16g",
        "reference": "ChIJ1f5qyUZDfDkRgndnGs2_16g",
        "structured_formatting": {
            "main_text": "Sheryians Coding School Center 2",
            "main_text_matched_substrings": [
                {
                    "length": 9,
                    "offset": 0
                }
            ],
            "secondary_text": "Indrapuri C sector, Sector C, Indrapuri, Bhopal, Madhya Pradesh, India"
        },
        "terms": [
            {
                "offset": 0,
                "value": "Sheryians Coding School Center 2"
            },
            {
                "offset": 34,
                "value": "Indrapuri C sector"
            },
            {
                "offset": 54,
                "value": "Sector C"
            },
            {
                "offset": 64,
                "value": "Indrapuri"
            },
            {
                "offset": 75,
                "value": "Bhopal"
            },
            {
                "offset": 83,
                "value": "Madhya Pradesh"
            },
            {
                "offset": 99,
                "value": "India"
            }
        ],
        "types": [
            "establishment",
            "point_of_interest"
        ]
    },
    {
        "description": "Sheryians Coding School, near Chai Sutta Bar, Indrapuri C sector, Sector C, Indrapuri, Bhopal, Madhya Pradesh, India",
        "matched_substrings": [
            {
                "length": 9,
                "offset": 0
            }
        ],
        "place_id": "ChIJjamQeJdDfDkRLnPexo2UipI",
        "reference": "ChIJjamQeJdDfDkRLnPexo2UipI",
        "structured_formatting": {
            "main_text": "Sheryians Coding School",
            "main_text_matched_substrings": [
                {
                    "length": 9,
                    "offset": 0
                }
            ],
            "secondary_text": "near Chai Sutta Bar, Indrapuri C sector, Sector C, Indrapuri, Bhopal, Madhya Pradesh, India"
        },
        "terms": [
            {
                "offset": 0,
                "value": "Sheryians Coding School"
            },
            {
                "offset": 25,
                "value": "near Chai Sutta Bar"
            },
            {
                "offset": 46,
                "value": "Indrapuri C sector"
            },
            {
                "offset": 66,
                "value": "Sector C"
            },
            {
                "offset": 76,
                "value": "Indrapuri"
            },
            {
                "offset": 87,
                "value": "Bhopal"
            },
            {
                "offset": 95,
                "value": "Madhya Pradesh"
            },
            {
                "offset": 111,
                "value": "India"
            }
        ],
        "types": [
            "point_of_interest",
            "establishment"
        ]
    }
]
### **Example**
```bash
 curl -X GET \"https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Sheryians&language=en&key=<API_KEY>" \ -H "Authorization: Bearer <token>" 
 ```

## Ride Endpoints

## Create Ride

## **POST** `/rides/create`

### **Description**
 Creates a new ride request with pickup and destination addresses, calculates the fare based on distance and vehicle type, and generates an OTP (One-Time Password) for verification.

---

### **Request**

- **URL**: `/rides/create`
- **Method**: `POST`
- **Headers**:
  - `Authorization`: Bearer token (required)
  - `Content-Type`: application/json
## Body:
  {
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "vehicleType": "car"
}

### **Response**

- **Status**: `200 OK`
- **Body**:
    {
  "_id": "ride_id",
  "user": "user_id",
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "otp": "123456",
  "fare": 75
}
### **Example**
```bash
 curl -X POST "http://localhost:3000/rides/create" -H "Authorization: Bearer <token>" -H "Content-Type: application/json" -
 ```
 

## Ger fare

### GET /get-fare

**Description:** Get the fare for a ride based on pickup location and distance.

**URL:** `/get-fare`

**Method:** `GET`

**Headers:**
- `Authorization: Bearer <token>`

**Query Parameters:**
- `pickup` (string, required): The pickup location.
- `destination` (string, required): The destination location.

**Responses:**

- `200 OK`: Returns the fare for the ride.
  ```json
  {
    "fare": 25.50
  }
  ```

- `400 Bad Request`: Validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid pickup Address",
        "param": "pickup",
        "location": "query"
      },
      {
        "msg": "Invalid destination Address",
        "param": "destination",
        "location": "query"
      }
    ]
  }
  ```

- `500 Internal Server Error`: Server error.
  ```json
  {
    "message": "Internal server error message"
  }
  ```

 
 