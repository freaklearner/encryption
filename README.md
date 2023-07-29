# encryption

## **Login Api**
URL: http://localhost:3000/v1/login
Method: POST
Body:
{
  "username": "encrypted",
  "password": "encrypted"
}

Response:
{
    "token": '<encrypted-token>'
}

## Get Decrypted payload from token
URL: http://localhost:3000/v1/encryption/payload
Method: GET
Header:
{
  Authorization: Bearer '<encrypted-token>'
}

Response:
{
    "message": {
        "username": "encrypted",
        "password": "encrypted"
    }
}


