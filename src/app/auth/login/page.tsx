import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ArrowRight, Coffee, Pizza, Search, User } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      {/* Left side - Red background */}
      <div className="w-full md:w-1/2 bg-[#B22222] flex flex-col items-center justify-center p-8 text-white">
        <div className="flex justify-center space-x-8 mb-6">
          <div className="rounded-full bg-white/10 p-4">
            <Pizza className="h-12 w-12 text-white" />
          </div>
          <div className="rounded-full bg-white/10 p-4">
            <Coffee className="h-12 w-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center">Sistema CRM</h1>
        <p className="text-xl text-white/80 text-center max-w-md">
          Gerencie seus clientes e aumente suas vendas com nossa plataforma
          intuitiva
        </p>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#B22222]">Bem-vindo</h2>
            <p className="mt-2 text-gray-600 font-medium">Acesse sua conta</p>
          </div>

          {/* Main card */}
          <Card className="rounded-[24px] shadow-lg p-6 border-0">
            <h3 className="text-xl font-semibold mb-4">Login</h3>

            {/* Form fields */}
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  className="pl-10 rounded-xl border-gray-200 h-12"
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  className="pl-10 rounded-xl border-gray-200 h-12"
                  placeholder="Buscar serviços"
                />
              </div>

              {/* Checkbox with terms */}
              <div className="flex items-start space-x-3 mt-6">
                <Checkbox
                  id="terms"
                  className="rounded-sm border-gray-300 mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Concordo com os Termos de Serviço e Política de Privacidade
                </label>
              </div>

              {/* Login button */}
              <Button className="w-full rounded-xl h-12 bg-[#B22222] hover:bg-[#8B0000]">
                Entrar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
