import React from "react";
import BaseLayout from "../layout/BaseLayout";
import ColorButton from "./ui/ColorButton";
import LinkButton from "./ui/LinkButton";

function FlashCard({ card }) {
  return (
    <BaseLayout class="text-2xl font-bold flex flex-col items-center ">
      <div className="flex flex-col items-center flex-1 justify-center">
        <h1 className="mb-4">{card.question}</h1>
        <ColorButton color={"yellow"}> Show Answer</ColorButton>
      </div>
      <div className="flex justify-between w-full mt-8">
        <LinkButton>Previous</LinkButton>
        <LinkButton>Next</LinkButton>
      </div>
    </BaseLayout>
  );
}

export default FlashCard;
