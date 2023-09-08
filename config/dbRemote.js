var mongoose = require('mongoose');

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
      console.log('Unable to connect to MongoDB Atlas!');
      console.error(error);
    });
};

module.exports = dbConnect;

/*const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoDB = 'insert_your_database_url_here';

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}*/
