const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("MonogoDB Connected...");
  } catch (err) {
    console.error(err.message);
    //Exit Process with failure
    process.exit(1);
  }
};

