import React from 'react';

interface WelcomePageProps {
  user: {
    name: string;
    email: string;
    company?: string;
  };
}

const WelcomePage: React.FC<WelcomePageProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-lg shadow-lg p-8 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Bem-vindo, {user.name}!</h2>
        <p className="mb-2 text-gray-700">Email: <span className="font-semibold">{user.email}</span></p>
        <p className="mb-2 text-gray-700">Empresa: <span className="font-semibold">{user.company}</span></p>
      </div>
    </div>
  );
};

export default WelcomePage;
