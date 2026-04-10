import { ref, onMounted } from 'vue'
import { createSupabaseClient } from '~/lib/supabase'

export function useAdmin() {
  const isAdmin = ref(false)
  const adminLoading = ref(true)

  onMounted(async () => {
    const supabase = createSupabaseClient()
    const { data: { session } } = await supabase.auth.getSession()
    isAdmin.value = session?.user?.email === 'admin@zoocultura.com'
    adminLoading.value = false
  })

  return { isAdmin, adminLoading }
}
