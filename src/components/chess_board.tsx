const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]

export default function ChessBoard() {

    let board = []

    for (let i = 0; i < horizontalAxis.length; i++) {
        for (let j = verticalAxis.length - 1; j >= 0; j--) {
            const number = i + j + 2;

            if (number % 2 === 0) {
                board.push(<div className="w-[100px] h-[100px] hover:bg-white/50 bg-gray-600 text-white"> {horizontalAxis[i]}{verticalAxis[j]} </div>);
            } else {
                board.push(<div className="w-[100px] h-[100px] hover:bg-white/50 bg-white text-black"> {horizontalAxis[i]}{verticalAxis[j]} </div>);
            }

        }
    }

    return (
        <div id="board" className="w-[800px] h-[800px] grid grid-cols-8 grid-rows-8">
            {board}
        </div>
    )
}