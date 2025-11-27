// Centralized events data for the app
// Note: EventCard currently consumes only `title` and `image` fields.
// Additional metadata is included for future use (slug, date, location, time, url).

export type EventItem = {
  title: string;
  image: string; // path under public/images
  slug: string;
  date: string; // ISO date (YYYY-MM-DD)
  time: string; // local start time
  location: string;
  url: string;
};

export const events: EventItem[] = [
  {
    title: "AWS re:Invent 2025",
    image: "/images/event1.png",
    slug: "aws-reinvent-2025",
    date: "2025-12-01",
    time: "9:00 AM",
    location: "Las Vegas, NV, USA",
    url: "https://reinvent.awsevents.com/",
  },
  {
    title: "Google Cloud Next 2026",
    image: "/images/event2.png",
    slug: "google-cloud-next-2026",
    date: "2026-04-07",
    time: "10:00 AM",
    location: "San Francisco, CA, USA",
    url: "https://cloud.withgoogle.com/next",
  },
  {
    title: "Microsoft Build 2026",
    image: "/images/event3.png",
    slug: "microsoft-build-2026",
    date: "2026-05-19",
    time: "9:00 AM",
    location: "Seattle, WA, USA (Hybrid)",
    url: "https://build.microsoft.com/",
  },
  {
    title: "JSConf EU",
    image: "/images/event4.png",
    slug: "jsconf-eu",
    date: "2026-06-12",
    time: "10:00 AM",
    location: "Berlin, Germany",
    url: "https://jsconf.com/",
  },
  {
    title: "Hack the North 2025",
    image: "/images/event5.png",
    slug: "hack-the-north-2025",
    date: "2025-09-19",
    time: "6:00 PM",
    location: "Waterloo, ON, Canada",
    url: "https://hackthenorth.com/",
  },
  {
    title: "ETHGlobal New York 2026",
    image: "/images/event6.png",
    slug: "ethglobal-ny-2026",
    date: "2026-09-18",
    time: "9:00 AM",
    location: "New York, NY, USA",
    url: "https://ethglobal.com/",
  },
];
