import {
  getUser,
  getFriend,
  getUsers,
  getFriends,
} from '../getters';

import {
  loginUser,
  registerUser,
  updateUser,
  addFriend,
  updateFriendInfo,
  updateFriendGoals,
  updateCurrentGoal,
  removeUser,
  removeUsers,
  removeFriend,
  removeFriends,
} from '../setters';

// `users, removeUser, and removeUsers` are all superuser level calls
// currently not supporting roles, so we're just checking for a valid token
//              ¯\_(ツ)_/¯

const resolvers = {
  Query: {
    user: (_, args, context) => getUser(args, context),
    users: (_, args, context) => getUsers(context),

    friend: (_, args, context) => getFriend(args, context),
    friends: (_, args, context) => getFriends(args, context),
  },
  Mutation: {
    registerUser: (_, args, context) => registerUser(args, context),
    loginUser: (_, args, context) => loginUser(args, context),
    updateUser: (_, args, context) => updateUser(args, context),
    removeUser: (_, args, context) => removeUser(args, context),
    removeUsers: (_, args, context) => removeUsers(args, context),

    addFriend: (_, args, context) => addFriend(args, context),
    updateCurrentGoal: (_, args, context) => updateCurrentGoal(args, context),
    updateFriendInfo: (_, args, context) => updateFriendInfo(args, context),
    updateFriendGoals: (_, args, context) => updateFriendGoals(args, context),

    removeFriend: (_, args, context) => removeFriend(args, context),
    removeFriends: (_, args, context) => removeFriends(args, context),
  },
};

export default resolvers;
