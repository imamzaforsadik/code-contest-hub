import { Navigation } from "@/components/Navigation";

const Status = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Status</h1>
        <p className="text-muted-foreground">Submission status coming soon...</p>
      </main>
    </div>
  );
};

export default Status;
