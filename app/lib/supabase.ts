import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export function createSupabaseClient(): SupabaseClient {
  const config = useRuntimeConfig()
  return createClient(
    config.public.supabaseUrl as string,
    config.public.supabaseKey as string,
  )
}
