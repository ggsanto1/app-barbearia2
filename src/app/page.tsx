'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Scissors, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Scissors className="w-16 h-16 text-cyan-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            BarberApp
          </h1>
          <p className="text-xl text-gray-300">
            Sistema completo de agendamento para barbearias
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card Cliente */}
          <Card className="bg-white/10 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => router.push('/client/login')}>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-cyan-500/20 rounded-full">
                  <User className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
              <CardTitle className="text-2xl text-white">Sou Cliente</CardTitle>
              <CardDescription className="text-gray-300">
                Agende seu horário de forma rápida e fácil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                onClick={() => router.push('/client/login')}
              >
                Acessar como Cliente
              </Button>
            </CardContent>
          </Card>

          {/* Card Barbearia */}
          <Card className="bg-white/10 backdrop-blur-sm border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => router.push('/barbershop/login')}>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-500/20 rounded-full">
                  <Scissors className="w-12 h-12 text-purple-400" />
                </div>
              </div>
              <CardTitle className="text-2xl text-white">Sou Barbeiro</CardTitle>
              <CardDescription className="text-gray-300">
                Gerencie sua agenda e serviços
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                onClick={() => router.push('/barbershop/login')}
              >
                Acessar como Barbeiro
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Escolha o tipo de acesso para continuar
          </p>
        </div>
      </div>
    </div>
  )
}
