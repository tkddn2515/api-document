import { login } from "./db.js";
const mem = {
  id: 1,
  account: 'hane',
  admin: 'ad'
}
console.log(mem);
const resolvers = {
  Query: {
    member:(_, { account, password }) => login(account, password)
  }
}
export default resolvers;