import { login, getApiList, getApi } from "./db.js";

const resolvers = {
  Query: {
    member:(_, { account, password }) => login(account, password),
    getApiList: () => getApiList(),
    getApi:(_, { id }) => getApi(id)
  }
}
export default resolvers;