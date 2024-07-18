const mongoose = require("mongoose");
const db =
    "mongodb+srv://infoyamrajshrestha:IlVx3prCY9VUSvbV@cluster0.g0dg5oz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// replace <password> with your database password

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("MongoDB is connected...");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
