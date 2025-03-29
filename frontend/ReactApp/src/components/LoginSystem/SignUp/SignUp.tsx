import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "../../../Graphql/create-user";
import { useState } from "react";

const SignUp = () => {

    const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createUser({ variables: formData });
            alert('User created successfully');
            setFormData({ username: '', email: '', password: '' })
        } catch (error) {
            console.error(error);
            alert('User creation failed')
        }
    }
    return (
        <div className="formContainer">
            <h2>Sign Up</h2>
            {loading && <p>Loading...</p>}
            {error && <p >Error: {error.message}</p>}
            {data && <p >User {data.createUser.username} created successfully!</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    name="username" value={formData.username}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    placeholder="email"
                    name='email'
                    onChange={handleChange}
                    value={formData.email}
                    required
                />

                <input
                    type="text"
                    placeholder="password"
                    name='password'
                    onChange={handleChange}
                    value={formData.password}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;