import React, { createContext, useState, useContext } from 'react';
import { User, AuthContextType } from '../types/models';
import { generateCode } from '../utils/generateCode';

const defaultUser: User | null = null;

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signUp: () => {},
  linkPartner: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(defaultUser);

  const signUp = (name: string) => {
    const newUser: User = {
      id: Math.random().toString(36).slice(2),
      name,
      inviteCode: generateCode(),
    };
    setUser(newUser);
  };

  const linkPartner = (code: string) => {
    // Simulate linking logic
    setUser((prev) =>
      prev ? { ...prev, partnerId: 'partner-' + code } : prev
    );
  };

  return (
    <AuthContext.Provider value={{ user, signUp, linkPartner }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
