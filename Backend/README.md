# User Registration API

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

Fields Description:
fullname.firstname (string, required): The first name of the user (minimum 3 characters).
fullname.lastname (string, optional): The last name of the user (minimum 3 characters).
email (string, required): A valid email address (must be unique).
password (string, required): The password (minimum 6 characters).




# `loginUser` Controller

## Endpoint: `POST /login`

The `loginUser` controller is used to authenticate a user and generate an authentication token (JWT) upon successful login.

#### Request Body:

The request body should be a JSON object containing the user's credentials:

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}

##Validation:
The controller performs validation on the following fields:

email: Must be a valid email format.
password: Must be at least 6 characters long.

##Response:
If the login is successful, the controller will respond with the following JSON object:

token (string): The JWT token generated for the authenticated user.
user (object): The user object containing user details (excluding the password).
