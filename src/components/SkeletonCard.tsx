import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
    <div className="max-w-6xl w-full">
      <div className="text-center space-y-8">
        <Skeleton className="h-20 w-3/4 mx-auto" />
        <Skeleton className="h-8 w-2/3 mx-auto" />
        <div className="flex justify-center gap-4 pt-4">
          <Skeleton className="h-12 w-40 rounded-full" />
          <Skeleton className="h-12 w-40 rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

export const SectionSkeleton = ({ cards = 3 }: { cards?: number }) => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <Skeleton className="h-12 w-64 mx-auto mb-4" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: cards }).map((_, i) => (
          <Card key={i} className="p-6">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export const CardSkeleton = () => (
  <Card className="p-6">
    <Skeleton className="h-6 w-32 mb-4" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-3/4" />
  </Card>
);
