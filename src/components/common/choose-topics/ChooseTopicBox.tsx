import { chooseTopicData } from "@/src/data/ChooseTopicData";
import { IconCross, IconDeviceLaptop, IconX } from "@tabler/icons-react";
import React, { useRef, useState, type HTMLAttributes } from "react";
import Button from "../button/Button";

function ChooseTopicBox() {
  const [topicData, setTopicData] = useState(chooseTopicData);
  function handleSelectedTopic(id: number) {
    setTopicData(
      topicData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  }
  const boxRef = useRef<HTMLDivElement>(null);
  function removeBox() {
    console.log("Removing");
    boxRef.current?.classList.add("scale-0");
    setTimeout(() => {
      boxRef?.current?.remove();
    }, 300);
  }
  return (
    <div
      ref={boxRef}
      className="apply-border apply-bg relative z-10 p-2 px-4 transition duration-300 ease-in-out"
      //   onTransitionEnd={() => boxRef?.current?.remove()}
    >
      <header className="flex items-center justify-between">
        <h4 className="heading-text text-lg">
          What do you want to see more of?{" "}
          <span className="text-sm text-gray-700">(5 topics)</span>
        </h4>
        <button className="cursor-pointer" onClick={() => removeBox()}>
          <IconX className="icon h-7 w-7" />
        </button>
      </header>
      <section className="mt-2">
        <div className="flex flex-wrap items-center gap-2">
          {topicData.map((item) => {
            return (
              <ChooseTopicButton
                onClick={() => handleSelectedTopic(item.id)}
                selected={item.selected}
                key={item.id}
                text={item.text}
              />
            );
          })}
        </div>
      </section>
      <div className="absolute bottom-0 right-0  flex w-24 items-center justify-end p-2 pr-4">
        <Button
          intent="secondary"
          size="sm"
          otherStyles="absolute right-0"
          //   loadingText="Submit"
        >
          Submit
        </Button>
      </div>

      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary-900 to-orange-500" />
    </div>
  );
}
type ChooseTopicButtonProps = {
  selected?: boolean;
  text: string;
} & HTMLAttributes<HTMLButtonElement>;
function ChooseTopicButton({
  selected,
  text,
  ...rest
}: ChooseTopicButtonProps) {
  return (
    <button
      className={`rounded-full  px-3 py-2 transition  ${
        selected
          ? "bg-primary-900 text-gray-100 hover:bg-primary-900"
          : "bg-neutral-100 hover:bg-neutral-200/80"
      }`}
      {...rest}
    >
      {/* <IconDeviceLaptop className="icon" /> */}
      <h4 className="heading-text text-sm text-inherit"> {text}</h4>
    </button>
  );
}

export default ChooseTopicBox;
