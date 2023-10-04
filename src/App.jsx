import './App.css';
import Logo from "./assets/Logo.png";
import Banner from "./assets/banner_background.png";
import Football from "./assets/football.png";

function App() {

  return (
    <>
      <main>
        <header>
          <img className='logo' src={Logo} alt="logo" />
          <button className="btn md-none">Join The FC!</button>
        </header>
        <section className="banner">
          <div className="title-wrapper">
            <div className="blur-bg"></div>
            <h1 className="heading text-white">Welcome to the <span className="text-green">Fan Club</span></h1>
            <p className="para sm-none">The most immersive, fun and fair fantasy football experience</p>
            <button className='btn sm-none'>
              Know More 
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M15.1667 14.0001H23.3334L14 23.3334L4.66669 14.0001H12.8334V4.66675H15.1667V14.0001Z" fill="white"/>
              </svg>
            </button>
          </div>
          <div className="image-wrapper">
            <img className='football' src={Football} alt="football" />
            <img className='banner-background' src={Banner} alt="banner" />
          </div>
          <div className="title-wrapper md-none">
            <p className="para">The most immersive, fun and fair fantasy football experience</p>
            <button className='btn knowmore'>
              Know More 
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M15.1667 14.0001H23.3334L14 23.3334L4.66669 14.0001H12.8334V4.66675H15.1667V14.0001Z" fill="white"/>
              </svg>
            </button>
          </div>
        </section>

        <section className="play-section">
          <h2 className='heading2 text-white' style={{ marginBottom: '40px'}}>Play Fair <span className="text-green">Win Big</span></h2>
          <span className="btn m-auto">
            <button className="btn-border ">{`Here's how you do it`}</button>
          </span>
        </section>
      </main>
    </>
  )
}

export default App
