import db from "../../config/db";
import argon2 from 'argon2';
import jwt from "jsonwebtoken";


//! Queries

//! get all user query
export const getAllUsers = async () => {
    return await db('users').select('id', 'username', 'email', 'created_at');
}


//! get specific user query
export const getUser = async (id: number) => {
    const user = await db('users').where({ id }).first();

    if (!user) {
        throw new Error('User not found');
    }

    return user
}

//! Mutations


//! create user mutation
export const createUser = async (email: string, password: string, username: string) => {
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
}

//! Log in mutation
export const logInUser = async (email: string, password: string) => {
    const user = await db("users").where({ email }).first();
    if (!user) {
        return {
            success: false,
            message: 'User not found'
        }
    }

    const isPasswordCorrect = await argon2.verify(user.password, password);
    if (!isPasswordCorrect) {
        return {
            success: false,
            message: 'Wrong password'
        }
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET is not defined");

    const token = jwt.sign(
        { id: user.id, username: user.username },
        secret,
        { expiresIn: "1h" }
    )

    const { password: _pw, ...safeUser } = user;


    return {
        success: true,
        message: 'Login successful',
        token,
        user: safeUser,
    }
}