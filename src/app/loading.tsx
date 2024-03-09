import { CardSkeleton } from "@/ui/Skeletons";

export default function Loading() {
  return (
    <section className='grid grid-cols-[repeat(auto-fit,_minmax(380px,_1fr))] gap-5 pb-20 pt-32'>
      {Array.from({length: 12}).map((_, idx) => <CardSkeleton key={idx} />)}
    </section>
  )
}