//WishList.js
import WishCard from "./WishCard";
import AddWish from "./AddWish";

export default function WishList({ wishs }) {
    const backgroundStyle = {
        backgroundColor: '#ffffff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='3.3'%3E%3Cpath transform='translate(-121.45 15.999999999999998) rotate(6.85 1409 581) scale(0.994157)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='1.1' transform='translate(-113.5 82) rotate(14.100000000000001 800 450) scale(1.0206899999999999)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(40.2 -151.5) rotate(130.5 401 736) scale(1.0206899999999999)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='1'%3E%3Cpath transform='translate(492 -11.799999999999999) rotate(2.9499999999999997 150 345) scale(0.9587189999999999)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='2.2' transform='translate(-212.5 -215.5) rotate(144 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-374.4 113.6) rotate(24 1400 132) scale(0.895)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
    };

    return (
        <div style={backgroundStyle} className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishs.map(wish => <WishCard key={wish.id} wish={wish} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg" />)}
            </div>
        </div>
    );
}
