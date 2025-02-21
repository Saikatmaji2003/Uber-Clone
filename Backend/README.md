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