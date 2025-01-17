import { ReactNode } from "react";

export const HeadTypography = ({ children }: { children: ReactNode }) => (
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black dark:text-white text-balance">
    {children}
  </h1>
);

export const TypographyH1 = ({ children }: { children: ReactNode }) => (
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl dark:text-white">
    {children}
  </h1>
);
export const TypographyH2 = ({ children }: { children: ReactNode }) => (
  <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 dark:text-white">
    {children}
  </h1>
);
export const TypographyH3 = ({ children }: { children: ReactNode }) => (
  <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight dark:text-white">
    {children}
  </h1>
);
export const TypographyH4 = ({ children }: { children: ReactNode }) => (
  <h1 className="scroll-m-20 text-xl font-semibold tracking-tight dark:text-white">
    {children}
  </h1>
);

export const TypographyP = ({ children }: { children: ReactNode }) => (
  <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-500 dark:text-gray-400">
    {children}
  </p>
);

export const TypographyLarge = ({ children }: { children: ReactNode }) => (
  <p className="text-lg font-semibold text-black dark:text-white">{children}</p>
);

export const TypographyMuted = ({ children }: { children: ReactNode }) => (
  <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>
);
