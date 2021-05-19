import { ReactNode } from 'react';
import '../styles/Layout.css';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div
      style={{
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
}
