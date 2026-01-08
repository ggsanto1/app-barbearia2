'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User, Phone, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ClientLogin() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleLogin = () => {
    if (name && phone) {
      // Salvar dados do cliente no localStorage
      localStorage.setItem('clientData', JSON.stringify({ name, phone }))
      router.push('/client/booking')
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

        <Card className="bg-white/10 backdrop-blur-sm border-cyan-500/30">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-cyan-500/20 rounded-full">
                <User className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <CardTitle className="text-2xl text-white">Acesso do Cliente</CardTitle>
            <CardDescription className="text-gray-300">
              Informe seus dados para agendar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Nome Completo</Label>
              <Input
                id="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Celular</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400 pl-10"
                />
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              onClick={handleLogin}
              disabled={!name || !phone}
            >
              Continuar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
