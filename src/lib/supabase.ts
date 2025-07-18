import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to construct email from staff ID or roll number
export const constructEmail = (id: string, userType: 'staff' | 'student'): string => {
  const domain = userType === 'staff' ? 'staff.annamalaiuniversity.ac.in' : 'student.annamalaiuniversity.ac.in'
  return `${id}@${domain}`
}

// Helper function to extract ID from constructed email
export const extractIdFromEmail = (email: string): string => {
  return email.split('@')[0]
}