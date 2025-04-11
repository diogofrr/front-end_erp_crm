import Link from 'next/link';

const LoginFooter = () => {
  return (
    <footer className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-600">
      <div className="flex justify-center items-center gap-2">
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
