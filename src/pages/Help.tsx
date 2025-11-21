import { Navigation } from "@/components/Navigation";

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Help</h1>
        <p className="text-muted-foreground">Help documentation coming soon...</p>
      </main>
    </div>
  );
};

export default Help;
