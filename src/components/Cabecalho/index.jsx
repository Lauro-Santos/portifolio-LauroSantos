import style from "./Cabecalho.module.scss";
import linkedin from "assets/icons/linkedin.svg";
import github from "assets/icons/github.svg";
import file from "assets/icons/arquivo.svg";
import Hbilidades from "components/Habilidades";

const Cabecalho = () => {
  return (
    <header className={style.cabecalho}>
      <nav className={style.navbar}>
        <a href="/" target="_blank">
          <svg viewBox="0 0 505 505" fill="none">
            <path d="M505 38.5416V467.55C504.238 468.922 503.596 470.357 503.082 471.84C500.502 481.953 494.213 490.727 485.463 496.42C479.395 499.787 473.064 502.656 466.533 505H37.4344C36.2059 504.293 34.9229 503.686 33.5977 503.183C23.6952 500.512 14.9881 494.569 8.89284 486.321C2.79762 478.074 -0.327057 468.007 0.0271095 457.759C0.128074 320.88 0.178556 184.102 0.178556 47.4246C0.344495 40.0328 2.06451 32.7587 5.22677 26.0751C13.7078 7.90536 29.2058 0.0822604 48.9443 0.0822604H456.588C464.256 -0.383147 471.916 1.13204 478.83 4.4821C485.743 7.83216 491.679 12.9044 496.065 19.211C499.618 25.373 502.609 31.8427 505 38.5416ZM277.83 216.706L276.871 216.252C276.871 210.852 276.871 205.451 276.871 200C277.097 198.067 276.889 196.108 276.261 194.266C275.634 192.424 274.603 190.745 273.243 189.352C271.884 187.96 270.231 186.888 268.404 186.215C266.578 185.542 264.624 185.286 262.686 185.464H209.225C198.674 185.464 193.778 190.209 193.778 200.606V433.785C193.778 444.434 198.472 448.926 208.922 448.926H261.272C272.53 448.926 277.073 444.333 277.073 433.078C277.073 393.306 277.073 353.552 277.073 313.814C276.874 300.466 280.015 287.28 286.21 275.455C295.348 258.194 310.088 251.33 329.12 253.197C336.675 253.512 343.929 256.241 349.817 260.983C355.705 265.725 359.917 272.231 361.833 279.543C364.894 289.584 366.592 299.99 366.881 310.482C367.386 351.667 366.881 392.903 366.881 434.138C366.881 444.232 371.576 448.876 381.672 448.876C400.216 448.876 418.726 448.876 437.202 448.876C446.996 448.876 451.741 444.131 451.741 434.39C451.741 390.53 451.741 346.671 451.741 302.811C452.327 279.778 448.665 256.835 440.938 235.128C430.387 208.177 411.558 190.562 382.934 184.152C366.321 180.633 349.192 180.291 332.452 183.143C313.334 185.502 295.802 194.96 283.333 209.64C281.566 212.063 279.799 214.435 277.83 216.706ZM73.2262 317.195C73.2262 355.823 73.2262 394.417 73.2262 432.977C73.2262 444.182 78.2744 449.178 89.431 449.178H140.166C151.575 449.178 156.32 444.434 156.32 432.977C156.32 355.823 156.32 278.652 156.32 201.464C156.32 190.411 151.272 185.515 140.418 185.464H89.9358C77.7191 185.464 72.9738 190.209 72.9738 202.423C73.1084 240.68 73.1926 278.938 73.2262 317.195ZM115.025 163.055C125.652 163.015 136.027 159.821 144.835 153.879C153.644 147.937 160.49 139.514 164.505 129.677C168.52 119.841 169.524 109.034 167.39 98.6267C165.255 88.2193 160.078 78.6797 152.515 71.2172C144.952 63.7547 135.342 58.7052 124.906 56.7087C114.469 54.7122 103.674 55.8586 93.8893 60.0026C84.1048 64.1467 75.7712 71.1017 69.9447 79.9863C64.1182 88.8709 61.0611 99.2849 61.161 109.908C61.3206 124.077 67.0693 137.609 77.1564 147.562C87.2436 157.514 100.853 163.083 115.025 163.055Z" />
          </svg>
        </a>
        <a href="/" target="_blank">
          <svg viewBox="0 0 505 505" fill="none">
            <path d="M470.356 0.000331362H34.7945C30.2281 -0.0196373 25.7029 0.863098 21.479 2.59777C17.2551 4.33243 13.4159 6.88481 10.1823 10.1081C6.94869 13.3314 4.3844 17.1619 2.63694 21.3795C0.889487 25.597 -0.00666296 30.1184 3.72957e-05 34.6834V83.3003V84.108V421.094V421.851V469.509C3.72957e-05 478.694 3.64991 487.503 10.1467 493.998C16.6435 500.493 25.4551 504.142 34.643 504.142H82.2644L83.5774 504.748H179.275L180.487 504.142C183.8 502.475 186.505 499.808 188.217 496.519C189.93 493.23 190.565 489.485 190.031 485.816C189.627 470.065 189.728 454.313 189.627 438.562C189.627 436.795 189.627 435.028 189.627 433.816C178.366 434.17 167.407 435.078 156.55 434.675C139.784 434.018 123.775 430.383 112.615 416.45C109.237 411.259 106.217 405.845 103.575 400.244C98.8788 392.217 94.4349 383.988 89.0314 376.466C85.6229 372.696 81.8129 369.311 77.6689 366.369C74.443 363.979 71.4197 361.328 68.6294 358.443C65.7509 354.808 66.4579 353.394 71.1039 351.981C78.8993 350.435 86.9911 351.819 93.8289 355.868C104.453 361.511 113.22 370.101 119.079 380.605C122.304 386.636 126.849 391.86 132.375 395.89C137.901 399.92 144.266 402.651 150.995 403.879C163.545 405.898 176.412 404.141 187.961 398.83C188.644 398.467 189.245 397.965 189.723 397.357C190.201 396.748 190.547 396.047 190.738 395.296C192.367 383.504 197.833 372.576 206.292 364.198C201.242 363.491 197.354 362.784 193.314 362.229C171.926 359.674 151.441 352.116 133.522 340.167C116.411 328.189 104.072 310.563 98.6769 290.389C90.6354 265.799 89.19 239.53 94.4854 214.207C97.8127 199.642 104.76 186.151 114.685 174.981C115.568 174.165 116.17 173.09 116.406 171.912C116.642 170.733 116.499 169.51 115.998 168.418C108.777 147.769 111.251 127.474 118.624 107.382C120.089 103.343 123.674 103.999 126.401 104.504C133.993 105.593 141.444 107.506 148.621 110.209C161.196 115.762 173.114 122.628 185.436 128.686C187.79 129.929 190.489 130.355 193.112 129.898C231.551 120.111 271.832 120.111 310.271 129.898C311.816 130.354 313.446 130.446 315.032 130.166C316.618 129.885 318.117 129.241 319.412 128.282C334.477 118.019 351.104 110.261 368.649 105.312C368.8 105.29 368.953 105.29 369.104 105.312C382.183 102.333 384.254 103.747 388.041 116.519C393.571 133.825 393.465 152.438 387.738 169.68C387.584 170.48 387.604 171.305 387.795 172.097C387.987 172.89 388.346 173.632 388.849 174.274C409.605 198.052 414.806 226.021 411.928 256.463C410.58 271.332 407.181 285.943 401.828 299.88C392.586 323.759 375.164 339.41 352.489 350.113C336.903 357.025 320.318 361.421 303.353 363.138C302.09 363.138 300.777 363.491 299.515 363.743C298.938 363.951 298.394 364.24 297.899 364.602C312.14 378.435 314.311 396.104 314.261 414.531C314.261 437.653 314.261 460.826 314.261 483.948C314.261 486.724 314.261 489.501 314.665 492.278C314.452 495.113 315.349 497.92 317.168 500.105C318.987 502.291 321.584 503.684 324.411 503.99L325.421 504.394L326.532 505H420.563L423.139 504.394H470.356C474.927 504.394 479.452 503.49 483.672 501.734C487.892 499.978 491.722 497.404 494.942 494.161C498.162 490.919 500.709 487.071 502.435 482.84C504.161 478.609 505.032 474.078 504.999 469.509V34.6834C505.006 30.1311 504.115 25.6222 502.377 21.4146C500.639 17.2069 498.088 13.3831 494.87 10.1618C491.653 6.94054 487.831 4.38501 483.625 2.6414C479.419 0.897795 474.91 0.000326526 470.356 0.000331362Z" />
          </svg>
        </a>
        <a href="/" target="_blank">
          <svg viewBox="0 0 505 505" fill="none">
            <path d="M84.1667 0C-5.01672e-06 0 0 0 0 80.4981V424.502C0 505 0 505 84.1667 505H420.833C505 505 505 505 505 424.502V150.221H336.667C313.389 150.221 294.583 132.234 294.583 109.972V0H84.1667ZM336.667 0V109.972H505L336.667 0ZM143.083 223.257H353.5C365.073 223.257 374.542 232.313 374.542 243.381C374.542 254.45 365.073 263.506 353.5 263.506H143.083C131.51 263.506 122.042 254.45 122.042 243.381C122.042 232.313 131.51 223.257 143.083 223.257ZM143.083 303.755H353.5C365.073 303.755 374.542 312.811 374.542 323.879C374.542 334.948 365.073 344.004 353.5 344.004H143.083C131.51 344.004 122.042 334.948 122.042 323.879C122.042 312.811 131.51 303.755 143.083 303.755ZM143.083 384.253H353.5C365.073 384.253 374.542 393.309 374.542 404.377C374.542 415.446 365.073 424.502 353.5 424.502H143.083C131.51 424.502 122.042 415.446 122.042 404.377C122.042 393.309 131.51 384.253 143.083 384.253Z" />
          </svg>
        </a>
      </nav>
      <div className={style.texto__cabecalho}>
        <h1>
          <span>Oi, eu sou o Lauro,</span>
          <span> Front end</span>
          <span> Developer</span>
        </h1>
        <p>Tenho 24 anos e sou desenvolvedor front-end com foco em React.</p>
      </div>

      <Hbilidades />
    </header>
  );
};

export default Cabecalho;
