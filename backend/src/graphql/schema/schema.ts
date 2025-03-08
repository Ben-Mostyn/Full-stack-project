import { makeExecutableSchema } from "@graphql-tools/schema";
import { userResolvers } from "../User/user.resolver";
import { userTypeDefs } from "../User/user.typeDefs";

export const schema = makeExecutableSchema({
    typeDefs: [userTypeDefs],
    resolvers: [userResolvers]
})