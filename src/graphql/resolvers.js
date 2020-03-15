import {
  getUser,
  getFriend,
  getAllUsers,
  getFriends,
} from '../getters';

import {
  registerUser,
  addFriendToUser,
  removeFriends,
  removeUsers,
  loginUser,
} from '../setters';

const resolvers = {
  Query: {
    user: (_, args, context) => getUser(args, context),
    users: (_, args, context) => getAllUsers(args, context),
    friend: (_, args, context) => getFriend(args, context),
    friends: (_, args, context) => getFriends(args, context),
  },
  Mutation: {
    registerUser: (_, args, context) => registerUser(args, context),
    loginUser: (_, args, context) => loginUser(args, context),
    addFriendToUser: (_, args, context) => addFriendToUser(args, context),
    removeFriend: (_, args, context) => removeFriend(args, context),
    removeFriends: (_, args, context) => removeFriends(args, context),
    removeUser: (_, args, context) => removeUser(args, context),
    removeUsers: (_, args, context) => removeUsers(args, context),
  },
};

export default resolvers;
