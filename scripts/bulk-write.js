db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        _id: "rifki",
        full_name: "Rifki",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "muhazzar",
        full_name: "Muhazzar",
      },
    },
  },
  {
    updateMany: {
      filter: {
        _id: {
          $in: ["rifki", "muhazzar"],
        },
      },
      update: {
        $set: {
          full_name: "Rifki Muhazzar",
        },
      },
    },
  },
]);
