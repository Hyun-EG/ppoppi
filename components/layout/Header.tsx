"use client";

import { useRouter } from "next/navigation";

const Header = () => {
  const navItems = [
    { nav: "홈", page: "/" },
    { nav: "날씨", page: "/weather" },
    { nav: "버스", page: "/bus" },
  ];
  const router = useRouter();
  return (
    <div className="w-full h-20 border-b border-[#afafaf]">
      <div className="h-10 flex justify-center items-center">PPOPPIS</div>
      <div className="h-10 px-2.5 flex justify-start items-center gap-2.5">
        {navItems.map((item, index) => (
          <div
            onClick={() => {
              router.push(item.page);
            }}
            className="cursor-pointer"
            key={index}
          >
            {item.nav}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
