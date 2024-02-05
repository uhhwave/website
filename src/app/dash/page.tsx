import AuthForm from "@/components/authForm"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/supabase/server'
export default async function LoginPage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <h1>hi~ // dashboard</h1>
          </div>
        </div>
        <AuthForm session={session} />
      </div>
    </main>
  );
}