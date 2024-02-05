'use client'
import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { useRouter } from 'next/navigation'
import type { Session } from '@supabase/auth-helpers-nextjs'
import { createBrowserClient } from '@supabase/ssr'
import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AuthForm({ session }: { session: Session | null }, { className, ...props }: AuthFormProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  async function signIn() {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
      },
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return session ? (
    <Button variant={"secondary"} onClick={handleSignOut}>Sign out</Button>
  ) : (
    <div className={cn("grid gap-3", className)} {...props}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs lowercase">
          <span className="bg-background px-2 text-muted-foreground">
            Continue with
          </span>
        </div>
      </div>
      <Button key={"Discord"} onClick={signIn} variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <DiscordLogoIcon className="mr-2 h-4 w-4" />
        )}{" "}
        Discord
      </Button>      
    </div>
  )
}