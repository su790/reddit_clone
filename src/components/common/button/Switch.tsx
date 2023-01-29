import React from "react";
import { Switch } from "@headlessui/react";
interface SwitchBtnProps {
  onChange: () => void;
  checked?: boolean;
  srText: string;
}
function SwitchBtn({ onChange, srText, checked = false }: SwitchBtnProps) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={`${checked ? "bg-secondary-800" : "bg-gray-300"}
relative inline-flex h-6 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 `}
    >
      <span className="sr-only">{srText}</span>
      <span
        aria-hidden="true"
        className={`${checked ? "translate-x-3" : "translate-x-0"}
pointer-events-none inline-block h-[19px] w-[19px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}

export default SwitchBtn;
