import { OptionBoxType } from "@/types/common";

const OptionBox = ({
  title,
  content,
  bg,
  titleFontSize,
  contentFontSize,
}: OptionBoxType) => {
  return (
    <div
      style={{ backgroundColor: `${bg}` }}
      className="w-20 h-12 flex flex-col justify-center items-center rounded-xl"
    >
      <div className={`text-${titleFontSize}`}>{title}</div>
      <div className={`text-${contentFontSize}`}>{content}</div>
    </div>
  );
};

export default OptionBox;
