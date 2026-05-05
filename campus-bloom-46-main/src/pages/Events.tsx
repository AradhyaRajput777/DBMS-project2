import { Navbar } from "@/components/Navbar";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const allEvents = [
    {
      title: "TechFest 2025",
      description: "Annual technical symposium featuring coding competitions, hackathons, and tech talks from industry leaders.",
      date: "March 15-17, 2025",
      venue: "Main Auditorium",
      category: "technical" as const,
      participants: 245,
      status: "upcoming" as const,
    },
    {
      title: "Cultural Extravaganza",
      description: "Three days of music, dance, drama and art exhibitions celebrating diverse cultural heritage.",
      date: "March 20-22, 2025",
      venue: "Open Air Theatre",
      category: "cultural" as const,
      participants: 189,
      status: "upcoming" as const,
    },
    {
      title: "Sports Championship",
      description: "Inter-college sports meet featuring cricket, basketball, football and athletics competitions.",
      date: "March 10-12, 2025",
      venue: "Sports Complex",
      category: "sports" as const,
      participants: 156,
      status: "ongoing" as const,
    },
    {
      title: "Hackathon 2025",
      description: "48-hour coding marathon to build innovative solutions for real-world problems.",
      date: "March 25-27, 2025",
      venue: "Computer Lab",
      category: "technical" as const,
      participants: 89,
      status: "upcoming" as const,
    },
    {
      title: "Art Exhibition",
      description: "Showcase of student artwork including paintings, sculptures, and digital art.",
      date: "March 5-7, 2025",
      venue: "Art Gallery",
      category: "cultural" as const,
      participants: 67,
      status: "completed" as const,
    },
    {
      title: "Marathon 2025",
      description: "Annual college marathon promoting fitness and healthy living among students.",
      date: "March 8, 2025",
      venue: "College Campus",
      category: "sports" as const,
      participants: 234,
      status: "completed" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              All Events
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse and register for upcoming college events
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" size="lg" className="h-12">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-3">
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              All Events
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Technical
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Cultural
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Sports
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Upcoming
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Ongoing
            </Badge>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
