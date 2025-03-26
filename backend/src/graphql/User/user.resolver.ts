import db from "../../config/db";
import { Users, UserType } from "./user-sampleData";
const argon2 = require('argon2');

export const userResolvers = {
    Query: {
        getAllUsers: async () => {
            try {
                return await db('users').select('id', 'username', 'email', 'created_at');
            } catch (error) {
                throw new Error(`Error getting Users ${error}`);
            }
        },
        getUser: async (parent: any, { id }: { id: number }) => {
            try {
                const user = await db('users').where({ id }).first();

                if (!user) {
                    throw new Error('user not found');
                }

                return user;

            } catch (error) {
                throw new Error('Failed fetching specific user')
            }
        },
    },
    Mutation: {
        createUser: async (_: any, { username, email, password }: { username: string, email: string, password: string }) => {
            try {
                console.log('Recieved Input');

                if (!email && !password && !username) {
                    console.log('Missing one or more of the required fields', { email, password, username });
                }
                // Hash with Argon2
                const hashPassword = await argon2.hash(password);


                const [newUser] = await db('users')
                    .insert({
                        username,
                        email,
                        password: hashPassword,
                    })
                    .returning(['id', 'username', 'email', 'created_at']);

                return newUser;
            } catch (error) {
                const err = error as Error
                console.log(err.message)
                throw new Error('Failed to create User');
            }
        }
    }
}