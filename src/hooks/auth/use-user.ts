import { useSupabase } from "@/contexts/supabase-context";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function useUser() {
  const supabase = useSupabase();
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function getUserData() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session?.user) {
      setUser(session.user);
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return { user, isLoggedIn };
}
