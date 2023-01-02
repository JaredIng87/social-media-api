const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, genRandomIndex, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = [];

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    users.push({
      first,
      last,
    });
  }

  const makeThought = (text) => {
    posts.push({
      thoughtText,
      userName: [users[genRandomIndex(users)]._id],
    });
  };

  await User.collection.insertMany(users);

  users.forEach(() => makeThought(getRandomThought(50)));

  await Thought.collection.insertMany(thoughts);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});