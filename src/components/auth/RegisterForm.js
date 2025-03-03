"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Flex, Box, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implémentation de l'inscription 
      const response = await fetch('https://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/ld+json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'inscription');
      }

      const data = await response.json();
      // console.log(data);
      
      router.push("/auth/login");
    } catch (error) {
      console.error("Erreur d'inscription:", error);
    }
  };

  return (
    <div className="w-full max-w-md p-4 sm:p-0">
      <div className="text-center mb-8">
        <Flex direction="column" gap="2" align="center">
          <Text className="text-gradient text-3xl font-bold">
            Créer un compte
          </Text>
          <Text className="text-sm text-accents-5">
            Rejoignez BookMarket pour découvrir et partager vos lectures
            préférées
          </Text>
        </Flex>
      </div>

      <Card className="gradient-border">
        <form onSubmit={handleSubmit} className="p-6">
          <Flex direction="column" gap="4">
            <Box>
              <Text size="2" mb="2" weight="medium">
                Email
              </Text>
              <TextField.Root
                size="3"
                type="email"
                placeholder="email@exemple.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Box>

            <Box>
              <Text size="2" mb="2" weight="medium">
                Mot de passe
              </Text>
              <TextField.Root
                size="3"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Box>

            <Box>
              <Text size="2" mb="2" weight="medium">
                Confirmer le mot de passe
              </Text>
              <TextField.Root
                size="3"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </Box>

            <Button
              type="submit"
              size="3"
              className="w-full mt-2 gradient-border gradient-hover glass-effect"
            >
              S&apos;inscrire
            </Button>
          </Flex>
        </form>
      </Card>

      <div className="text-center mt-6">
        <Text size="2" className="text-accents-5">
          Déjà un compte ?{" "}
          <Link href="/auth/login" className="text-foreground hover:opacity-80">
            Se connecter
          </Link>
        </Text>
      </div>
    </div>
  );
}
