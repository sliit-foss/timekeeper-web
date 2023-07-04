const Timekeeper = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 53 46">
      {/* here there is a border if it becomes (1)white "#FFFFFF" or (2)transparent "rgba(0, 0, 0, 0)" it will be invisible */}
      <path fill="rgba(0, 0, 0, 0)" d="M0 0H53V46H0z"></path>
      {/* You can only (3)remove the border lines. it becomes like comment line */}
      {/* <path fill="#1E1E1E" d="M0 0H0z"></path> */}
      {/* Also, if you want, you can (4)delete this line and nothing will happen*/}
      <g>
        <path fill="#fff" d="M0 0H1920V3465H0z" transform="translate(-420 -37)"></path>
        <g>
          <mask id="path-1-inside-1_426_33" fill="#fff">
            <path d="M-420-37h1920V83H-420V-37z"></path>
          </mask>
          <path fill="#fff" d="M-420-37h1920V83H-420V-37z"></path>
          <path
            fill="#000"
            fillOpacity="0.1"
            d="M-420 83.5h3v-1h-3v1zm9 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1H9v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h6v-1h-6v1zm12 0h3v-1h-3v1zM-420 84h3v-2h-3v2zm9 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2H9v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h6v-2h-6v2zm12 0h3v-2h-3v2z"
            mask="url(#path-1-inside-1_426_33)"
          ></path>
        </g>
        <g>
          <path
            fill="#0073E6"
            fillRule="evenodd"
            d="M45.914 9.77c1.65-.951 3.778-.393 4.535 1.354A29.8 29.8 0 0152.901 23c0 4.22-.875 8.236-2.452 11.876-.757 1.747-2.886 2.305-4.535 1.353L28.176 25.988c-2.3-1.328-2.3-4.648 0-5.976L45.914 9.771z"
            clipRule="evenodd"
          ></path>
          <path
            fill="url(#paint0_linear_426_33)"
            d="M0 23C0 10.297 10.297 0 23 0s23 10.297 23 23-10.297 23-23 23S0 35.703 0 23z"
          ></path>
          <path
            fill="url(#paint1_linear_426_33)"
            fillRule="evenodd"
            d="M11.5 23c0 6.351 5.149 11.5 11.5 11.5S34.5 29.351 34.5 23 29.351 11.5 23 11.5 11.5 16.649 11.5 23zM23 5.75C13.473 5.75 5.75 13.473 5.75 23c0 9.527 7.723 17.25 17.25 17.25 9.527 0 17.25-7.723 17.25-17.25 0-9.527-7.723-17.25-17.25-17.25z"
            clipRule="evenodd"
            style={{ mixBlendMode: "hard-light" }}
          ></path>
          <path
            fill="url(#paint2_linear_426_33)"
            fillRule="evenodd"
            d="M42.922 11.498A22.894 22.894 0 0146.002 23c0 4.19-1.12 8.118-3.078 11.502l-14.747-8.514c-2.3-1.328-2.3-4.648 0-5.976l14.747-8.514z"
            clipRule="evenodd"
          ></path>
        </g>
        <g fill="#000">
          <mask id="path-7-outside-2_426_33" width="1162" height="3463" x="-41" y="-37" maskUnits="userSpaceOnUse">
            <path fill="#fff" d="M-41 -37H1121V3426H-41z"></path>
            <path d="M-40-37h1160v3463H-40V-37z"></path>
          </mask>
          <path
            fillOpacity="0.1"
            d="M1119-37v3463h2V-37h-2zM-39 3426V-37h-2v3463h2z"
            mask="url(#path-7-outside-2_426_33)"
          ></path>
        </g>
      </g>
      <defs>
        <linearGradient id="paint0_linear_426_33" x1="42.55" x2="17.25" y1="23" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#11EFE3"></stop>
          <stop offset="0.33" stopColor="#15E8E2"></stop>
          <stop offset="0.74" stopColor="#1FD3E0"></stop>
          <stop offset="1" stopColor="#21CFE0"></stop>
        </linearGradient>
        <linearGradient id="paint1_linear_426_33" x1="5.75" x2="40.25" y1="23" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00299C"></stop>
          <stop offset="1" stopColor="#0073E6"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_426_33"
          x1="26.451"
          x2="53.476"
          y1="23"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00299C"></stop>
          <stop offset="1" stopColor="#0073E6"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Timekeeper;
