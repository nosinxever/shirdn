//WishList.js
import WishCard from "./WishCard";
import AddWish from "./AddWish";

export default function PostList({ wishs }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishs.map(wish => <WishCard key={wish.id} wish={wish} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg" />)}
            </div>
        </div>
    );
}
