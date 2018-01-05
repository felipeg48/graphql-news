const links = [
  {
    id: 1,
    url: 'http://google.com',
    description: 'The verb, yo',
  },
  {
    id: 2,
    url: 'http://facebook.com',
    description: 'We are always watching',
  },
];

module.exports = {
  Query: {
    allLinks: () => links,
  },
};
