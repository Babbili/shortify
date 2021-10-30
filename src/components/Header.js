import React, { useRef, useEffect } from 'react'

function Header() {


    const navBtn = useRef()
    const navBtnUp = useRef()
    const navBtnBottom = useRef()
    const navMenu = useRef()
    const Sun = useRef()
    const Moon = useRef()
    const themeBtn = useRef()

    function navBtnClick() {
        navMenu.current.classList.toggle('show__menu')
        navBtnUp.current.classList.toggle('toggle_up')
        navBtnBottom.current.classList.toggle('toggle_bottom')
    }


    let darkTheme = 'dark__theme'
    let hideIcon = 'hide'
    let selectedTheme = localStorage.getItem('selected-theme')
    let selectedIcon = localStorage.getItem('selected-icon')
    const getCurrentTheme = () => (document.body.classList.contains(darkTheme)) ? 'dark__theme' : null
    const getCurrentIcon = () => (document.body.classList.contains(darkTheme)) ? null : 'hide'

    useEffect(() => {
        if (selectedTheme === 'dark__theme') {
            document.body.classList.add(darkTheme)
            Moon.current.classList.add(hideIcon)
            Sun.current.classList.remove(hideIcon)
        } else {
            document.body.classList.remove(darkTheme)
            Moon.current.classList.remove(hideIcon)
            Sun.current.classList.add(hideIcon)
        }
    }, [])


    function themeBtnClick() {
        Moon.current.classList.toggle(hideIcon)
        Sun.current.classList.toggle(hideIcon)
        document.body.classList.toggle(darkTheme)
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    }

    return (
        <header className="header bd-container">
            <nav className="bd-container">
                <a className="logo" href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="445.37781"
                        height="445.57339"
                        viewBox="0 0 445.37781 445.57339">
                        <g
                            transform="translate(-13.346495,-15.689479)">
                            <g>
                                <path
                                    id="path849"
                                    fill="var(--primary-color-a)"
                                    d="M 265.0293,161.5 252.44141,174 c -20.34398,20.2012 -24.68436,34.3962 -13.56446,44.36523 27.01296,24.21721 34.03802,49.85132 21.18555,77.31641 -6.9631,14.87982 -69.91184,78.63639 -85.0625,86.1543 -65.00771,32.25748 -119.220452,-47.87239 -68.28516,-100.92969 13.71794,-14.28943 14.11714,-15.37231 10.2793,-27.90625 -2.97969,-9.73133 -4.76932,-19.2095 -6.04102,-31.98438 -1.82731,-18.35619 -9.392,-25.50639 -20.751948,-19.61523 C 86.197161,203.47683 49.286035,241.31861 42.796875,250 20.272996,280.13311 11.786668,322.62055 21.027344,359 33.632256,408.62404 76.093695,447.64648 126,455.47266 183.61495,464.50769 226.33099,440.47912 300.375,357.38281 351.53007,299.97375 343.88035,214.37618 283.3418,166.80078 276.96297,161.78785 276.28092,161.5 270.8125,161.5 Z" />
                                <path
                                    display="inline" fill="var(--primary-color-b)"
                                    d="m 197.5,315.27672 c -3.38496,-0.83148 -16.31257,-11.2983 -23.84489,-19.30598 C 135.94534,255.88113 127.32805,196.95894 152.06814,148.36616 172.03577,109.14712 248.70381,38.383152 284,26.594152 393.93975,-10.125956 493.45475,106.71228 439.70147,209.39959 c -10.02077,19.14313 -52.71194,65.43145 -61.90798,67.12435 -9.99706,1.84035 -14.53166,-4.10076 -16.44364,-21.544 -0.80078,-7.30566 -3.03689,-19.39794 -4.96912,-26.87175 -4.64399,-17.96273 -4.78627,-17.4419 8.62319,-31.56768 54.00949,-56.89463 -14.40187,-144.884017 -75.81681,-97.514137 -8.94114,6.896367 -71.10918,70.461517 -74.50123,76.175487 -14.79101,24.91575 -9.80156,58.49904 11.47263,77.22069 9.53955,8.39496 10.80893,9.80001 11.66948,12.91665 2.90297,10.51368 -1.90239,20.70166 -17.15897,36.37926 -13.11917,13.4812 -16.18321,15.27425 -23.16902,13.55826 z"
                                    id="path847" />
                            </g>
                        </g>
                    </svg>
                    <h2>Shortify</h2>
                </a>
                <div className="nav__menu" ref={navMenu}>
                    <ul className="nav__menu__items">
                        <li className="nav__item"><a className="nav__link" href="">Features</a></li>
                        <li className="nav__item"><a className="nav__link" href="">Pricing</a></li>
                        <li className="nav__item"><a className="nav__link" href="">Resources</a></li>
                        <li className="theme__button" id="theme__button" ref={themeBtn} onClick={() => themeBtnClick()}>
                            <svg className="moon" id="moon" ref={Moon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
                            </svg>
                            <svg className="sun hide" id="sun" ref={Sun} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                            </svg>
                        </li>
                    </ul>
                    <ul className="nav__menu__login">
                        <li className="nav__login__item"><a className="nav__link" href="">Login</a></li>
                        <li className="nav__login__item" id="sign__up"><a className="nav__link" id="button" href="">Sign<span className="space">Up</span></a></li>
                    </ul>
                </div>
                <div className="nav__btn" id="nav__btn" ref={navBtn} onClick={() => navBtnClick()}>
                    <div className="nav__btn_up" id="nav__btn_up" ref={navBtnUp}></div>
                    <div className="nav__btn_bottom" id="nav__btn_bottom" ref={navBtnBottom}></div>
                </div>
            </nav>
        </header>
    )
}
export default Header