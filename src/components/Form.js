import React, { useEffect, useState } from 'react'

function Form() {

    let shortCode = 'https://api.shrtco.de/v2/shorten?url='
    const [linkValue, setLinkValue] = useState('')
    const [resultLink, setResultLink] = useState('')
    const [loading, setLoading] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [copied, setCopied] = useState(false)

    function changeLinkValue(e) {
        setLinkValue(e.target.value)
        setShowResult(true)
    }

    function shortenLink(e) {
        e.preventDefault()
        setLoading(true)
        let link = linkValue.toString()
        fetch(shortCode + link)
            .then(res => {
                return res.json()
            })
            .then(result => {
                let data = JSON.stringify(result)
                let dataP = JSON.parse(data)
                setResultLink(dataP.result.full_short_link)
                console.log(dataP.result.full_short_link)
            })
            .catch(err => console.error(err))
    }

    function copyLink() {
        window.navigator.clipboard.writeText(resultLink)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3500)
    }

    useEffect(() => {
        if(linkValue != '') {
            setShowResult(true)
        }
    }, [])

    return (
        <section className="shorten" id="shorten">
            <form className="shorten__form" onSubmit={(e) => shortenLink(e)}>
                <input className="shorten__form__input" value={linkValue} onChange={(e) => changeLinkValue(e)} placeholder="Shorten a link here .." />
                <button type="submit" className="shorten__button">Shortify</button>
            </form>

            <div className={`shorten__result__${showResult}`}>
                <p>{linkValue}</p>
                <div className="shorten__result__link">
                    { loading && !resultLink ?
                    <p>Shortifying ... </p>
                    :
                    <p>{resultLink}</p>
                    }
                    <svg
                        onClick={() => copyLink()}
                        xmlns="http://www.w3.org/2000/svg"
                        width="391.24753"
                        height="445.37579"
                        viewBox="0 0 391.24753 445.37579">
                        <g
                            transform="translate(-5.8620898,-3.7596182)">
                            <g>
                                <path
                                    fill="var(--primary-color-a)"
                                    d="m 23.145159,443.93005 c -4.459798,-1.78626 -8.195875,-5.10865 -10.417798,-9.26426 L 10.5,430.5 10.232013,271.07314 C 9.8883436,66.622406 3.6686644,89.700826 59.25,89.189535 L 93,88.879069 V 217.89031 c 0,90.32252 0.3314,130.60041 1.105084,134.31047 2.690615,12.90234 12.977386,26.76689 24.006146,32.35559 C 128.92486,390.03605 128.32126,390 209.26521,390 h 74.84501 l -0.30511,21.40988 -0.30511,21.40988 -3.09506,3.84012 c -1.70229,2.11206 -4.85229,4.84522 -7,6.07367 L 269.5,444.9671 147.5,444.9202 C 73.516622,444.8917 24.573185,444.50201 23.145159,443.93005 Z m 107.753381,-83.7144 c -4.32058,-2.25709 -5.85933,-3.79789 -8.12598,-8.13674 l -2.79613,-5.35241 0.26179,-162.77726 0.26178,-162.777256 3.00915,-4.281349 c 1.72378,-2.452548 4.92744,-5.259599 7.5,-6.571499 L 135.5,8.0289866 229.17088,7.9478978 c 85.88702,-0.07435 93.94752,0.058706 97,1.6011966 4.41038,2.2286706 62.00818,59.6455036 64.77894,64.5754126 l 2.15979,3.842823 -0.0809,135.01976 c -0.0447,74.57446 -0.47283,136.05073 -0.95643,137.3227 -1.50323,3.95378 -6.31884,8.89725 -10.53095,10.81055 -3.84844,1.7481 -9.80023,1.83678 -124.67718,1.8577 L 136.22838,363 Z"
                                    id="path849" />
                                <path
                                    fill="var(--primary-color-b)"
                                    d="M 24.029883,443.88741 C 19.449915,442.05956 14.793851,437.7576 12.913116,433.61609 10.269369,427.79438 9.9173416,108.52693 12.547728,102.23153 17.372808,90.683486 19.801988,90.048416 59.25,90.021962 L 92,90 92.0076,216.75 c 0.009,150.48481 -0.531775,144.50839 14.42865,159.46881 14.69142,14.69142 15.05354,14.74267 104.3138,14.76383 L 284,391 l -0.022,18.75 c -0.0278,23.70179 -1.82802,28.55298 -12.37302,33.34184 -4.71311,2.14039 -242.292525,2.90385 -247.575137,0.79557 z M 312,48.379809 V 7.7596182 l 5.91914,0.4281517 c 8.26551,0.5978736 9.33453,1.4736448 42.79311,35.0573621 C 391.29751,73.944797 393,76.118412 393,84.467881 V 89 H 352.5 312 Z"
                                    id="path847" />
                            </g>
                        </g>
                    </svg>
                    <p className={`copied__${copied}`}>copied!</p>
                </div>
            </div>
        </section>
    )
}
export default Form