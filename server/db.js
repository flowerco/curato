const mongoose = require('mongoose');

async function main () {
  await mongoose.connect(process.env.DBPATH);
}

main().catch(err => console.log(err));

module.exports = mongoose;

