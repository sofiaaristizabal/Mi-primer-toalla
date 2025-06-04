
import React, { useState } from 'react';
import { IdentificationGameData, IdentificationItem } from '../../types';

interface PadIdentificationGameProps {
  gameData: IdentificationGameData;
}

const PadIdentificationGame: React.FC<PadIdentificationGameProps> = ({ gameData }) => {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [selectedItemByUser, setSelectedItemByUser] = useState<IdentificationItem | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const currentRound = gameData.rounds[currentRoundIndex];

  const handleItemSelect = (item: IdentificationItem) => {
    if (selectedItemByUser) return; // Prevent re-selection if already answered

    setSelectedItemByUser(item);
    const correctItemName = currentRound.items.find(i => i.isCorrect)?.name || "la toallita correcta";
    //const correctImage = currentRound.items.find(i => i.isCorrect)?.imageUrl || "la toallita correcta";

    if (item.isCorrect) {
      setFeedback(`¡Genial! 🎉 ¡Esa es ${item.name}!`);
    } else {
      setFeedback(`¡Buen ojo! Estuviste cerca. La toallita en esta ronda es "${correctItemName}" que esta señalada en verde. ¡Sigamos aprendiendo!`);
    }
  };

  const handleNextRound = () => {
    setSelectedItemByUser(null);
    setFeedback(null);
    if (currentRoundIndex < gameData.rounds.length - 1) {
      setCurrentRoundIndex(currentRoundIndex + 1);
    } else {
      setShowResults(true); // All rounds completed
    }
  };
  
  const handleRestartGame = () => {
    setCurrentRoundIndex(0);
    setSelectedItemByUser(null);
    setFeedback(null);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="bg-white/70 p-6 rounded-lg shadow-md mt-10 text-center backdrop-blur-sm border border-pink-200">
        <h3 className="text-2xl font-['Fredoka_One'] text-pink-600 mb-4">¡Juego Terminado!</h3>
        <p className="text-lg text-rose-700 mb-4">
          ¡Esperamos que te hayas divertido identificando las toallitas! Sigue explorando para aprender más. 💖
        </p>
        <button
          onClick={handleRestartGame}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-150 ease-in-out font-['Fredoka_One']"
        >
          Jugar de Nuevo
        </button>
      </div>
    );
  }

  if (!currentRound) {
    return <p>Cargando juego de identificación...</p>;
  }

  return (
    <div className="bg-white/70 p-6 md:p-8 rounded-lg shadow-xl mt-10 backdrop-blur-md border border-pink-200">
      <h3 className="text-3xl font-['Fredoka_One'] text-pink-600 mb-6 text-center">{gameData.title}</h3>
      <div className="mb-6 p-4 bg-rose-50 rounded-lg shadow">
        <p className="text-xl font-semibold text-rose-700 mb-1 text-center">
            Ronda {currentRoundIndex + 1} de {gameData.rounds.length}
        </p>
        <p className="text-lg text-rose-600 text-center">{currentRound.prompt}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {currentRound.items.map((item) => {
          const isThisItemSelected = selectedItemByUser?.id === item.id;
          const isThisItemCorrect = item.isCorrect;
          
          let itemClass = `p-4 rounded-lg shadow-sm transition-all duration-150 ease-in-out flex flex-col items-center justify-center h-48 md:h-56 `;

          if (selectedItemByUser) { // An item has been selected
            if (isThisItemCorrect) { // This is the correct item
              itemClass += 'bg-green-400 text-white scale-105 ring-2 ring-green-300 ';
            } else if (isThisItemSelected && !isThisItemCorrect) { // This is the item selected by user, and it's incorrect
              itemClass += 'bg-yellow-300 text-yellow-800 scale-105 ring-2 ring-yellow-200 ';
            } else { // This is neither selected nor correct (if something else was selected)
              itemClass += 'bg-gray-200 text-gray-500 opacity-70 cursor-not-allowed ';
            }
          } else { // No item selected yet
            itemClass += 'bg-pink-100 hover:bg-pink-200 text-pink-700 focus:ring-2 focus:ring-pink-400 cursor-pointer ';
          }

          return (
            <button
              key={item.id}
              onClick={() => handleItemSelect(item)}
              disabled={!!selectedItemByUser}
              aria-label={`Seleccionar ${item.name}`}
              className={itemClass}
            >
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-contain mb-2 rounded" />
              ) : (
                <span className="text-4xl mb-2" role="img" aria-label="item icon placeholder">🧸</span>
              )}
            </button>
          );
        })}
      </div>

      {feedback && (
        <div className={`p-3 mb-6 rounded-md text-center font-semibold ${selectedItemByUser?.isCorrect ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>
          {feedback}
        </div>
      )}

      {selectedItemByUser && (
         <div className="text-center">
            <button
            onClick={handleNextRound}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-150 ease-in-out font-['Fredoka_One'] text-lg"
            >
            {currentRoundIndex < gameData.rounds.length - 1 ? 'Siguiente Ronda' : 'Terminar Juego'}
            </button>
        </div>
      )}
    </div>
  );
};

export default PadIdentificationGame;
