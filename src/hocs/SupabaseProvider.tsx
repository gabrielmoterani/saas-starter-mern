'use client'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return <SessionContextProvider supabaseClient={supabase}>{children}</SessionContextProvider>
}

export default SupabaseProvider
