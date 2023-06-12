import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet-async';

function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
export default Register;
