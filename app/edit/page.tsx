"use client";

import { Textarea } from "@/components/ui/textarea";

import { JSX, KeyboardEvent, SetStateAction, useState } from "react";

export default function Home() {
  const [proompt, setProompt] = useState("");

  const setProomptContent = (inputText: string) => {
    setProompt(inputText);
  };

  return (
    <section className="container max-w-6xl mx-auto p-6">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4">
        Editing: Prompt Name
      </h2>
      <Textarea
        name="proomptContent"
        value={proompt}
        id="message"
        onChange={(e) => setProomptContent(e.target.value)}
      />
    </section>
  );
}
