const mongoose = require("mongoose");

mongoose
  .set('useCreateIndex', true)
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.ioccw.mongodb.net/hey-project",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
