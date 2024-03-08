import Image from "next/image";

interface Props {
  title: string;
  description: string;
  time: string;
  imageURL: string;
  name: string;
  position: string;
}

export default function EventCard({
  title,
  description,
  time,
  imageURL,
  name,
  position,
}: Props) {
  return (
    <div className="bg-white rounded-md w-full flex flex-row gap-x-2 p-4">
      <div className="w-1/4 select-none">{time}</div>
      <div className="flex h-full flex-col justify-between">
        <div className="mb-4">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className="inline-flex items-center">
          <Image
            src={imageURL}
            width={50}
            height={50}
            alt="profile"
            className="rounded-full mr-4"
          />
          <div className="flex flex-col items-start justify-start">
            <p className="font-bold">{name}</p>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
