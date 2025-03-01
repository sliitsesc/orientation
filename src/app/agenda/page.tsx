import EventCard from "@/components/EventCard";
import { AgendaData } from "@/data/AgendaData";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import AgendaIcon from "/public/agenda-title.svg";
import AsteriskArt from "/public/Asterisk 4.png";

const dm_Sans = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="relative bg-white sm:pt-10">
      <div className=" overflow-clip relative max-w-[500px] sm:max-w-[540px] mx-auto pb-10 px-4 sm:px-8 bg-white sm:border-[1px] border-gray-100 sm:rounded-lg sm:shadow-xl pt-10 sm:pt-10">
        <Image
          src={AsteriskArt}
          alt="Asterisk icon"
          width={200}
          height={200}
          className="absolute -top-[70px] sm:-top-[110px] -right-[75px] sm:-right-[110px] w-[200px] sm:w-[340px] animate-spin"
        />
        <div className={`${dm_Sans.className} text-left bg-white`}>
          <Image
            src={AgendaIcon}
            alt="Agenda"
            className="w-[200px] sm:w-[250px] mb-3 transition-all duration-300 ease-in-out"
          />

          <div className={`${dm_Sans.className}`}>
            <p className="flex flex-col items-start space-y-2 mb-3 text-black leading-0 text-[25px] font-[400]">
              Event Outline
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row flex-wrap gap-2">
                <div className="px-3 py-1 border-2 border-black-background rounded-full bg-white text-black font-[500]">
                  1 PM – 4 PM
                </div>
                <div className="px-3 py-1 border-2 border-black-background rounded-full bg-gradient-to-r from-[#4591FF] to-[#D4E4FA] text-black font-[500]">
                  13 February
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-2 w-full">
                <div className=" px-3 py-1 border-2 border-black-background rounded-full bg-gradient-to-r from-[#FFDD00] to-[#F6F9C1] text-black font-[500]">
                  Main Auditorium
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${dm_Sans.className} flex flex-row justify-center mt-6 mb-6`}></div>

        <div className="flex flex-col gap-y-4">
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

      {/* <div className="relative bg-[#13131391]"></div> */}
      <div className=" bg-white">
        <div className="max-w-[500px] py-5 mx-auto flex flex-row items-center justify-center px-[150px] ">
          <Image
            src={"/logo/fcsc-logo.svg"}
            width={80}
            height={80}
            alt=""
            className="mr-4"
          />
          <Image src={"/logo/sesc-logo.svg"} width={80} height={80} alt="" />
          <div className="w-[1px] h-10 bg-black"></div>
        </div>
      </div>
    </main>
  );
}
