import "./FlashCard.css";
import BaseLayout from "../layout/BaseLayout";
import ColorButton from "./ui/ColorButton";
import LinkButton from "./ui/LinkButton";
import { useState } from "react";

function FlashCard({ card }) {
  const [toggleAnswer, setToggleAnswer] = useState(null);
  return (
    <BaseLayout class="text-2xl font-bold flex flex-col items-center ">
      <div
        id="question__container"
        className="flex flex-col items-center justify-center relative"
      >
        <h1 className="flex-1 mb-4 mt-12">{card.question}</h1>
        <div className="absolute bottom-2 right-2">
          {" "}
          <ColorButton
            onClick={() => setToggleAnswer((prev) => !prev)}
            color={"yellow"}
          >
            {" "}
            Show Answer
          </ColorButton>
        </div>
      </div>

      <hr
        style={{
          height: 4,
        }}
      />
      <div
        id="answer__container"
        className="font-normal text-lg text-center px-8 py-10"
      >
        {toggleAnswer ? card.answer : ""}
      </div>
      <div className="flex justify-between w-full mt-8">
        <LinkButton>Previous</LinkButton>
        <div>
          <ColorButton color={"red"}>Low</ColorButton>
          <ColorButton color={"slate"}>Mid</ColorButton>
          <ColorButton color={"green"}>High</ColorButton>
        </div>
        <LinkButton>Next</LinkButton>
      </div>
    </BaseLayout>
  );
}

export default FlashCard;
