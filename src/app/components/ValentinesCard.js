// components/ValentinesCard.js
export default function ValentinesCard() {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-100 m-4 p-4">
        <img className="w-full" src="/valentines-day.jpg" alt="Valentine's Day" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-pink-700">Happy Valentine's Day!</div>
          <p className="text-gray-700 text-base">
            Wishing you a day filled with love and happiness! 💖
          </p>
        </div>
      </div>
    );
  }
  