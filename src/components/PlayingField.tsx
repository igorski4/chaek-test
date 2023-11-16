import { FC } from "react";
import PlayingCitiesList from "./PlayingCitiesList";
import PlayingCitiesListItem from "./PlayingCitiesListItem";

type PlayingFieldProps = {
  inputCities: string[];
};

const PlayingField: FC<PlayingFieldProps> = ({ inputCities }) => {
  return (
    <div className="h-80 flex flex-col w-full justify-between">
      {inputCities.length > 0 ? (
        <div className="overflow-y-auto px-4 py-5 scrollbar-hide">
          <>
            <PlayingCitiesList>
              {inputCities.map((el, i) => (
                <PlayingCitiesListItem user={Boolean(i % 2)} city={el} />
              ))}
            </PlayingCitiesList>
          </>
        </div>
      ) : (
        <p className="text-sm text-gray-400 leading-normal text-center my-auto">Первый участник вспоминает города...</p>
      )}

      {inputCities.length > 0 && (
        <p className="text-sm text-gray-400 leading-normal text-center px-6">
          Всего перечислено городов: {inputCities.length}
        </p>
      )}
    </div>
  );
};

export default PlayingField;
