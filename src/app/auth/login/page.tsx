import LoginDecorations from './components/login-decorations';
import LoginHeader from './components/login-header';
import LoginForm from './components/login-form';
import LoginFooter from './components/login-footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5ed] relative overflow-hidden">
      <LoginHeader />
      <LoginDecorations />
      <LoginForm />
      <LoginFooter />
    </div>
  );
}
