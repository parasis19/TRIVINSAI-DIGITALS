import { FlipWords } from "@/components/ui/flip-words"

export default function FlipWordsDemo() {
  const words = ["ad creation services", "app development services", "web development services", "digital solutions"]

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Trivinsai provides expert <FlipWords words={words} /> for your business
      </div>
    </div>
  )
}
