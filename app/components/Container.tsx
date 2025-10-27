"use client";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
      {children}
    </div>
  );
}
