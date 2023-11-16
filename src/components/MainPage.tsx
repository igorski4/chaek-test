import Header from "../layout/Header";

const MainPage = () => {
  return (
    <div className="w-full">
      <Header title="Игра в города на время" />
      <div className="p-6 flex flex-col gap-y-6">
        <p className="text-sm leading-normal text-zinc-700">Цель: Назвать как можно больше реальных городов.</p>
        <div>
          <ul className="text-sm leading-normal text-zinc-700 list-disc ps-[24px]">
            <li>Запрещается повторение городов.</li>
            <li>
              Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы пропускаем эту букву и игрок должен
              назвать город на букву стоящую перед ъ или ь знаком.
            </li>
            <li>
              Каждому игроку дается 2 минуты на размышления, если спустя это время игрок не вводит слово он считается
              проигравшим
            </li>
          </ul>
        </div>

        <button className="bg-violet-600 rounded px-4 py-2 w-fit text-white mx-auto">Начать игру</button>
      </div>
    </div>
  );
};

export default MainPage;
