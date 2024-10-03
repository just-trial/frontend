import './LoginButton.css'; // Import the CSS for this component

const LoginButton = () => {
  return (
    <button className="login-button">
        <img src="person.svg" alt="Login" className="icon" />
        <p className='p2'>Entrar</p>
    </button>
  );
};

export default LoginButton;