import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { AuroraBackground } from "@/components/AuroraBackground";
import { LogOut, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aurora — Your dashboard" },
      { name: "description", content: "Aurora dashboard with 3D glassmorphism auth." },
    ],
  }),
});

function Index() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setReady(true);
      if (!s) navigate({ to: "/auth" });
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
      if (!data.session) navigate({ to: "/auth" });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  if (!ready || !session) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-background">
        <AuroraBackground />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <AuroraBackground />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="glass-card rounded-3xl p-10 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-[0_0_40px_oklch(0.7_0.22_310/0.6)]">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">
              Welcome to Aurora
            </h1>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              You're signed in as{" "}
              <span className="font-medium text-foreground">{session.user.email}</span>.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Authenticated session active
            </div>

            <button
              onClick={async () => {
                await supabase.auth.signOut();
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-glass-border bg-glass px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-white/10"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
