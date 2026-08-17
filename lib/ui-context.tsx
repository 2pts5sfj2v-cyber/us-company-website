"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface BookingPrefill {
  service?: string;
  message?: string;
}

interface UIContextValue {
  bookingOpen: boolean;
  bookingPrefill: BookingPrefill;
  openBooking: (prefill?: BookingPrefill) => void;
  closeBooking: () => void;
}

const UIContext = createContext<UIContextValue | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<BookingPrefill>({});

  const openBooking = (prefill: BookingPrefill = {}) => {
    setBookingPrefill(prefill);
    setBookingOpen(true);
  };

  const closeBooking = () => setBookingOpen(false);

  return (
    <UIContext.Provider
      value={{ bookingOpen, bookingPrefill, openBooking, closeBooking }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
