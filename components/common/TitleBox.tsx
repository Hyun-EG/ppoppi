import { TitleBoxType } from "@/types/common";

const TitleBox = ({ children }: TitleBoxType) => {
  return (
    <div className="w-full flex justify-center items center py-2.5">
      <span className="font-bold text-2xl">{children}</span>
    </div>
  );
};

export default TitleBox;
