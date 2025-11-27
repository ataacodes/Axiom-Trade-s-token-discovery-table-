import { TokenDiscoveryTable } from "@/components/organisms/token-discovery-table";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Token Discovery
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Real-time token prices and market data
          </p>
        </div>
        <TokenDiscoveryTable />
      </div>
    </main>
  );
}

