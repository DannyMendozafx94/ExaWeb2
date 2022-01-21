if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

module.exports = {
    MONGODB_CNN: process.env.MONGODB_CNN
};