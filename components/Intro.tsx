import Image from "next/image";
import ProfilePic from "@/app/images/oramatel.png";

export default function Intro() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
      <div className="flex flex-col gap-2 w-full lg:w-4/5">
        <h1 className="text-4xl font-bold mb-4">Hello! I&apos;m David.</h1>
        <p className="text-base text-gray-800 dark:text-gray-300">
          With over 20 years of experience, I am an accomplished, reliable, and dedicated Network and Technology Solutions Engineer.
          My track record is defined by consistently delivering secure and resilient systems that align with business objectives, on time and within budget.
          TBC
        </p>
      </div>
      <div className="flex items-center justify-center md:mb-0">
        <Image
          src={ProfilePic}
          alt="David"
          width={160}
          height={160}
          className="border-2 border-gray-100 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
