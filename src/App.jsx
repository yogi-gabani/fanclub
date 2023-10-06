import './App.css';
import Logo from "./assets/Logo.png";
import Banner from "./assets/main_back_Img.png";
import Football from "./assets/football.png";
import Hero1 from "./assets/Team01.png";
import Hero2 from "./assets/Team02.png";
import Hero3 from "./assets/Team03.png";
import Hero4 from "./assets/Team04.png";
import Hero5 from "./assets/Team05.png";
import Hero6 from "./assets/Team06.png";
import play1 from "./assets/play-one.svg";
import play2 from "./assets/play-two.svg";
import play3 from "./assets/play-three.svg";
import play4 from "./assets/play-four.svg";
import comember1 from "./assets/co-member-one.svg";
import comember2 from "./assets/co-member-two.svg";
import support1 from "./assets/support-image.svg";
import footericon1 from "./assets/footer-icon-1.svg";
import footericon2 from "./assets/footer-icon-2.svg";
import footericon3 from "./assets/footer-icon-3.svg";
import footericon4 from "./assets/footer-icon-4.svg";
import footericon5 from "./assets/footer-icon-5.svg";
import footericon6 from "./assets/footer-icon-6.svg";
import user from "./assets/user.jpg";
import user1 from "./assets/user-1.jpg";
import wallet_coins from "./assets/wallet_coins.png"

function App() {

  return (
    <>
      <main>
        <header className='container'>
          <img className='logo' src={Logo} alt="logo" />
          <button className="btn md-none">Join The FC!</button>
        </header>
        <section className="banner container">
          <div className="title-wrapper">
            <div className="blur-bg"></div>
            <h1 className="heading text-white">Welcome to the <span className="text-green">Fan Club</span></h1>
            <p className="para sm-none">The most immersive, fun and fair fantasy football experience</p>
            <button className='btn sm-none'>
              Know More
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M15.1667 14.0001H23.3334L14 23.3334L4.66669 14.0001H12.8334V4.66675H15.1667V14.0001Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className="image-wrapper">
            <img className='banner-background' src={Banner} alt="banner" />
          </div>
          <div className="title-wrapper md-none">
            <p className="para">The most immersive, fun and fair fantasy football experience</p>
            <button className='btn knowmore'>
              Know More
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M15.1667 14.0001H23.3334L14 23.3334L4.66669 14.0001H12.8334V4.66675H15.1667V14.0001Z" fill="white" />
              </svg>
            </button>
          </div>
        </section>

        <section className="play-section">
          <h2 className='heading2 text-white' style={{ marginBottom: '40px' }}>Play Fair <span className="text-green">Win Big</span></h2>
          <span className="btn m-auto">
            <button className="btn-border ">{`Here's how you do it`}</button>
          </span>
        </section>

        <section className="create-team image-desc container">
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

        <section className='container game-rooms'>
          <div className="game-left-side">
            <div className="content-wrapper">
              <h1 className="heading text-white">Join The<span className="text-green">Game Rooms </span></h1>
              <p className="sub-heading">Create your dream starting 11 with a set budget and use power ups to boost your points.</p>
              <button className='btn'>Join the FC!</button>
            </div>
          </div>
          <div className="game-right-side">
            <div className="game-card">
              <div className="card-heading-area">
                <div className="card-heading">
                  On-Going Leagues
                </div>
                <div className="card-sub-heading">
                  Matchday 09
                </div>
              </div>
              <div className="card-sub-card-area">
                <div className="sub-card">
                  <div className="sub-card-top">
                  <div className="left-area">
                    <div className="user-room-badge">
                      <div className="user-profile">
                        <img src={user} alt="" className="user" />
                        <img src={user1} alt="" className="user user-2" />
                      </div>
                      <div className="user-cnt">+32</div>
                    </div>
                    <div className="heading">
                      <div className="title">Premiere League UK</div>
                      <div className="status">Status <span>public</span></div>
                    </div>
                  </div>
                  <div className="right-area">
                    <span className="btn-second">
                      <button type="button" className='btn-border'> Join Room </button>
                    </span>
                  </div>
                  </div>
                  <div className="saprator"></div>
                  <div className="sub-card-bottom">
                  <div className="status">Status <span>public</span></div>
                    <div className="closing-time">Entries Closing in <span>00:00:00</span></div>
                  </div>
                </div>
                <div className="sub-card">
                  <div className="sub-card-top">
                  <div className="left-area">
                    <div className="user-room-badge">
                      <div className="user-profile">
                        <img src={user} alt="" className="user" />
                        <img src={user1} alt="" className="user user-2" />
                      </div>
                      <div className="user-cnt">+32</div>
                    </div>
                    <div className="heading">
                      <div className="title">Premiere League UK</div>
                      <div className="status">Status <span>public</span></div>
                    </div>
                  </div>
                  <div className="right-area">
                    <span className="btn-second">
                      <button type="button" className='btn-border'> Join Room </button>
                    </span>
                  </div>
                  </div>
                  <div className="saprator"></div>
                  <div className="sub-card-bottom">
                    <div className="closing-time">Entries Closing in <span>00:00:00</span></div>
                  </div>
                </div>
                <div className="sub-card">
                  <div className="sub-card-top">
                  <div className="left-area">
                    <div className="user-room-badge">
                      <div className="user-profile">
                        <img src={user} alt="" className="user" />
                        <img src={user1} alt="" className="user user-2" />
                      </div>
                      <div className="user-cnt">+32</div>
                    </div>
                    <div className="heading">
                      <div className="title">Premiere League UK</div>
                      <div className="status">Status <span>public</span></div>
                    </div>
                  </div>
                  <div className="right-area">
                    <span className="btn-second">
                      <button type="button" className='btn-border'> Join Room </button>
                    </span>
                  </div>
                  </div>
                  <div className="saprator"></div>
                  <div className="sub-card-bottom">
                    <div className="closing-time">Entries Closing in <span>00:00:00</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<div className="section-seprater"></div>
        <section className='container game-rooms game-reverse'>
          <div className="game-left-side">
            <div className="game-card">
              <div className="card-heading-area">
                <div className="card-heading">
                Wallet
                </div>
                <div className="card-sub-heading">
                My Rewards
                </div>
              </div>
              <div className="card-sub-card-area">
                <div className="sub-card version-2">
                  <div className="sub-card-top">
                  <div className="left-area">
                    <div className="walet-tran">
                    <img src={wallet_coins} alt="" className="user" />
                      </div>
                    
                    <div className="heading">
                      <div className="title">€630</div>
                      <div className="status"><span>Price Pool</span> </div>
                    </div>
                  </div>
                  <div className="right-area">
                    <span className="btn-second">
                      <button type="button" className='btn-border'> Withdrawal</button>
                    </span>
                  </div>
                  </div>
                  <div className="saprator"></div>
                  <div className="sub-card-bottom">
                    <div className="closing-time"> <span>Rank:</span>#1</div>
                  </div>
                </div>
                <div className="sub-card version-2">
                  <div className="sub-card-top">
                  <div className="left-area">
                    <div className="walet-tran">
                    <img src={wallet_coins} alt="" className="user" />
                      </div>
                    
                    <div className="heading">
                      <div className="title">€630</div>
                      <div className="status"><span>Price Pool</span> </div>
                    </div>
                  </div>
                  <div className="right-area">
                    <span className="btn-second">
                      <button type="button" className='btn-border'> Withdrawal</button>
                    </span>
                  </div>
                  </div>
                  <div className="saprator"></div>
                  <div className="sub-card-bottom">
                    <div className="closing-time"> <span>Rank:</span>#1</div>
                  </div>
                </div>
                <div className="sub-card version-2">
                  <div className="sub-card-top">
                  <div className="left-area">
                    <div className="walet-tran">
                    <img src={wallet_coins} alt="" className="user" />
                      </div>
                    
                    <div className="heading">
                      <div className="title">€630</div>
                      <div className="status"><span>Price Pool</span> </div>
                    </div>
                  </div>
                  <div className="right-area">
                    <span className="btn-second">
                      <button type="button" className='btn-border'> Withdrawal</button>
                    </span>
                  </div>
                  </div>
                  <div className="saprator"></div>
                  <div className="sub-card-bottom">
                    <div className="closing-time"> <span>Rank:</span>#1</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="game-right-side">
          <div className="content-wrapper">
              <h1 className="heading text-white"><span className="text-green">Win </span> & <span className="text-green">Cash </span> Out</h1>
              <p className="sub-heading">Accumulate maximum points and win from the price pool.Rewards are available to cash out immediately.</p>
              <button className='btn'>Join the FC!</button>
            </div>
          </div>
        </section>
        <div className="section-seprater"></div>



        <section>
          <div className='main-play-area'>
            <h2 className='heading2 text-white'>Where <span className='text-green'>Fans</span> Play</h2>
            <div className='fans-play-area container'>
              <div className='play-inner-area play-one'>
                <div className="fans-play-img">
                  <img src={play1} alt="play-area-image-one" />
                </div>
                <div className='fans-play-content'>
                  <span>Immutably stored and automatically enforced game rules</span>
                </div>
              </div>
              <div className='play-inner-area play-three'>
                <div className='fans-play-img'>
                  <img src={play3} alt="play-area-image-three" />
                </div>
                <div className='fans-play-content'>
                  <span>Rewards in e-money or stable coin</span>
                </div>
              </div>
              <div className='play-inner-area play-two'>
                <div className="fans-play-img">
                  <img src={play2} alt="play-area-image-two" />
                </div>
                <div className='fans-play-content'>
                  <span>Smooth, secure and industry leading user experience</span>
                </div>
              </div>
              <div className='play-inner-area play-four'>
                <div className='fans-play-img'>
                  <img src={play4} alt="play-area-image-four" />
                </div>
                <div className='fans-play-content'>
                  <span>Lives on the blockchain for transparent & verifiable operation</span>
                </div>
              </div>
            </div>
            <button className='btn'>Join the FC!</button>
          </div>
        </section>

        <section>
          <div className='meet-team-section'>
            <h2 className='heading2 text-white'>Meet The <span className='text-green'>Team</span></h2>
            <div className='main-team-area container'>
              <div className='co-member-one'>
                <div className='co-member-img'>
                  <img src={comember1} alt="play-area-image-four" />
                </div>
                <div className='co-member-info'>
                  <h3>Navneet Singhrol</h3>
                  <span>Co-Founder, CEO</span>
                  <p>4 years as Product Manager in edtech, Web3 & DeFi space; 3rd time founder; MBA Sports Management,
                    MMSE, BA, LLB</p>
                </div>
              </div>
              <div className='co-member-one'>
                <div className='co-member-img'>
                  <img src={comember2} alt="play-area-image-four" />
                </div>
                <div className='co-member-info'>
                  <h3>Jerry Chiboukem</h3>
                  <span>Co-Founder, CTO</span>
                  <p>5 years of software engineering experience across edtech, social commerce and fintech product development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='support-main-section container'>
            <h2 className='heading2 text-green'>Supported <span className='text-white'>By</span></h2>
            <div className='support-image-area'>
              <img src={support1} alt="support-area-img" />
            </div>
          </div>
        </section>

        <section>
          <div className='fantacy-sport-section container'>
            <h2 className='text-white'>The next generation of <span className='text-green'>fantasy sports</span></h2>
            <div className='fantacy-sport-btn'>
              <button className='btn'>Join the FC!</button>
            </div>
          </div>
        </section>

        <section>
          <div className='footer-main-section container'>
            <div className='footer-logo'>
              <img className='logo' src={Logo} alt="logo" />
            </div>
            <div className='footer-icon-list'>
              <div className='footer-icon-inner'>
                <img src={footericon1} alt="footer-icon-img" />
              </div>
              <div className='footer-icon-inner'>
                <img src={footericon2} alt="footer-icon-img" />
              </div>
              <div className='footer-icon-inner'>
                <img src={footericon3} alt="footer-icon-img" />
              </div>
              <div className='footer-icon-inner'>
                <img src={footericon4} alt="footer-icon-img" />
              </div>
              <div className='footer-icon-inner'>
                <img src={footericon5} alt="footer-icon-img" />
              </div>
              <div className='footer-icon-inner'>
                <img src={footericon6} alt="footer-icon-img" />
              </div>
            </div>
            <div className='footer-copyright-text'>
              <p>Copyright © 2023 <span className='text-green'>Panenka FC.</span> All rights reserved</p>
            </div>
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
