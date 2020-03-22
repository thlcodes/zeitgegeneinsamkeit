import { gql } from "./clients";
import * as consts from "../constants";

export const createUser = async user => {
  const query =
    user.userType == consts.TAG_HELPER
      ? `mutation createUser($user: UserInput!) {
	    createUser(data: $user) {
        _id
      }
    }`
      : `mutation createUser($user: UserInput!) {
	    createUser(data: $user) {
        _id
      }
    }`;

  const res = await gql.fetch(query, { user });
  return res.createUser._id;
};
