# RESTful-TF

## Overview

## Setup
first run "npm init -y"

### Database Setup
TODO: Provide files
Run provided sql files

if this error occurs: ER_NOT_SUPPORTED_AUTH_MODE

Execute the following query in MYSQL Workbench
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
Where root as your user localhost as your URL and password as your password
Then run this query to refresh privileges:
flush privileges;
Try connecting using node after you do so.
If that doesn't work, try it without @'localhost' part.

### npm install
dotenv
express
bcrypt
jsonwebtoken
mysql

### Option Dev tool
Seperate Application (visual database manager): mysql workbench
Seperate Application (test http request): postman
Seperate Application (IDE): vscode
NPM Package (refreshes app automatically on save): nodemon
`npm install <NPM Package> --save-dev`

### setup .env file
Include variables for 
CORE_SERVER_PORT
AUTH_SERVER_PORT
DB_PORT
DB_HOST
DB_USER
DB_PASS
MYSQL_DB
ACCESS_TOKEN_SECRET
REFRESH_TOKEN_SECRET

defaults/suggested variables
CORE_SERVER_PORT = 3000 (suggestion)
AUTH_SERVER_PORT = 4000 (suggestion)
DB_PORT = 3306 (default)
DB_HOST = localhost (default)
DB_USER = root (default)
DB_PASS (setup by user during mysql installation)
MYSQL_DB = tf-mysql-db (suggested, change in sql if not wanted)
ACCESS_TOKEN_SECRET (see following script)
REFRESH_TOKEN_SECRET (see following script)


Inside a terminal type "node" 
then within the node shell run the following command to generate a long random sequence
"require('crypto').randomBytes(64).toString('hex')"