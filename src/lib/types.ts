export type UserType = 'client' | 'barbershop'

export interface Barbershop {
  id: string
  name: string
  email: string
  password: string
  created_at: string
}

export interface Service {
  id: string
  barbershop_id: string
  name: string
  price: number
  duration: number
  created_at: string
}

export interface AvailableSlot {
  id: string
  barbershop_id: string
  date: string
  start_time: string
  end_time: string
  is_available: boolean
  created_at: string
}

export interface Appointment {
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
