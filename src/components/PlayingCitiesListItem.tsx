import clsx from "clsx";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

type PlayingCitiesListItemProps = {
  city: string;
  user: boolean;
};

const PlayingCitiesListItem: FC<PlayingCitiesListItemProps> = ({ city, user }) => {
  return (
    <div
      key={uuidv4()}
      className={clsx(
        user ? "bg-violet-50 text-gray-700" : "ml-auto bg-violet-500 text-white",
        "px-3 py-1.5 rounded-xl rounded-br-none w-fit"
      )}
    >
      {city}
    </div>
  );
};

export default PlayingCitiesListItem;
