require("dotenv").config();
import { createUser, getAllUsers, getUser, logInUser } from "./user-resolver-functions";



export const userResolvers = {
    Query: {
        getAllUsers: async () => {
            try {
                return await getAllUsers();
            } catch (error) {
                throw new Error(`Error getting Users ${error}`);
            }
        },
        getUser: async (parent: any, { id }: { id: number }) => {
            try {
                return await getUser(id);

            } catch (error) {
                throw new Error('Failed fetching specific user')
            }
        },
    },
    Mutation: {
        createUser: async (_: any, { username, email, password }: { username: string, email: string, password: string }) => {
            try {
                return await createUser(email, password, username);
            } catch (error) {
                const err = error as Error
                console.log(err.message)
                throw new Error('Failed to create User');
            }
        },
        logInUser: async (_: any, { email, password }: { email: string, password: string }) => {
            try {
                return await logInUser(email, password);
            } catch (err) {
                const error = err as Error;
                throw new Error("Failed to log in" + error.message)
            }
        }
    }
}