import EventCard from "@/components/EventCard";
import Pill from "@/components/Pill";
import { AgendaData } from "@/data/AgendaData";
import { DM_Sans, Kumbh_Sans } from "next/font/google";
import Image from "next/image";
import AgendaIcon from "/public/agenda-title.svg";
import CirclenStar from "/public/circle-and-star.png";

const dm_Sans = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const kumbhSans = Kumbh_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="relative bg-[#20231F] sm:pt-10 min-h-screen">
      <div className=" overflow-hidden relative max-w-[500px] sm:max-w-[540px] mx-auto pb-10 px-4 sm:px-8 bg-[#20231F] sm:border-[1px] border-gray-800 sm:rounded-lg sm:shadow-2xl pt-10 sm:pt-10">
        <Image
          src={CirclenStar}
          alt="Asterisk icon"
          width={480}
          height={480}
          className="absolute -top-[60px] sm:-top-[100px] -right-[60px] sm:-right-[100px] w-[300px] sm:w-[400px] z-0"
        />
        <div className="text-left relative z-10">
          <h1 className={`${kumbhSans.className} text-[44px] sm:text-[52px] leading-[1.15] tracking-normal text-[#FDFDFD] font-[500] mb-3`}>
            Software<br />Engineering<br /><span className="font-[800]">Inauguration</span>
          </h1>

          <div className={`${dm_Sans.className}`}>
            <p className="flex flex-col items-start space-y-2 mb-4 text-[#FDFDFD] leading-0 text-[23px] font-[400]">
              Event Outline
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row flex-wrap gap-3">
                <Pill variant="outline">
                  1 PM – 4 PM
                </Pill>
                <Pill variant="filled">
                  13 February
                </Pill>
              </div>
              <div className="flex flex-row flex-wrap gap-3 w-full">
                <Pill variant="dark">
                  F1401
                </Pill>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${dm_Sans.className} flex flex-row justify-center mt-6 mb-6`}></div>

        <Image
          src="/righthalf.png"
          alt="Right background accent"
          width={800}
          height={800}
          className="pointer-events-none select-none absolute top-[38%] right-[-300px] -translate-y-1/2 w-[800px] h-[800px] opacity-70"
          priority
        />

        <Image
          src="/righthalf.png"
          alt="Left background accent"
          width={800}
          height={800}
          className="pointer-events-none select-none absolute top-[72%] left-[-300px] -translate-y-1/2 w-[800px] h-[800px] opacity-70 scale-x-[-1]"
          priority
        />

        <div className="relative z-10 flex flex-col gap-y-4">
          {AgendaData.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              time={event.time}
              imageURL={event.imageURL}
              name={event.name}
              position={event.position}
              index={index}
              isLast={index === AgendaData.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Footer: white strip only under the agenda width */}
      <div className="bg-[#20231F]">
        <div className="max-w-[500px] sm:max-w-[540px] mx-auto px-0">
          <div className="bg-white w-full py-6 flex flex-row items-center justify-center shadow-sm">
            <Image src={"/logo/sesc-logo.svg"} width={80} height={80} alt="" />
            <div className="w-[1px] h-10 bg-black ml-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
