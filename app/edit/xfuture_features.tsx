"use client";

import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { JSX, KeyboardEvent, SetStateAction, useState } from "react";

export default function Home() {
  const [proompt, setProompt] = useState("");
  const [popUpState, setPopUp] = useState(false);

  const setProomptContent = (inputText: string) => {
    setProompt(inputText);
  };

  const handleProomptKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "@") {
      console.log("You pressed @ and value");
      setPopUp(true);
    }
  };

  const handleContextMenu = (state: boolean) => {
    console.log(state);
    return true;
  };

  return (
    <section className="container max-w-6xl mx-auto p-6">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4">
        Editing: Prompt Name
      </h2>
      <Textarea
        name="promptContent"
        value={proompt}
        id="message"
        onChange={(e) => setProomptContent(e.target.value)}
        onKeyUp={(e) => handleProomptKeyPress(e)}
      />
      <Popover
        open={popUpState}
        onOpenChange={() => handleContextMenu(popUpState)}
      >
        {/*I will need to use custom primitives from radix to enable context manu on custom anchor!
        I think I should leave this for a future mod!@!@@d */}
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </section>
  );
}
