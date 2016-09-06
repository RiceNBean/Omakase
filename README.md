# Omakase
Welcome to Omakase, an application that curates food selection for you.


You can uncomment EnsureSchema() in the server/server.js file to create the database.

Backend:
In the db.js file we create our schema for our mysql database. We have the following functions in place. ensureSchema() and deleteEverything().
In the server/server.js file you call ensureSchema() after the server.listen command so the database schema will be created.
If you wish to delete the current schema you must do so on the hosted website. Or you can call the DeleteEverything() function in the db.js file.
In order to access the database you must follow the instructions outlined in the example.env file.
The knexfile.js contains the required information to connect to the database, if you wish to use a different database you can do so by specifying your host, and database type there. 

All api endpoints and schema information is documented in our google doc. See a link here.

![alt text][logo]

[logo]: https://github.com/OmakaseInc/Omakase/blob/dev/client/images/omakase-db.png "Our Database Schema"


