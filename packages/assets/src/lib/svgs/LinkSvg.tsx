type Svgprops = {
  hcol?: string;
  ncol?: string;
};

export function LinkSvg({ hcol, ncol }: Svgprops) {
  const colrs = `fill-[${ncol}] group-hover:fill-[${hcol}]`;
  return (
    <svg
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group"
    >
      <rect
        width="35"
        height="35"
        rx="5"
        className={`${
          hcol ? colrs : 'fill-[#3D5A80] group-hover:fill-[#EE6C4D]'
        }`}
      />
      <path
        d="M28.2471 17.3101C30.5843 14.9503 30.5843 11.1288 28.2471 8.76899C26.1787 6.68071 22.919 6.40923 20.5405 8.1258L20.4743 8.17174C19.8786 8.60193 19.7421 9.43725 20.1682 10.0345C20.5942 10.6317 21.4216 10.7738 22.0131 10.3436L22.0793 10.2976C23.4072 9.34119 25.2232 9.49154 26.3732 10.6568C27.6762 11.9724 27.6762 14.1025 26.3732 15.4181L21.7318 20.1126C20.4288 21.4282 18.3191 21.4282 17.016 20.1126C15.8619 18.9473 15.713 17.1138 16.6603 15.7773L16.7058 15.7105C17.1318 15.109 16.9912 14.2737 16.3996 13.8477C15.8081 13.4217 14.9766 13.5595 14.5547 14.1568L14.5092 14.2236C12.8049 16.621 13.0738 19.9121 15.1421 22.0004C17.4793 24.3601 21.2644 24.3601 23.6016 22.0004L28.2471 17.3101ZM6.75292 16.3328C4.41569 18.6925 4.41569 22.5141 6.75292 24.8739C8.82125 26.9621 12.081 27.2336 14.4595 25.5171L14.5257 25.4711C15.1214 25.0409 15.2579 24.2056 14.8318 23.6084C14.4058 23.0111 13.5784 22.8691 12.9869 23.2993L12.9207 23.3452C11.5928 24.3017 9.77683 24.1513 8.62683 22.9861C7.32378 21.6663 7.32378 19.5362 8.62683 18.2206L13.2682 13.5303C14.5712 12.2147 16.6809 12.2147 17.984 13.5303C19.1381 14.6956 19.287 16.5291 18.3397 17.8697L18.2942 17.9366C17.8682 18.538 18.0088 19.3733 18.6004 19.7993C19.1919 20.2253 20.0234 20.0875 20.4453 19.4903L20.4908 19.4234C22.1951 17.0219 21.9262 13.7308 19.8579 11.6425C17.5207 9.28271 13.7356 9.28271 11.3984 11.6425L6.75292 16.3328Z"
        fill="white"
      />
    </svg>
  );
}