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
import play1 from "./assets/play-one.svg";
import play2 from "./assets/play-two.svg";
import play3 from "./assets/play-three.svg";
import play4 from "./assets/play-four.svg";
import comember1 from "./assets/co-member-one.svg";
import comember2 from "./assets/co-member-two.svg";
import support1 from "./assets/support-image.svg";
import user from "./assets/user.jpg";
import user1 from "./assets/user-1.jpg";
import user2 from "./assets/user-2.jpg";
import user3 from "./assets/user-3.jpg";
import user4 from "./assets/user-4.jpg";
import user5 from "./assets/user-5.jpg";
import wallet_coins from "./assets/wallet_coins.png";
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const headerRef = useRef(null);

  useEffect(() => {
    const footballImage = document.getElementById('football');
    let deg = 0, lastScrollTop = 0;
    const handleRotate = () => {
      footballImage.style.transform = `rotate(${deg}deg)`;
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        deg = deg + 3;
      } else if (st < lastScrollTop) {
        deg = deg - 3;
      }
      
      if (window.innerWidth < 575) {
        if (st > lastScrollTop)
          headerRef.current.style.transform = 'translateY(-100%)';
        else
          headerRef.current.style.transform = 'translateY(0%)';
      } else {
        headerRef.current.style.transform = 'translateY(0%)';
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }
    window.addEventListener("scroll", handleRotate);

    return () => {
      window.removeEventListener("scroll", handleRotate);
    }
  }, []);

  return (
    <>
      <main>
        <div className="header" ref={headerRef}>
          <header className='container'>
            <img className='logo' src={Logo} alt="logo" />
            <button className="btn md-none">Join The FC!</button>
          </header>
        </div>
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
            <img id='football' className='football' src={Football} alt="football" />
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
          <h2 className='heading2 text-white' style={{ marginBottom: '40px' }}>Play Fair <span className="text-green">Win Big</span></h2>
          <span className="btn m-auto">
            <button className="btn-border ">{`Here's how you do it`}</button>
          </span>
        </section>

        <section className="create-team image-desc container">
          <h1 className="heading2 text-white md-none">Create Your <span className="text-green">Team</span></h1>
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
            <h1 className="heading2 text-white sm-none">Create Your <span className="text-green">Team</span></h1>
            <p className="para">Create your dream starting 11 with a set budget and use power ups to boost your points.</p>
            <button className='btn'>Join the FC!</button>
          </div>
        </section>

        <section className='container game-rooms'>
          <div className="game-left-side">
            <div className="content-wrapper">
              <h1 className="heading text-white">Join The <span className="text-green">Game Rooms </span></h1>
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
                        <div className="user-cnt">+210</div>
                      </div>
                      <div className="heading">
                        <div className="title">Premiere League UK</div>
                        <div className="status">Status <span>Public</span></div>
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
                    <div className="closing-time">Entries Closing in <span>06:10:00</span></div>
                  </div>
                </div>
                <div className="sub-card">
                  <div className="sub-card-top">
                    <div className="left-area">
                      <div className="user-room-badge">
                        <div className="user-profile">
                          <img src={user2} alt="" className="user" />
                          <img src={user3} alt="" className="user user-2" />
                        </div>
                        <div className="user-cnt">+32</div>
                      </div>
                      <div className="heading">
                        <div className="title">Laliga 2 ESP</div>
                        <div className="status">Status <span>Private</span></div>
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
                    <div className="closing-time">Entries Closing in <span>04:01:40</span></div>
                  </div>
                </div>
                <div className="sub-card">
                  <div className="sub-card-top">
                    <div className="left-area">
                      <div className="user-room-badge">
                        <div className="user-profile">
                          <img src={user4} alt="" className="user" />
                          <img src={user5} alt="" className="user user-2" />
                        </div>
                        <div className="user-cnt">+32</div>
                      </div>
                      <div className="heading">
                        <div className="title">Vanarama National</div>
                        <div className="status">Status <span>Public</span></div>
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
                    <div className="closing-time">Entries Closing in <span>01:10:54</span></div>
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
                    <div className="closing-time"> <span>Rank:</span>#01</div>
                  </div>
                </div>
                <div className="sub-card version-2">
                  <div className="sub-card-top">
                    <div className="left-area">
                      <div className="walet-tran">
                        <img src={wallet_coins} alt="" className="user" />
                      </div>

                      <div className="heading">
                        <div className="title">€345</div>
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
                    <div className="closing-time"> <span>Rank:</span>#04</div>
                  </div>
                </div>
                <div className="sub-card version-2">
                  <div className="sub-card-top">
                    <div className="left-area">
                      <div className="walet-tran">
                        <img src={wallet_coins} alt="" className="user" />
                      </div>

                      <div className="heading">
                        <div className="title">€810</div>
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
                    <div className="closing-time"> <span>Rank:</span>#03</div>
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

        <section className='partner-with-us' id='partnerwithus'>
          <div className="partner-with-us-content">
            <div className='partner-heading'>
              <h2 className='heading2 text-white'><span className='text-green'>Partner </span> With Us</h2>
              <p className="form-sub-headiing">We are building the next generation of fantasy sports for the real fans. </p>
              <p className="form-title">
                Join us on this journey
              </p>
            </div>
            <form action="">
              <div className="row">
                <div className='col-6'>
                  <input className="form-field" type="text" name="firstname" id="fname" placeholder='First Name' />
                </div>
                <div className='col-6'>
                  <input className="form-field" type="text" name="lasrname" id="lname" placeholder='Last Name' />
                </div>
              </div>
              <div className="row">
                <div className='col-6'>
                  <input className="form-field" type="text" name="enquirytype" id="etype" placeholder='Enquiry type' />
                </div>
                <div className='col-6'>
                  <input className="form-field" type="email" name="email" id="email" placeholder='E-mail' />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <textarea className='form-field' name="message" id="message" cols="30" rows="10" placeholder='Your Message here...'></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type='submit' className='btn submit'>Submit</button>
                </div>
              </div>
            </form>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="55" viewBox="0 0 68 55">
                  <path d="M26.3642 37.641C26.3642 40.5364 24.82 45.2743 21.165 45.2743C17.51 45.2743 15.9658 40.5364 15.9658 37.641C15.9658 34.7456 17.51 30.0077 21.165 30.0077C24.82 30.0077 26.3642 34.7456 26.3642 37.641ZM68 30.645C68 35.0642 67.5467 39.7467 65.5208 43.8058C60.1517 54.4176 45.39 54.1683 34.8217 54.1683C24.0833 54.1683 8.44333 54.5423 2.86167 43.8058C0.793333 39.7883 0 35.0642 0 30.645C0 24.8403 1.96917 19.3543 5.87917 14.9074C5.1425 12.7185 4.78833 10.4188 4.78833 8.14683C4.78833 5.16832 5.4825 3.67214 6.85667 0.970703C13.2742 0.970703 17.3825 2.21752 22.27 5.95797C26.3783 5.00208 30.6 4.57262 34.8358 4.57262C38.6608 4.57262 42.5142 4.97437 46.2258 5.84715C51.0425 2.14825 55.1508 0.970703 61.4975 0.970703C62.8858 3.67214 63.5658 5.16832 63.5658 8.14683C63.5658 10.4188 63.1975 12.6769 62.475 14.8242C66.3708 19.3128 68 24.8403 68 30.645ZM58.8908 37.641C58.8908 31.5593 55.1083 26.198 48.4783 26.198C45.8008 26.198 43.2367 26.669 40.545 27.0292C38.4342 27.3478 36.3233 27.4725 34.1558 27.4725C32.0025 27.4725 29.8917 27.3478 27.7667 27.0292C25.1175 26.669 22.525 26.198 19.8333 26.198C13.2033 26.198 9.42083 31.5593 9.42083 37.641C9.42083 49.8044 20.8108 51.6746 30.7275 51.6746H37.5558C47.515 51.6746 58.8908 49.8182 58.8908 37.641ZM47.1892 30.0077C43.5342 30.0077 41.99 34.7456 41.99 37.641C41.99 40.5364 43.5342 45.2743 47.1892 45.2743C50.8442 45.2743 52.3883 40.5364 52.3883 37.641C52.3883 34.7456 50.8442 30.0077 47.1892 30.0077Z" fill="#968E8E" />
                </svg>
              </div>
              <div className='footer-icon-inner'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="58" viewBox="0 0 60 58">
                  <path d="M60 6.77783C57.7935 7.92319 55.4232 8.69708 52.9314 9.04689C55.5025 7.24462 57.4261 4.40806 58.3432 1.06648C55.9275 2.74735 53.2837 3.9305 50.5267 4.56449C48.6727 2.24548 46.217 0.708406 43.5409 0.191902C40.8648 -0.324602 38.1179 0.208363 35.7269 1.70805C33.3358 3.20774 31.4343 5.59024 30.3175 8.48567C29.2007 11.3811 28.9312 14.6274 29.5508 17.7207C24.6561 17.4328 19.8678 15.9424 15.4966 13.3463C11.1254 10.7503 7.26902 7.10646 4.17775 2.65142C3.12076 4.78737 2.51299 7.26383 2.51299 9.90127C2.51181 12.2756 3.01092 14.6135 3.96603 16.7076C4.92114 18.8017 6.30273 20.5873 7.9882 21.9059C6.0335 21.8331 4.12192 21.2143 2.41258 20.1012V20.2869C2.41238 23.617 3.39566 26.8445 5.19559 29.422C6.99551 31.9994 9.5012 33.768 12.2875 34.4275C10.4742 35.0024 8.57308 35.0871 6.72774 34.6752C7.51387 37.5405 9.04517 40.0461 11.1073 41.8412C13.1694 43.6363 15.6591 44.6311 18.2278 44.6863C13.8673 48.6963 8.48204 50.8715 2.93843 50.862C1.95644 50.8623 0.975274 50.7951 0 50.6607C5.62708 54.8991 12.1774 57.1485 18.8673 57.1398C41.5133 57.1398 53.8932 35.1674 53.8932 16.111C53.8932 15.4919 53.88 14.8666 53.8563 14.2475C56.2643 12.2074 58.3429 9.68116 59.9947 6.78711L60 6.77783Z" fill="#968E8E" />
                </svg>
              </div>
            </div>
            <div className='footer-copyright-text'>
              <p>Copyright © 2023 <span className='text-green'>Panenka FC.</span> All rights reserved</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
