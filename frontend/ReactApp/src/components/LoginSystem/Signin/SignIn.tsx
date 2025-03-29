import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LOGIN_USER_MUTATION } from "../../../Graphql/logIn-user";

const SignIn = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [logInUser, { data, loading, error }] = useMutation(LOGIN_USER_MUTATION);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await logInUser({ variables: formData });
            alert('User logged in lets gooo');
            setFormData({ email: '', password: '' });
        } catch (error) {
            console.error({ name: 'login error', error });
            alert('User failed to log in');
        }
    }

    return (
        <div className="formContainer">
            {data?.logInUser?.user && <p>Welcome back {data.logInUser.user.username}</p>}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignIn;
