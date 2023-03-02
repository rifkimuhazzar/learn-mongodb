// use admin database
// masuk ke database admin
// use admin

db.createUser(
    {
        user: "mongo",
        pwd: "mongo",
        roles: [ 
            "userAdminAnyDatabase",
            "readWriteAnyDatabase" 
        ]
    }
)

// Connect to mongodb with username & password
// mongosh --username mongo --password mongo --host localhost --port 27017
