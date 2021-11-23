import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import './sign-in-and-sign-out.scss'

const SignInAndSignOut = () => (
    <div className="sign-in-and-sign-out">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignOut;