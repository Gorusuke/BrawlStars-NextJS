import { MapsSkeleton } from "@/ui/Skeletons";

export default function Loading() {
  return [...Array(3)].map((_, idx) => <MapsSkeleton key={idx} />)
}