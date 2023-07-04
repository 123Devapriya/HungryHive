const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI =
  process.env.MONGO_URI; // Customer change url to your db you created in atlas
// mongoose.set("debug", true);

module.exports = function (callback) {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
      console.log("Connected to MongoDB");

      const foodCollection = await mongoose.connection.db.collection(
        "food_items"
      );
      const categoryCollection = await mongoose.connection.db.collection(
        "foodCategory"
      );

      const foodItems = await foodCollection.find({}).toArray();
      const categories = await categoryCollection.find({}).toArray();


      callback(null, foodItems, categories);
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
      callback(err);
    });
};
