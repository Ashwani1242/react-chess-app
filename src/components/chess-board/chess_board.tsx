import Tile from "../tiles/tile";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]

export default function ChessBoard() {

    let board = []

    for (let i = verticalAxis.length - 1; i >= 0; i--) {
        for (let j = 0; j < horizontalAxis.length; j++) {
            const number = i + j + 2;
            board.push(<Tile number={number} horizontalAxis={horizontalAxis[j]} verticalAxis={verticalAxis[i]} />);
        }
    }

    return (
        <div id="board" className="w-[800px] h-[800px] grid grid-cols-8 grid-rows-8">
            {board}
        </div>
    )
}




// if (number % 2 === 0) {
//     board.push(<div className="w-[100px] h-[100px] hover:bg-white/50 bg-black text-white"> {horizontalAxis[i]}{verticalAxis[j]} </div>);
// } else {
//     board.push(<div className="w-[100px] h-[100px] hover:bg-white/50 bg-white text-black"> {horizontalAxis[i]}{verticalAxis[j]} </div>);
// }
