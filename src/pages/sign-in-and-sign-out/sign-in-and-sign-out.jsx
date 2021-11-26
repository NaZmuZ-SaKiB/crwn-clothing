import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import { SignInAndSignOutContainer } from './sign-in-and-sign-out.styles';

const SignInAndSignOut = () => (
    <SignInAndSignOutContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignOutContainer>
)

export default SignInAndSignOut;