const BatsmanAnimation = () => {
  return (
    <svg
      width="220"
      height="300"
      viewBox="0 0 200 300"
      xmlns="http://www.w3.org/2000/svg"
      className="batsman"
    >
      {/* Head */}
      <circle cx="100" cy="40" r="18" fill="#42EEF9" />

      {/* Body */}
      <rect x="90" y="60" width="20" height="70" fill="#42EEF9" />

      {/* Legs */}
      <line x1="95" y1="130" x2="80" y2="190" stroke="#42EEF9" strokeWidth="6" />
      <line x1="105" y1="130" x2="120" y2="190" stroke="#42EEF9" strokeWidth="6" />

      {/* Bat */}
      <rect
        x="130"
        y="70"
        width="10"
        height="100"
        rx="4"
        fill="#ffffff"
        className="bat"
      />
    </svg>
  );
};

export default BatsmanAnimation;
