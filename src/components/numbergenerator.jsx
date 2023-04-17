import '../App.css';

const NumberGenerator = () => {

    const Numbers = ({ numbers }) => {
        const list = numbers.map((num) => {
            let className = "";
            if (num % 2 === 0) {
                className = "even";
            } else {
                className = "odd";
            }
            if (isPrime(num)) {
                className = "prime";
            }
            return <li key={num} className={className}>{num}</li>;
        });
        return list;
    };

    const numbers = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31
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
                <h3>Number Generator</h3>
            </div>
            <div className="NumberGenerator-boxes">
                <ul>
                    <Numbers numbers={numbers} />
                </ul>
            </div>
        </div>
    );
};

export default NumberGenerator;
