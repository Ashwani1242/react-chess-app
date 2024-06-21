interface Props {
    number: number,
    horizontalAxis: string,
    verticalAxis: number,
}

export default function Tile({ number, horizontalAxis, verticalAxis } : Props) {
    if (number % 2 === 0) {
        return (<div className="w-[100px] h-[100px] hover:bg-white/50 bg-gray-600 text-white"> {horizontalAxis}{verticalAxis} </div>);
    } else {
        return (<div className="w-[100px] h-[100px] hover:bg-white/50 bg-white text-black"> {horizontalAxis}{verticalAxis} </div>);
    }
}