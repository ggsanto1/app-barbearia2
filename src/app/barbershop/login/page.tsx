'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Scissors, Mail, Lock, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function BarbershopLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')

  const handleSubmit = () => {
    if (isRegister) {
      // Registrar nova barbearia
      if (name && email && password) {
        localStorage.setItem('barbershopData', JSON.stringify({ name, email }))
        router.push('/barbershop/dashboard')
      }
    } else {
      // Login
      if (email && password) {
        localStorage.setItem('barbershopData', JSON.stringify({ email }))
        router.push('/barbershop/dashboard')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          className="text-gray-300 hover:text-white mb-6"
          onClick={() => router.push('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <Card className="bg-white/10 backdrop-blur-sm border-purple-500/30">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-purple-500/20 rounded-full">
                <Scissors className="w-12 h-12 text-purple-400" />
              </div>
            </div>
            <CardTitle className="text-2xl text-white">
              {isRegister ? 'Cadastrar Barbearia' : 'Acesso do Barbeiro'}
            </CardTitle>
            <CardDescription className="text-gray-300">
              {isRegister ? 'Crie sua conta para começar' : 'Entre com suas credenciais'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isRegister && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Nome da Barbearia</Label>
                <Input
                  id="name"
                  placeholder="Digite o nome da barbearia"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400 pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400 pl-10"
                />
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
              onClick={handleSubmit}
              disabled={isRegister ? (!name || !email || !password) : (!email || !password)}
            >
              {isRegister ? 'Cadastrar' : 'Entrar'}
            </Button>

            <div className="text-center">
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {isRegister ? 'Já tem conta? Entrar' : 'Não tem conta? Cadastrar'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
