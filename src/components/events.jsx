import '../App.css';

const Events = () => {

    const handleClick = (e) => {
        alert("Yeap, you have clicked. Keep going for events.")
        console.log(e)
    }

    const mouseMove = (e) => {
        alert("Your mouse is moving!")
        console.log(e)
    }

    const handleKey = (e) => {
        alert(`You pressed ${e.charCode}`)
        console.log(e)
    }

    const textBlur = (e) => {
        console.log(e)
    }

    const mouseEnter = (e) => {
        let element = document.body;
        element.classList.toggle("hahah");
        console.log(e)
    }

    return (
        <div className="Events-side">
            <button onClick={handleClick}>Click for Alert</button>
            <button onMouseMove={mouseMove}>Mouse here</button>
            <input type="text" onKeyPress={handleKey} />
            <input placeholder="Can you see here ?_?" type="text" onBlur={textBlur} />
            <button onMouseEnter={mouseEnter}>Click me :D</button>
        </div>
    )
}

export default Events;
