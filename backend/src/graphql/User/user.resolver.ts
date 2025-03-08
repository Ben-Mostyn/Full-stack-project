import { Users, UserType } from "./user-sampleData";

export const userResolvers = {
    Query: {
        getAllUsers: () => Users.map((user: UserType) => ({ userName: user.userName, id: user.id })),
        getUser: (parent: any, args: { id: number }) => {
            return Users.find((user) => user.id === args.id) || null;
        },
    },
    // Mutation: {}
}