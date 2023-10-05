import './App.css';
import Logo from "./assets/Logo.png";
import Banner from "./assets/banner_background.png";
import Football from "./assets/football.png";
import Hero1 from "./assets/Team01.png";
import Hero2 from "./assets/Team02.png";
import Hero3 from "./assets/Team03.png";
import Hero4 from "./assets/Team04.png";
import Hero5 from "./assets/Team05.png";
import Hero6 from "./assets/Team06.png";

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

        <section className="create-team image-desc">
          <div className="banner-wrapper">
            <div className="hero-card">
              <img src={Hero1} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>BRUNO GUIMARAES</h4>
                <span className='text-white'>MIDFIELDER</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
            <div className="hero-card">
              <img src={Hero2} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>MARCO REUS</h4>
                <span className='text-white'>FORWARD</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
            <div className="hero-card">
              <img src={Hero3} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>ENZO</h4>
                <span className='text-white'>MIDFIELDER</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
            <div className="hero-card">
              <img src={Hero4} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>ERLING HAALAND</h4>
                <span className='text-white'>FORWARD</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
            <div className="hero-card">
              <img src={Hero5} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>WILLIAM SALIBA</h4>
                <span className='text-white'>DEFENDER</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
            <div className="hero-card">
              <img src={Hero6} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>ALISSON</h4>
                <span className='text-white'>GOATKEEPER</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
          </div>
          <div className="title-wrapper">
            <h1 className="heading2 text-white">Create Your <span className="text-green">Team</span></h1>
            <p className="para">Create your dream starting 11 with a set budget and use power ups to boost your points.</p>
            <button className='btn'>Join the FC!</button>
          </div>
        </section>
        
        {/* <section className="create-team image-desc">
          <div className="banner-wrapper">
            <h5 className='text-white'>On-going Leagues</h5>
            <span className='text-green'>Matchday 09</span>
            <div className="card-wrapper">

            </div>
            <div className="card">
              <img src={Hero1} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>BRUNO GUIMARAES</h4>
                <span className='text-white'>MIDFIELDER</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
            <div className="hero-card">
              <img src={Hero2} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>MARCO REUS</h4>
                <span className='text-white'>FORWARD</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
            <div className="hero-card">
              <img src={Hero3} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>ENZO</h4>
                <span className='text-white'>MIDFIELDER</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
            <div className="hero-card">
              <img src={Hero4} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>ERLING HAALAND</h4>
                <span className='text-white'>FORWARD</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
            <div className="hero-card">
              <img src={Hero5} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>WILLIAM SALIBA</h4>
                <span className='text-white'>DEFENDER</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
            <div className="hero-card">
              <img src={Hero6} alt="hero-image" />
              <div className="card-title">
                <h4 className='text-white'>ALISSON</h4>
                <span className='text-white'>GOATKEEPER</span>
                <button className='text-white btn-yellow'>Select</button>
              </div>
            </div>
          </div>
          <div className="title-wrapper">
            <h1 className="heading2 text-white">Join The <span className="text-green">Game Rooms</span></h1>
            <p className="para m-0">Join hundreds of public ‘leagues’ with different rules and price pools, </p>
            <p className="para">or create your own private game-room.</p>
            <button className='btn'>Join the FC!</button>
          </div>
        </section> */}
      </main>
    </>
  )
}

export default App
