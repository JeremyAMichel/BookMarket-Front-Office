'use client';
import Link from 'next/link';
import { Button, Flex } from '@radix-ui/themes';
import { useAuth } from '@/contexts/auth/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { token, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-4 px-8 border-b bg-background/80 backdrop-blur-sm z-50">
      <Flex justify="between" align="center">
        <Link href="/" className="text-xl font-bold">
          BookMarket
        </Link>
        <Flex gap="4">
          {token ? (
            <>
              <Link href="/profile">
                <Button variant="soft">Profile</Button>
              </Link>
              <Button onClick={handleLogout}>Déconnexion</Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="soft">Connexion</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Inscription</Button>
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </nav>
  );
}