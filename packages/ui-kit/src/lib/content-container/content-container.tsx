import { ReactNode } from 'react';
/* eslint-disable-next-line */
export interface StandardContentContainerProps {
  children: ReactNode;
  container?: boolean;
}

export function StandardContentContainer(props: StandardContentContainerProps) {
  const { children, container } = props;
  if (container) return <div className="container mx-auto">{children}</div>;
  return (
    <section className="w-full flex flex-col items-start relative grow">
      {children}
    </section>
  );
}

export default StandardContentContainer;
