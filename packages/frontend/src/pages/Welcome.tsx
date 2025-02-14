import { useLocation, Navigate } from 'react-router-dom';
import React from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

export function Welcome() {
  const location = useLocation();
  const user = location.state?.user as User;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h1 className="text-3xl font-bold text-center">Bem-vindo!</h1>
        <div className="space-y-4">
          <p className="text-lg">Olá, {user.name}!</p>
          <p>Seu email é: {user.email}</p>
        </div>
      </div>
    </div>
  );
} 