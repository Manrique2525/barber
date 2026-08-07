import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Skeleton className="h-12 w-2/3 max-w-lg" />
        <Skeleton className="h-6 w-1/3 max-w-xs" />
        <div className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      </div>
    </div>
  );
}
