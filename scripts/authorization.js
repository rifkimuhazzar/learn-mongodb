// Use test database
// use test;

// create role
db.createRole({
    role: "find_and_insert",
    privileges: [],
    roles: [
        {
            role: "read",
            db: "test"
        }
    ]
});

// Get all roles, defaultnya tidak menampilkan privileges, jika ingin tampi tambah showPrivileges: true
db.getRoles({ showPrivileges: true });
 
// update role, role ini hanya bisa insert data ke products, tidak bisa ke collection lain
db.updateRole("find_and_insert", {
    privileges: [
        {
            resource: {
                db: "test",
                collection: "products"
            },
            actions: [ "insert" ]
        }
    ],
    roles: [
        {
            // bisa menbaca semua collection
            role: "read",
            db: "test"
        }
    ]
});

// Add use with role
db.createUser({
    user: "rifki",
    pwd: "rifki", 
    roles: [ "find_and_insert" ]
});

// Connect to mongo server
// mongosh --username rifki --password rifki --authenticationDatabase test

// Insert product [SUCCESS]
db.products.insert({
    "_id" : 10,
    "name" : "iPad Pro 11 2020",
    "price" : NumberLong(20000000),
    "category" : "tablet",
    "tags" : [
        "apple",
        "ipad",
        "tablet",
    ],
    "lastModifiedDate" : new Date(),
    "stock" : 10,
    "ratings" : [
        100
    ]
});

// jika ingin bisa, tambahkan  "update", "delete" pada actions saat membuat rolenya 
// Delete product [FAILED], in itidak bisa karena privilege tadi diset hanya bisa insert
db.products.deleteOne({
    _id: 10
});

// Update product [FAILED], tidak bisa juga  seper di delete di atas
db.products.updateOne({
    _id: 10
},{
    $set: {
        category: "food"
    }
});

// Insert Customer [FAILED]
db.customers.insertOne({
    _id: "kurniawan",
    name: "Eko Kurniawan Khannedy"
});