import Prompt from "@/components/Prompt";

export default function Home() {
  return (
    <section className="container max-w-6xl mx-auto p-6">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4">
        My Proompts
      </h2>
      <div className="flex flex-wrap gap-4">
        <Prompt />
        <Prompt />
        <Prompt />
      </div>
    </section>
  );
}
