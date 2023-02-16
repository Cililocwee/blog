#! /usr/bin/env node

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const async = require("async");
const Bird = require("./models/birdModel");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const birds = [];

function birdCreate(name, cb) {
  const bird = new Bird({ name: name });

  bird.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Bird: " + bird);
    birds.push(bird);
    cb(null, bird);
  });
}

function createBirds(cb) {
  async.series(
    [
      function (callback) {
        birdCreate("Penguin", callback);
      },
      function (callback) {
        birdCreate("Flamingo", callback);
      },
      function (callback) {
        birdCreate("Eagle", callback);
      },
      function (callback) {
        birdCreate("Pelican", callback);
      },
    ],
    // optional callback
    cb
  );
}

async.series(
  [
    createBirds,
    //   createGenreAuthors,
    // createBooks,
    // createBookInstances
  ],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("Birds: " + birds);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
