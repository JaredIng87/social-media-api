const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];


  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const userName = fullName;
    const email = `${fullName.split(' ').join('')}@email.com`;

    users.push({
      userName,
      email,
    });
  };


  await User.collection.insertMany(users);
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});