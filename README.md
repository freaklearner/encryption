# encryption
## Required Environment Variables
   - PORT=3000
   - JWT_SECRET
   - USER
   - PASSWORD
   - CRYPTO_SECRET

## **Login Api**
### URL: http://localhost:3000/v1/login
### Method: POST
### Body:
### {
###  "username": "encrypted",
###  "password": "encrypted"
### }

### Response:
### {
###    "token": "encrypted-token"
### }'

## Get Decryphered payload from token
### URL: http://localhost:3000/v1/encryption/payload
### Method: GET
### Header:
### {
###  "Authorization: Bearer encrypted-token"
### } 

### Response:
### {
###   "message": {
###        "username": "encrypted",
###        "password": "encrypted"
###    }
### }




