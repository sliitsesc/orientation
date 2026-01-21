import { DM_Sans } from "next/font/google";
import React from "react";

const dm_Sans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export type PillVariant = "outline" | "filled" | "dark";

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: PillVariant;
  className?: string;
}

export default function Pill({
  children,
  variant = "outline",
  className = "",
  ...rest
}: PillProps) {
  if (variant === "filled") {
    // Blue gradient filled pill - "13 February"
    return (
      <div
        className={`${dm_Sans.className} inline-flex items-center justify-center rounded-full 
          bg-gradient-to-r from-[#214EF4] to-[#CFD3F3] text-black 
          px-6 py-2.5 shadow-[0_4px_20px_rgba(33,78,244,0.35)] font-[600] text-[16px]
          border-[4px] border-[#FFFFFF] ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }

  if (variant === "dark") {
    // Dark fill with gradient border - "F1401"
    return (
      <div
        className={`${dm_Sans.className} inline-flex items-center justify-center rounded-full 
          bg-gradient-to-r from-[#20231F] to-[#2F53D8] text-[#FDFDFD] 
          px-6 py-2.5 shadow-[0_0_20px_rgba(47,83,216,0.4)] font-[700] text-[16px]
          border-[4px] border-[#FFFFFF] ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }

  // outline variant - white fill with gradient border - "1 PM - 4 PM"
  return (
    <div
      className={`${dm_Sans.className} inline-flex items-center justify-center rounded-full 
        bg-white text-black 
        px-6 py-2.5 shadow-[0_0_20px_rgba(40,83,244,0.4)] font-[700] text-[16px]
        border-[4px] border-[#2853F4] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
