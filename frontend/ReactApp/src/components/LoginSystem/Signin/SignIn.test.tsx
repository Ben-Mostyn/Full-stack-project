import { MockedProvider } from "@apollo/client/testing"
import SignIn from "./SignIn"
import { render, screen } from "@testing-library/react"

describe('',()=>{
    test('', () => {
        const {container} = render(
            <MockedProvider>
                <SignIn />
            </MockedProvider>
        )

        const heading = screen.getByRole('heading', {level: 2});
        expect(heading).toHaveTextContent('Sign in')


        expect(container).toMatchSnapshot();
    })
})