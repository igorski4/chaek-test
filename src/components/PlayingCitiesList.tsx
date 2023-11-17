import { FC, ReactNode, useRef, useEffect } from "react";

type PlayingCitiesListProps = {
  children: ReactNode;
  inputCities: string[];
};

const PlayingCitiesList: FC<PlayingCitiesListProps> = ({ children, inputCities }) => {
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    listRef.current?.scrollIntoView(false);
  };

  useEffect(() => {
    scrollToBottom();
  }, [inputCities]);

  return (
    <div className="flex flex-col gap-y-2" ref={listRef}>
      {children}
    </div>
  );
};

export default PlayingCitiesList;
