import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IUser {
  name?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
  role?: string | null;
}

interface UserContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return <UserContext.Provider value={{ setUser, user }}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
