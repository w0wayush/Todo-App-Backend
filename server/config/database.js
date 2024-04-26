const mongoose = require("mongoose")

require("dotenv").config();

const dbConnect = () => {
      mongoose.connect(process.env.DATABASE_URL)
      .then(() => {console.log("DB Connection successful")})
      .catch((err) => {
            console.log("Issue in DB Connection")
            console.error(err.message)
            //console.log(`Error in connection: ${err.message}`)
            process.exit(1);
      });
}

module.exports = dbConnect;