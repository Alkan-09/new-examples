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
        <div className="Events-side" >
        </div>
    )
}

export default Events;
