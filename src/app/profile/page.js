'use client';
import { useEffect, useState } from 'react';
import { Card, Heading, Text, Flex } from '@radix-ui/themes';
import { useAuth } from '@/contexts/auth/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { token } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push('/auth/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch('https://localhost:8000/api/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/ld+json'
          }
        });

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token, router]);

  if (loading) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <Text>Chargement...</Text>
      </div>
    );
  }

  return (
    
      <Card size="4" style={{ maxWidth: 600, margin: '0 auto' }}>
        <Flex direction="column" gap="4">
          <Heading size="6">Mon Profil</Heading>
          {userData ? (
            <Flex direction="column" gap="2">
              <Text size="2">
                <span className="font-semibold">Email:</span> {userData.email}
              </Text>
              <Text size="2">
                <span className="font-semibold">ID:</span> {userData.id}
              </Text>
              {/* Ajoutez d'autres champs selon la structure de votre API */}
            </Flex>
          ) : (
            <Text>Aucune donnée disponible</Text>
          )}
        </Flex>
      </Card>

  );
}