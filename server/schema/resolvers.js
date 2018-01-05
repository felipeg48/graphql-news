module.exports = {
  Query: {
    allLinks: async (root, data, { mongo: { Links } }) => await Links.find({}).toArray(), // eslint-disable-line no-return-await
  },
  Mutation: {
    createLink: async (root, data, { mongo: { Links } }) => {
      const response = await Links.insert(data); // 3
      return Object.assign({ id: response.insertedIds[0] }, data);
    },
    createUser: async (root, data, { mongo: { Users } }) => {
      const newUser = {
        name: data.name,
        username: data.username,
        email: data.authProvier.email.email,
        password: data.authProvider.email.password,
      };

      const response = await Users.insert(newUser);
      return Object.assign({ id: response.insertedIds[0] }, newUser);
    },
    signinUser: async (root, data, { mongo: { Users } }) => {
      const user = await Users.findOne({ email: data.email.email });
      if (data.email.password === user.password) {
        return { token: `token-${user.email}`, user };
      }
      return null;
    },
  },
  Link: {
    id: root => root._id || root.id, // eslint-disable-line no-underscore-dangle
  },
  User: {
    id: root => root._id || root.id, // eslint-disable-line no-underscore-dangle
  },
};
