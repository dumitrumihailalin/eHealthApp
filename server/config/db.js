const mongoose = require('mongoose');

const connectDB  = async () => {
    try {
        // Connect to the MongoDB cluster
         mongoose.connect(
          process.env.MONGO_URI,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log(" Mongoose is connected")
        );
    
      } catch (e) {
        console.log("could not connect");
      }

}

module.exports = connectDB;