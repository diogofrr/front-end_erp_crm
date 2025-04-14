import '@/styles/auth/login/style.css';

import LoginDecorations from './components/login-decorations';
import LoginHeader from './components/login-header';
import LoginForm from './components/login-form';
import LoginFooter from './components/login-footer';

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
