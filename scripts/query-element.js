// select * from products where category is null
db.products.find({
  category: {
    $exists: false,
  },
});

// sebenarnya di sql tidak ada karena tipe data columnnya sudah fix
// select * from products where type(category) = "string"
db.products.find({
  category: {
    $type: "string",
  },
});

// select * from products where type(price) in ("int", "long")
db.products.find({
  price: {
    $type: ["int", "long"],
  },
});
