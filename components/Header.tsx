"use client";

const Header = () => {
  const navItems = [{ nav: "홈" }, { nav: "날씨" }];
  return (
    <div className="w-full h-20 border-b border-[#afafaf]">
      <div className="h-10 flex justify-center items-center">PPOPPI</div>
      <div className="h-10 px-2.5 flex justify-start items-center gap-2.5">
        {navItems.map((item, index) => (
          <div className="cursor-pointer" key={index}>
            {item.nav}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
