import { useState } from '#app'
import { createSupabaseClient } from '~/lib/supabase'

export function useEmpresa() {
  const empresaId = useState<number | null>('empresa_id', () => null)

  async function loadEmpresa() {
    if (empresaId.value !== null) return
    const supabase = createSupabaseClient()
    const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) return

    // Try to load existing profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('empresa_id')
      .eq('id', session.user.id)
      .single()

    if (profile?.empresa_id) {
      empresaId.value = profile.empresa_id
      return
    }

    // No profile yet — get the first empresa and create profile automatically
    const { data: empresa } = await supabase
      .from('empresas')
      .select('id')
      .order('id', { ascending: true })
      .limit(1)
      .single()

    if (!empresa?.id) return

    await supabase.from('profiles').upsert({
      id: session.user.id,
      empresa_id: empresa.id,
      email: session.user.email,
      nome: session.user.user_metadata?.full_name ?? null,
      perfil: 'admin',
    })

    empresaId.value = empresa.id
  }

  return { empresaId, loadEmpresa }
}
