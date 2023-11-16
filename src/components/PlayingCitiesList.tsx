import { FC, ReactNode } from "react";

type PlayingCitiesListProps = {
  children: ReactNode;
};

const PlayingCitiesList: FC<PlayingCitiesListProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-2">{children}</div>;
};

export default PlayingCitiesList;
