import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";

export default function Proompt() {
  return (
    <div className="max-w-lg rounded-md border p-4">
      <div className="flex items-center justify-between py-2">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {"1."} Write feedback for Jason ...
        </h4>{" "}
        <p className="text-sm text-muted-foreground">{"03 Apr 23"}</p>
      </div>
      <p className="line-clamp-3">
        {`Write feedback for Jason based on the bellow feedback. Modify some
          sections to include the mention of his contribution to the Design
          System, Trends Report and the Marketplace. "It was great working with
          you Jess! I have been saying this for a year now, but you have gone
          beyond the expectations throughout your time working here. Specially
          not saying a word on working long hours and keeping your head down and
          working hard. I have noticed your designs communicate ideas clearly,
          with a glance. This skill is invaluable and only gets better as we get
          more under the belt. The deliverables, had a special blend of creative
          thinking added to the mix. You questioned, and asked instead of taking
          the ideas as it is. Hera, you also took ownership where it was
          expected; keeping in mind the timelines, managing us and keep us on
          our toes. Your particular vision and eye has contributed to the
          overall value of our company beyond nominal! Wish to work with you
          again Jess. Thank you so much for making our lives colorful and rich
          with story.`}
      </p>
      <div className="flex items-center justify-between py-2">
        <div className="flex flex-wrap items-center gap-3 py-2">
          <Badge>{"ChatGPT"}</Badge>
          <Badge variant="secondary">feedback</Badge>
          <Badge variant="secondary">email</Badge>
        </div>
        <div>
          <Button variant="link">Copy</Button>
        </div>
      </div>
    </div>
  );
}
