"use client";

import { useReservation } from "@/components/ReservationContext";
import CTAButton from "@/components/CTAButton";

interface ReserveCTAProps {
  variant?: "primary" | "secondary" | "ghost";
}

export default function ReserveCTA({ variant = "secondary" }: ReserveCTAProps) {
  const { open } = useReservation();
  return (
    <CTAButton variant={variant} onClick={open}>
      Reserve a Table
    </CTAButton>
  );
}
