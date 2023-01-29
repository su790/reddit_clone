import React from "react";

function GridLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" grid grid-cols-3  gap-8 lg:place-items-stretch">
      {children}
    </div>
  );
}

export default GridLayout;
