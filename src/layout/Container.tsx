import { FC, ReactNode } from "react";
import Layout from "./Layout";

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <Layout>
      <div className="bg-white max-w-xl w-full mx-auto rounded-2xl">{children}</div>
    </Layout>
  );
};

export default Container;
