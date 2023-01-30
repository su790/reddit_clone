import { type PartialPostData } from "@/src/types/postData.types";
import {
  IconChevronLeft,
  IconChevronRight,
  IconExternalLink,
  IconLink,
} from "@tabler/icons-react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import IconButton from "../button/IconButton";
function CardBody({
  postType,
  postImage,
  postLink,
  postText,
}: PartialPostData) {
  return (
    <div className="p-2">
      {postType === "image" && <CardBodyWithImage postImage={postImage} />}
      {postType === "text" && <CardBodyWithText postText={postText} />}
      {postType === "link" && <CardBodyWithLink postLink={postLink} />}
    </div>
  );
}
function CardBodyWithText({ postText }: { postText: string | undefined }) {
  const displayHtmlRef = useRef<HTMLDivElement>(null);
  console.log("Post text", postText);
  useEffect(() => {
    if (displayHtmlRef.current) {
      displayHtmlRef.current.innerHTML = postText || "";
    }
  }, []);

  return (
    <Link href="/">
      <div
        ref={displayHtmlRef}
        className="mask-image font-display prose-p:font-body prose prose-zinc line-clamp-6 prose-h1:font-normal prose-code:mx-1 prose-code:before:content-none prose-code:after:content-none  dark:prose-invert"
      ></div>
    </Link>
  );
}
function CardBodyWithLink({ postLink }: { postLink: string | undefined }) {
  return (
    <div className="flex flex-col gap-2">
      <a
        target={"_blank"}
        rel="noreferrer"
        className="link heading-text inline w-fit flex-1 line-clamp-1"
        href={postLink || "/"}
      >
        {postLink}
      </a>
      <div className="relative m-2 flex h-24 w-32 items-center justify-center overflow-hidden rounded-md border border-secondary-800 sm:hidden">
        <IconLink className="h-7 w-7 stroke-[1.3px] text-secondary-800" />
        <a target={"_blank"} rel="noreferrer" href={postLink}>
          <div className="absolute bottom-0 right-0 rounded-tl-md bg-secondary-800 p-[2px]">
            <IconExternalLink className="h-5 w-5 stroke-[1.3px] text-gray-100" />
          </div>
        </a>
      </div>
    </div>
  );
}

function CardBodyWithImage({ postImage }: { postImage: string[] | undefined }) {
  return (
    <Carousel
      showArrows={true}
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <IconButton
            className="absolute top-1/2 right-1 z-10 -translate-y-1/2 rounded-full bg-white  p-3 shadow-lg"
            onClick={onClickHandler}
            title={label}
          >
            <IconChevronRight className="icon h-7 w-7" />
          </IconButton>
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <IconButton
            className="absolute top-1/2 left-1 z-10 -translate-y-1/2 rounded-full bg-white  p-3 shadow-lg"
            onClick={onClickHandler}
            title={label}
          >
            <IconChevronLeft className="icon h-7 w-7" />
          </IconButton>
        )
      }
      swipeable={false}
      showStatus={false}
      showIndicators={false}
    >
      {postImage?.map((item) => {
        return (
          <div className="relative h-[28rem] w-full" key={item}>
            <Image alt="Image" layout="fill" objectFit="contain" src={item} />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CardBody;
