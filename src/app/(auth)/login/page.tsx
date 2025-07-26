import '@/styles/auth/login/style.css';

import LoginDecorations from './components/login-decorations/index';
import LoginHeader from './components/login-header/index';
import LoginForm from './components/login-form/index';
import LoginFooter from './components/login-footer/index';

export default function Home() {
  return (
    <main className="main-container">
      <LoginHeader />
      <LoginDecorations />
      <LoginForm />
      <LoginFooter />
    </main>
  );
}
