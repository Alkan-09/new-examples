import '../App.css';

const Subscribe = () => {
  return (
    <div>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <input className='inputs' type="text" placeholder='First name'></input>
      <input className='inputs' type="text" placeholder='Last name'></input>
      <input className='inputs' type="text" placeholder='email'></input>
      <div>
        <button className='Button' type="button">Subscribe</button>
      </div>
    </div>
  )
}

export default Subscribe;