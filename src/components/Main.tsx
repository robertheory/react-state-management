import React from 'react';

interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Main = ({ children, ...rest }: MainProps) => {
  return (
    <main
      {...rest}
      className={`
        pt-20
        w-full
        min-h-screen
        max-h-screen
        flex
        flex-col
        justify-start
        items-center
        bg-zinc-200
        gap-4
        p-4
        overflow-y-scroll
        ${rest.className}
      `}
    >
      {children}
    </main>
  );
};

export default Main;
