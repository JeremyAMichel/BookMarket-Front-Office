import Navbar from "@/components/nav/Navbar";
import { Flex, Heading, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-gradient text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Bienvenue sur BookMarket
          </h1>
          <p className="text-lg sm:text-xl text-accents-5 max-w-2xl mx-auto">
            Découvrez notre sélection de livres et partagez vos lectures
            préférées
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <a href="/auth/login" className="gradient-border">
            <span className="block px-4 py-2 rounded-lg glass-effect">
              Se connecter
            </span>
          </a>
          <a href="/auth/register" className="gradient-border">
            <span className="block px-4 py-2 rounded-lg glass-effect">
              S&apos;inscrire
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
