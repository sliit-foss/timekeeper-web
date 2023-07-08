const TimekeeperAnim = ({ size = 310, ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 310 310" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M36 154.738C36 89.161 89.16 36 154.738 36c65.577 0 118.738 53.16 118.738 118.738 0 65.577-53.161 118.738-118.738 118.738S36 220.315 36 154.738Z"
        fill="url(#a)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.37 154.738c0 32.789 26.579 59.369 59.368 59.369s59.369-26.58 59.369-59.369-26.58-59.369-59.369-59.369-59.369 26.58-59.369 59.369Zm59.368-89.053c-49.183 0-89.053 39.87-89.053 89.053s39.87 89.054 89.053 89.054 89.054-39.871 89.054-89.054-39.871-89.053-89.054-89.053Z"
        fill="url(#b)"
        style={{
          mixBlendMode: "hard-light"
        }}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M273.033 86.442c8.513-4.915 19.504-2.035 23.412 6.985 8.143 18.794 12.656 39.525 12.656 61.311 0 21.785-4.513 42.517-12.656 61.31-3.908 9.02-14.899 11.9-23.412 6.985l-91.575-52.871c-11.874-6.855-11.874-23.993 0-30.849l91.575-52.87Z"
        fill="#0073E6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M257.589 95.359c10.106 17.467 15.891 37.747 15.891 59.379 0 21.631-5.785 41.911-15.891 59.378l-76.131-43.954c-11.874-6.855-11.874-23.994 0-30.849l76.131-43.954Z"
        fill="url(#c)"
      />
      <defs>
        <linearGradient id="a" x1={255.665} y1={154.738} x2={125.054} y2={154.738} gradientUnits="userSpaceOnUse">
          <stop stopColor="#11EFE3" />
          <stop offset={0.33} stopColor="#15E8E2" />
          <stop offset={0.74} stopColor="#1FD3E0" />
          <stop offset={1} stopColor="#21CFE0" />
        </linearGradient>
        <linearGradient id="b" x1={65.685} y1={154.738} x2={243.792} y2={154.738} gradientUnits="userSpaceOnUse">
          <stop stopColor="#00299C" />
          <stop offset={1} stopColor="#0073E6" />
        </linearGradient>
        <linearGradient id="c" x1={172.552} y1={154.737} x2={312.069} y2={154.737} gradientUnits="userSpaceOnUse">
          <stop stopColor="#00299C" />
          <stop offset={1} stopColor="#0073E6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TimekeeperAnim;
