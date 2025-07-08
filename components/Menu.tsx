"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/#about" },
  { id: 3, title: "Menu", url: "/menu" },
  { id: 4, title: "Contact Us", url: "#contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open ? (
        <Image
          src="/menu.png"
          alt="main-menu"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => {
            setOpen(false);
          }}
          className="cursor-pointer"
        />
      )}

      {open && (
        <div className="absolute left-0 top-[5.5rem] h-[calc(100vh-5.5rem)] w-full flex flex-col items-center justify-center gap-8 bg-black text-white">
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => {
                setOpen(false);
              }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
