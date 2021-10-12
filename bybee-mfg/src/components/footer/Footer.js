import { useHistory } from 'react-router';
import './Footer.css';

const Footer = () => {
    const history = useHistory();
    const followLink = (route) => history.push(route);
    const followExternalLink = (route) => window.open(route, '_blank');

    return (
        <div className="Footer">
            <div className="Footer-container">
                <div>
                    <p>
                        <a className="Footer-link" onClick={() => followLink('/')}>Home</a> | <a className="Footer-link" onClick={() => followLink('/services')}>Services</a> | <a className="Footer-link" onClick={() => followLink('/contact')}>Contact</a> | <a className="Footer-link" onClick={() => followLink('/quote')}>Quote</a>
                    </p>
                    <p><i className="fa fa-copyright" /> Copyright 2021 Bybee Mfg. <small>LLC</small></p>
                </div>
                <div className="Footer-right">
                    <h5>Bybee Mfg. <small>LLC</small></h5>
                    210 E 1000 S #4<br />
                    Brigham City, Utah 84302<br />
                    Line 1: (801) 589-1281<br />
                    Line 2: (801) 821-1197<br />
                    bybeemanufacturing@gmail.com
                </div>
            </div>
            <div className="Footer-tag">
                <small>
                    <svg className="Footer-svg" onClick={() => followExternalLink("https://jasonmcginty.surge.sh/")} version="1.0" xmlns="http://www.w3.org/2000/svg" width="40px" height="20px" fill="#dfa440" viewBox="0 0 11117.000000 6458.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,6458.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M24610 64573 c1 -5 1656 -2505 3680 -5558 l3678 -5550 5859 -5 5858 -5 0 -12875 c0 -13442 1 -13011 -40 -13750 -219 -3874 -1309 -7236 -3184 -9818 -802 -1105 -1751 -2068 -2834 -2875 -2286 -1705 -5183 -2685 -8517 -2882 -851 -50 -1937 -50 -2885 0 -3677 194 -6656 1105 -8930 2728 -517 369 -973 756 -1436 1217 -565 564 -1021 1118 -1468 1788 -1725 2584 -2595 6011 -2634 10367 l-2 230 -5879 3 -5879 2 7 -472 c36 -2515 269 -4721 727 -6898 642 -3049 1703 -5809 3179 -8270 2258 -3767 5477 -6750 9475 -8781 2531 -1285 5293 -2174 8340 -2683 3450 -577 7293 -641 10730 -180 3556 477 6800 1502 9696 3065 3664 1976 6709 4800 8961 8309 1294 2017 2335 4274 3072 6662 865 2801 1331 5723 1426 8933 6 210 10 7044 10 18818 l0 18487 -15505 0 c-8528 0 -15505 -3 -15505 -7z" />
                            <path d="M57810 54675 l0 -9815 9221 -12613 9221 -12612 1179 -3 1179 -2 10310 13747 10310 13746 0 -22552 c0 -14334 3 -22551 10 -22549 5 1 2691 1875 5969 4163 l5961 4160 0 27073 0 27072 -6828 0 -6828 0 -9900 -13606 c-5444 -7484 -9903 -13607 -9908 -13608 -5 -1 -4464 6121 -9908 13604 l-9899 13605 -44 3 -45 3 0 -9816z" />
                        </g>
                    </svg> Site developed by <a className="Footer-link-white" href="https://github.com/jmcginty15/" target="_blank" rel="noreferrer">Jason McGinty</a> using <a className="Footer-link-white" href="https://create-react-app.dev/" target="_blank" rel="noreferrer">create-react-app</a>.
                    Get in touch <a className="Footer-link-white" href="https://jasonmcginty.surge.sh/" target="_blank" rel="noreferrer">here</a> for all your small business web development needs.
                </small>
            </div>
        </div>
    )
}

export default Footer;