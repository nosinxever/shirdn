//MoodCard.js
import { HeartIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { convertTimeFormat } from "@/lib/utils";


const MoodPost = ({mood}) => {
  const cardClasses = "mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-4 w-full md:w-96";

  return (
    <div className={cardClasses}>
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <img className="w-12 h-12 rounded-full" src="/Shirdn-18.jpg" alt="User avatar" />
          <div>
            <div className="font-bold">Shirdn</div>
            <div className="text-sm text-gray-500">@shirdn</div>
          </div>
        </div>
        <div className="text-sm text-gray-500">{convertTimeFormat(mood.createdTime)}</div>
      </div>
      <div className="mt-2">
        <p className="text-gray-700 dark:text-gray-400">{mood.title}</p>
      </div>
      <div className="flex justify-end items-center mt-4">
        <div className="flex items-center">
          <button className="flex mr-2 text-gray-400 hover:text-red-600 transition-colors">
            <HeartIcon className="w-6 h-6" />
          </button>
          <button className="flex items-center ml-5 text-gray-400 hover:text-blue-600 transition-colors">
            <ChatBubbleOvalLeftIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodPost;
