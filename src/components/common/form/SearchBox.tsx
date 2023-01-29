import { Combobox } from "@headlessui/react";
import { IconBackspace, IconSearch } from "@tabler/icons-react";
import clsx from "clsx";
import Image from "next/legacy/image";
import { useRef, useState } from "react";
import RedditIcon from "../icons/RedditIcon";

const people = [
  { id: 1, name: "Jung_Bikrant" },
  { id: 2, name: "Mike_A" },
  { id: 3, name: "ramen" },
];
interface SearchBoxProps {
  placeholder: string;
  placement?: "navbar" | "create-post";
  width?: string;
}
export default function SearchBox({ placeholder, placement }: SearchBoxProps) {
  const [selected, setSelected] = useState(people[0]);
  const [queryWord, setQueryWord] = useState("");
  const comboBoxInput = useRef<HTMLInputElement>(null);

  return (
    <Combobox
      as="div"
      className={"max-w-xs"}
      value={selected}
      onChange={setSelected}
    >
      {({ open }) => (
        <div
          className={clsx([
            "relative",

            {
              " rounded-3xl rounded-bl-none rounded-br-none border-b-white focus-within:border-b-white hover:border-b-white focus:border-b-white ":
                open,
              "max-w-xl rounded-3xl border bg-neutral-100 hover:border-blue-400 hover:bg-white dark:border-gray-900 dark:bg-neutral-800 dark:focus-within:border-gray-600 dark:focus-within:bg-neutral-900 dark:hover:border-gray-600 dark:hover:bg-neutral-900":
                placement === "navbar",
              "apply-bg  apply-border rounded-lg py-1 ring-white focus-within:ring-1 dark:ring-neutral-600":
                placement === "create-post",
            },
          ])}
        >
          {queryWord && (
            <IconBackspace
              onClick={() => setQueryWord("")}
              className="icon absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer "
            />
          )}
          <div
            className={`flex items-center ${
              placement === "navbar" ? "px-4" : "px-2"
            }`}
          >
            {placement === "navbar" ? (
              <IconSearch className="icon h-6 w-6  " />
            ) : (
              <RedditIcon />
            )}
            <Combobox.Input
              as="input"
              ref={comboBoxInput}
              className={
                "input w-full border border-none bg-transparent text-sm focus:ring-0"
              }
              placeholder={placeholder}
              onChange={(e) => {
                return;
              }}
            />
          </div>
          <Combobox.Options
            className={
              "absolute z-10 -mt-[0.10rem] max-h-96 w-full overflow-auto rounded-bl-md rounded-br-md border border-l-0 border-r-0 border-b-0 border-t-2 bg-white py-2 shadow-lg ring-1 ring-white dark:border-neutral-700 dark:bg-neutral-900 dark:ring-0"
            }
          >
            {placement === "create-post" ? (
              <>
                <div className="mb-1 flex  items-center justify-between px-3">
                  <h3 className="heading-text">Joined Communities</h3>
                  <button className="heading-text rounded-full p-1 px-2 text-secondary-800 hover:bg-neutral-200 dark:hover:bg-neutral-700">
                    Create
                  </button>
                </div>
                <div className="mb-1 flex flex-col">
                  {people.map((item) => {
                    return (
                      <Combobox.Option key={item.id} value={item.name}>
                        {({ active }) => {
                          return (
                            <SearchResult
                              avatar=""
                              name={item.name}
                              active={active}
                            />
                          );
                        }}
                      </Combobox.Option>
                    );
                  })}
                </div>
              </>
            ) : (
              ""
            )}
            <h3 className="heading-text mb-1 px-3">Other</h3>
            <div className="mb-1 flex flex-col">
              {people.map((item) => {
                return (
                  <Combobox.Option key={item.id} value={item.name}>
                    {({ active }) => {
                      return (
                        <SearchResult
                          avatar=""
                          name={item.name}
                          active={active}
                        />
                      );
                    }}
                  </Combobox.Option>
                );
              })}
            </div>
            {placement === "navbar" && (
              <>
                <hr className="border-t-2 dark:border-neutral-700" />
                <h3 className="heading-text mt-1 px-3">People</h3>
                <div className="flex flex-col">
                  {people.map((item) => {
                    return (
                      <Combobox.Option key={item.id} value={item.name}>
                        {({ active }) => {
                          return (
                            <SearchResult
                              avatar=""
                              name={item.name}
                              active={active}
                            />
                          );
                        }}
                      </Combobox.Option>
                    );
                  })}
                </div>
              </>
            )}
          </Combobox.Options>
        </div>
      )}
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
        <h4 className="heading-text">{`u/${name}`}</h4>
        <p className="heading-text text-[10px] text-gray-600">5 karma</p>
      </div>
    </div>
  );
}
