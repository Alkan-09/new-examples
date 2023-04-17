import '../App.css';

const HexadecimalColors = () => {
    const Numbers = ({ numbers }) => {
        const numberLists = numbers.map((num) => {
            let className = "";
            if (num % 2 === 0) {
                className = "create";
            } else {
                className = "random";
            }
            if (isPrime(num)) {
                className = "colors";
            }
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const bgColor = `rgb(${red}, ${green}, ${blue})`;
            const style = { backgroundColor: bgColor };
            return (
                <li key={num} className={className} style={style}>
                    {num}
                </li>
            );
        });
        return numberLists;
    };

    const numbers = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31,
    ];

    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    return (
        <div className="NumberGenerator-container">
            <div className="NumberGenerator-titles">
                <h1>30 Days of React</h1>
                <h3>Hexadecimal Colors</h3>
            </div>
            <div className="NumberGenerator-boxes">
                <ul>
                    <Numbers numbers={numbers} />
                </ul>
            </div>
        </div>
    );
};

export default HexadecimalColors;
