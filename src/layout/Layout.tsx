import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="h-screen bg-gray-200 flex justify-center items-center px-4">{children}</div>;
};

export default Layout;
