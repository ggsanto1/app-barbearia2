import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  barbershops: {
    id: string
    name: string
    email: string
    password: string
    created_at: string
  }
  services: {
    id: string
    barbershop_id: string
    name: string
    price: number
    duration: number
    created_at: string
  }
  available_slots: {
    id: string
    barbershop_id: string
    date: string
    start_time: string
    end_time: string
    is_available: boolean
    created_at: string
  }
  appointments: {
    id: string
    barbershop_id: string
    service_id: string
    client_name: string
    client_phone: string
    date: string
    start_time: string
    status: 'pending' | 'confirmed' | 'cancelled'
    created_at: string
  }
}
