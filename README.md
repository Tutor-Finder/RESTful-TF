# RESTful-TF

## Overview

## Setup
first run "npm init -y"

### Database Setup
TODO: Provide files
Run provided sql files

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
Inside a terminal type "node"
then within the node shell run the following command to generate a long random sequence
"require('crypto').randomBytes(64).toString('hex')"