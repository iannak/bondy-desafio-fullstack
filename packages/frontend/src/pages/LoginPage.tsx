import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import LoginForm from '../components/LoginForm';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
      company
    }
  }
`;

interface LoginPageProps {
  onSuccess: (user: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onSuccess }) => {
  const [login, { loading }] = useMutation(LOGIN_MUTATION);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleLogin = async (email: string, password: string) => {
    setError(undefined);
    try {
      const { data } = await login({ variables: { email, password } });
      if (data?.login) {
        onSuccess(data.login);
      } else {
        setError('Usuário ou senha inválidos');
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Login</h2>
        <LoginForm onLogin={handleLogin} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default LoginPage;
