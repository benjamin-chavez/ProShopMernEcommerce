import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    passwords: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'JohnDoe@example.com',
    passwords: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'JaneDoe@example.com',
    passwords: bcrypt.hashSync('123456', 10),
  },
];

export default users;
