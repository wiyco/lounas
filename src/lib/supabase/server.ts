import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Supabase client for server-side rendering.
 * @see {@link https://supabase.com/docs/guides/auth/server-side/nextjs}
 */
export function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            console.error(
              "The `setAll` method was called from a Server Component. This can be ignored if you have middleware refreshing user sessions."
            );
          }
        },
      },
    }
  );
}
