module.exports = {
  Query: {
    allLinks: async (root, data, { db: { Links } }) => await Links.find({}).toArray(), // eslint-disable-line no-return-await
    allUsers: async (root, data, { db: { Users } }) => await Users.find({}).toArray(), // eslint-disable-line no-return-await
  },
  Mutation: {
    createLink: async (root, data, { db: { Links }, user }) => {
      const link = Object.assign({ author: user && user._id }, data); // eslint-disable-line no-underscore-dangle
      console.log(user);
      const response = await Links.insert(link);
      return Object.assign({ id: response.insertedIds[0] }, link);
    },
    destroyLink: async (root, data, { db: { Links } }) => {
      const id = data.id;
      return await Links.deleteOne({ id }); // eslint-disable-line no-return-await
    },
    createUser: async (root, data, { db: { Users } }) => {
      const newUser = {
        name: data.name,
        email: data.auth.email.email,
        password: data.auth.email.password,
      };

      const response = await Users.insert(newUser);
      return Object.assign({ id: response.insertedIds[0] }, newUser);
    },
    signinUser: async (root, data, { db: { Users } }) => {
      const user = await Users.findOne({ email: data.email.email });
      if (data.email.password === user.password) {
        return { token: `token-${user.email}`, user };
      }
      return null;
    },
  },
  Link: {
    id: root => root._id || root.id, // eslint-disable-line no-underscore-dangle
    author: async ({ authorId }, data, { db: { Users } }) => {
      return await Users.findOne({ _id: authorId }); // eslint-disable-line no-return-await
    },
  },
  User: {
    id: root => root._id || root.id, // eslint-disable-line no-underscore-dangle
  },
};
