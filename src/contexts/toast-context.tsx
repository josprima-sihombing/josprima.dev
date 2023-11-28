"use client";

import Toast from "@/components/atoms/toast";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ToastType = {
  message: string;
} | null;

type ToastContextType = {
  toast: ToastType;
  setToast: Dispatch<SetStateAction<ToastType>>;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<ToastType>(null);

  useEffect(() => {
    if (toast?.message) {
      setTimeout(() => {
        setToast(null);
      }, 4000);
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      {children}
      <Toast />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
