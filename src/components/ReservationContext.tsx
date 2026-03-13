"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface ReservationContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ReservationContext = createContext<ReservationContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ReservationContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  return useContext(ReservationContext);
}
