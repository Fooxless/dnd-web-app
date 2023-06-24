export default function Card({ monster: monster }: any | undefined) {
    function cardClicked() {
        console.log("Have been clicked");
    }

    return (
        <div>
            <div
                className="text-gray-700 transform bg-[#B7C2D4] w-80 transition duration-500 hover:scale-110 hover:bg-[#9DA8BA] flex justify-center items-center cursor-pointer"
                onClick={cardClicked}
            >
                <div className="max-w-sm overflow-hidden shadow-lg w-full ">
                    <div className="px-6 py-4">
                        <div className="font-bold mb-2">
                            <div className="text-xl"> {monster?.name} </div>
                            <p>{`${monster?.type.toUpperCase()}, ${monster?.alignment.toUpperCase()}`}</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="px-3 pb-4 font-bold flex items-center justify-around">
                        <p>CR : {monster?.challenge_rating}</p>
                        <p>HP: {monster?.hit_points}</p>
                        <p>AC: {monster?.armor_class}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
