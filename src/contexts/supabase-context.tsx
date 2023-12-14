"use client";

import { supabase } from "@/data/supabase";
import { SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

type SupabaseContextType = SupabaseClient<any, "public", any>;

const SupabaseContext = createContext<SupabaseContextType | undefined>(
  undefined,
);

export const SupabaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toast] = useState(supabase);

  return (
    <SupabaseContext.Provider value={toast}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => {
  const context = useContext(SupabaseContext);

  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }

  return context;
};
