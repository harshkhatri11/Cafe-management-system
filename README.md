# Cafe-management-system

**File content for backend/.env file is as follow**

**Server**

PORT = server port no

**Connection**

    #Your port no where mysql is running
    DB_PORT =  mysql port no    

    #Your env (for e.g DB_HOST = localhost)
    DB_HOST = your env  

    #My mysql username
    DB_USERNAME = usesrname      

    #My mysql password
    DB_PASSWORD = password

    #Database name 
    DB_NAME = xyz   


**This is our radndom 64 bytes hexa string which we have generate to generate sceret key to encryption and decryption jsonwebtoken**

    1)Open cmd in existing path write -->node 
    2)Then generate 64 bytes radom hex string --> require('crypto').randomBytes(64).toString('hex')
    3)Store this string in .env file for E.x --> ACCESS_TOKEN = your string
    
    ACCESS_TOKEN = your string


**This for forget password nodemailer and for generate password for less secure app goto Manage your google account --> Security --> Signing in google --> App Password 
  then generate new password for your app**
  
    EMAIL = your email
    PASSWORD = your email password


**To check role**

    USER = user
