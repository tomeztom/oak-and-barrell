export interface Event {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  day: string;
  time: string;
  image: string;
}

export const events: Event[] = [
  {
    id: "friday-live",
    title: "Friday Night Live",
    subtitle: "Live Jazz & Blues",
    description:
      "Enjoy handcrafted cocktails and premium cuts while local jazz and blues artists set the mood every Friday evening.",
    day: "Every Friday",
    time: "7:00 PM - 11:00 PM",
    image: "/images/events/event-friday.webp",
  },
  {
    id: "sunday-session",
    title: "Sunday Afternoon Session",
    subtitle: "Acoustic & Soul",
    description:
      "Wind down the weekend with soulful acoustic performances, craft beer flights, and our signature Sunday brunch menu.",
    day: "Every Sunday",
    time: "2:00 PM - 6:00 PM",
    image: "/images/events/event-sunday.webp",
  },
];
