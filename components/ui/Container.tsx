type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`mx-auto w-full max-w-[1320px] px-6 lg:px-10 ${className}`}>
      {children}
    </Component>
  );
}
