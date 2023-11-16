import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="h-screen flex justify-center items-center max-w-xl mx-auto">{children}</div>;
};

export default Layout;
