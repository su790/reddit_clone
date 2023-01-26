import { Combobox } from "@headlessui/react";
import { IconBackspace, IconCross, IconSearch } from "@tabler/icons";
import Image from "next/legacy/image";
import React, { useEffect, useRef, useState } from "react";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
];

export default function SearchBox() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [queryWord, setQueryWord] = useState("");
  const inputRef = useRef(null);
  const mainBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      // if (!comboBoxRef?.current?.contains(e.target)) {
      //   setShowDropdown(false);
      // }
      if (e.target instanceof HTMLElement) {
        if (!mainBoxRef?.current?.contains(e.target)) {
          setShowDropdown(false);
        }
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  console.log("Show dropdown", showDropdown);
  return (
    <Combobox
      ref={mainBoxRef}
      as="div"
      className={`relative w-64 rounded-3xl border bg-neutral-100 focus-within:border-blue-400  focus-within:bg-white hover:border-blue-400 hover:bg-white dark:border-gray-900 dark:bg-neutral-800 dark:focus-within:border-gray-600 dark:focus-within:bg-neutral-900 dark:hover:border-gray-600 dark:hover:bg-neutral-900  ${
        showDropdown
          ? "rounded-3xl rounded-bl-none rounded-br-none border-b-white focus-within:border-b-white hover:border-b-white focus:border-b-white "
          : ""
      } `}
      onChange={() => {
        // TODO: Navigate user to selected page
      }}
    >
      {queryWord && (
        <IconBackspace
          onClick={() => setQueryWord("")}
          className="icon absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer "
        />
      )}
      <div className="flex items-center px-4">
        <IconSearch className="icon h-6 w-6  " />
        <Combobox.Input
          onFocus={() => {
            if (queryWord) setShowDropdown(true);
          }}
          className={
            "input w-full border border-none bg-transparent text-sm focus:ring-0"
          }
          placeholder="Search reddit"
          onChange={(e) => {
            setQueryWord(e.target.value);
            setShowDropdown(true);
          }}
          value={queryWord}
        />
      </div>
      <Combobox.Options
        static={showDropdown}
        className={
          "absolute z-10  -mt-[0.10rem] max-h-96 w-full overflow-auto rounded-bl-md rounded-br-md border border-l-0 border-r-0 border-b-0 border-t-2 bg-white py-2 shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
        }
      >
        <h3 className="heading-text mb-1 px-3">Communities</h3>
        <div className="mb-1 flex flex-col">
          {people.map((item) => {
            return (
              <Combobox.Option key={item.id} value={item.name}>
                {({ active }) => {
                  return <SearchResult avatar="" name="" active={active} />;
                }}
              </Combobox.Option>
            );
          })}
        </div>
        <hr className="border-t-2 dark:border-neutral-700" />
        <h3 className="heading-text mt-1 px-3">People</h3>
        <div className="flex flex-col">
          {people.map((item) => {
            return (
              <Combobox.Option key={item.id} value={item.name}>
                {({ active }) => {
                  return <SearchResult avatar="" name="" active={active} />;
                }}
              </Combobox.Option>
            );
          })}
        </div>
      </Combobox.Options>
    </Combobox>
  );
}

interface SearchResult {
  avatar: string;
  name: string;
  members?: string;
  karma?: string;
  active: boolean;
}
function SearchResult({ avatar, name, karma, members, active }: SearchResult) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-2 py-2 px-5 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
        active ? "bg-neutral-200 dark:bg-neutral-700" : ""
      }`}
    >
      <div className="relative h-6 w-6 overflow-hidden rounded-full">
        <Image
          layout="fill"
          alt="user"
          src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="heading-text">u/Jung_Bikrant</h4>
        <p className="heading-text text-[10px] text-gray-600">5 karma</p>
      </div>
    </div>
  );
}
