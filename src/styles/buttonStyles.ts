import { cva } from "class-variance-authority";
export const buttonStyles = cva(
  "flex items-center justify-center gap-1 rounded-full transition disabled:cursor-not-allowed  ease-in-out font-heading text-sm font-medium disabled:opacity-40",
  {
    variants: {
      intent: {
        primary:
          " bg-primary-700 text-gray-200  hover:bg-primary-600 disabled:hover:bg-primary-700",
        secondary:
          "bg-secondary-700  text-gray-200 hover:bg-secondary-600 disabled:hover:bg-secondary-700",
        neutral:
          "bg-neutral-200/50 text-gray-700  hover:bg-neutral-300/90 disabled:hover-bg-neutral-200 dark:bg-transparent dark:text-gray-400",
      },
      variant: {
        ghost: "bg-transparent dark:bg-transparent shadow-none border",
      },
      position: {
        default: "",
        start: "mr-auto self-start",
        center: "mx-auto",
        end: "ml-auto self-end",
      },

      size: {
        default: "px-3 py-2 ",
        sm: "px-2 py-1 text-xs",
      },
    },
    defaultVariants: {
      intent: "primary",
      position: "default",
      size: "default",
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "ghost",
        className:
          "border-primary-700  text-primary-700 hover:bg-primary-50 hover:bg-transparent dark:border-gray-300 dark:text-gray-300 dark:bg-transparent",
      },
      {
        intent: "secondary",
        variant: "ghost",
        className:
          "border-secondary-700 text-secondary-700 hover:bg-secondary-50 disabled:hover:bg-transparent dark:border-gray-300 dark:text-gray-300 dark:bg-transparent",
      },
      {
        intent: "neutral",
        variant: "ghost",
        className:
          "border-gray-700 dark:border-gray-300 dark:text-gray-300  hover:bg-neutral-100 ",
      },
    ],
  }
);
