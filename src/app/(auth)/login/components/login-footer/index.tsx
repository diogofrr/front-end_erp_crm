import Link from 'next/link';
import './style.css';

const LoginFooter = () => {
  return (
    <footer className="login-footer">
      <div className="login-footer__content">
        <span>
          Feito por <Link href="https://github.com/diogofrr">diogofrr</Link>
        </span>
        <span>|</span>
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default LoginFooter; 