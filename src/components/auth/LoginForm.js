"use client";
import { useState } from "react";
import { Button, Card, Flex, Box, Text, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/auth/AuthContext";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implémentation de la connexion à faire
      const response = await fetch("https://localhost:8000/api/login_check", {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json",
        },
        body: JSON.stringify({
          username: credentials.email,
          password: credentials.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Échec de la connexion");
      }

      const data = await response.json();
      login(data.token);
      console.log("Connexion réussie et token stocké dans localStorage:", data);

      router.push('/profile');
    } catch (error) {
      console.error("Erreur de connexion:", error);
    }
  };

  return (
    <div className="w-full max-w-md p-4 sm:p-0">
      <div className="text-center mb-8">
        <Flex direction="column" gap="2" align="center">
          <Text className="text-gradient text-3xl font-bold">Connexion</Text>
          <Text className="text-sm text-accents-5">
            Connectez-vous pour accéder à votre bibliothèque
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
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
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
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </Box>

            <Button
              type="submit"
              size="3"
              className="w-full mt-2 glass-effect gradient-border gradient-hover"
            >
              Se connecter
            </Button>
          </Flex>
        </form>
      </Card>

      <div className="text-center mt-6">
        <Text size="2" className="text-accents-5">
          Pas encore de compte ?{" "}
          <Link
            href="/auth/register"
            className="text-foreground hover:opacity-80"
          >
            S&apos;inscrire
          </Link>
        </Text>
      </div>
    </div>
  );
}
