import Image from "next/image";
import { DM_Sans } from "next/font/google";
const dm_Sans = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

interface Props {
  title: string;
  time: string;
  description?: string;
  imageURL?: string;
  name?: string;
  position?: string;
  index: number;
  isLast?: boolean;
}

export default function EventCard({
  title,
  description,
  time,
  imageURL,
  name,
  position,
  index,
  isLast,
}: Props) {
  return (
    <div
      className={`text-[#FDFDFD] ${
        !isLast && "border-b-[1px]"
      } border-[#EDEDED] w-full flex flex-row pt-2 pb-6 px-1`}>
      <div
        className={`${dm_Sans.className} text-[20px] w-[100px] flex-shrink-0 mr-4 font-[400] -mt-[2px]`}>
        {time}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <h2
            className={`${dm_Sans.className} text-[20px] font-[600] leading-tight tracking-tight`}>
            {title}
          </h2>
          <p className={`${dm_Sans.className} text-sm text-gray-400`}>{description}</p>
        </div>
        <div className="flex items-center">
          {imageURL && (
            <div
              className={`overflow-clip relative min-w-[114px] w-[114px] h-[114px] rounded-full 
                bg-gradient-to-r from-[#4591FF] to-[#D4E4FA]
                border-[4px] border-[#1a1d24]
                shadow-[0_0_20px_rgba(69,145,255,0.4)]`}>
              <Image
                src={imageURL}
                width={114}
                height={114}
                alt="profile"
                className="object-cover w-full h-full rounded-full grayscale brightness-105"
              />
            </div>
          )}
          <div className="ml-4 flex flex-col">
            <p className={`${dm_Sans.className} text-[17px] font-[500]`}>
              {name}
            </p>
            <p
              className={`${dm_Sans.className} text-[14px] font-[300] text-gray-400 -mt-[1px]`}>
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
