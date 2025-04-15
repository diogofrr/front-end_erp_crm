import { ResponseData } from '@/types/globals';

interface LoginArgs {
  email: string;
  password: string;
}

interface LoginResponse extends ResponseData {
  result: {
    access_token: string;
    user: User;
  };
}

interface User {
  id: string;
  email: string;
  name: string;
  roles: string[];
  permissions: string[];
}

export { LoginArgs, LoginResponse, User };
