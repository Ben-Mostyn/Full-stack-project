import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest";
import SignUp from './SignUp';
import { MockedProvider } from '@apollo/client/testing';


describe('Sign up', () => {
    test('', () => {
        const {container} = render(
            <MockedProvider>
                <SignUp />
            </MockedProvider>
    
    );

    const heading = screen.getByRole('heading', {level: 2});
        expect(heading).toHaveTextContent('Sign Up');

        expect(container).toMatchSnapshot();
    })
})