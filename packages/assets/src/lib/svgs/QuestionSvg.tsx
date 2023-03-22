type Svgprops = {
  hcol?: string;
  ncol?: string;
};

export function QuestionSvg({ hcol, ncol }: Svgprops) {
  const colrs = `fill-[${ncol}] group-hover:fill-[${hcol}]`;
  return (
    <svg
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group"
    >
      <path
        d="M17.5 35C27.166 35 35 27.166 35 17.5C35 7.83398 27.166 0 17.5 0C7.83398 0 0 7.83398 0 17.5C0 27.166 7.83398 35 17.5 35ZM11.6074
         11.2998C12.1475 9.77539 13.5967 8.75 15.2168 8.75H19.2021C21.5879 8.75 23.5156 10.6846 23.5156 13.0635C23.5156 14.6084 22.6885 
         16.0371 21.3486 16.8096L19.1406 18.0742C19.127 18.9629 18.3955 19.6875 17.5 19.6875C16.5908 19.6875 15.8594 18.9561 15.8594 
         18.0469V17.124C15.8594 16.5361 16.1738 15.9961 16.6865 15.7021L19.7148 13.9658C20.0361 13.7812 20.2344 13.4395 20.2344 13.0703C20.2344
          12.4961 19.7695 12.0381 19.2021 12.0381H15.2168C14.9844 12.0381 14.7793 12.1816 14.7041 12.4004L14.6768 12.4824C14.376 13.3369 13.4326 
          13.7812 12.585 13.4805C11.7373 13.1797 11.2861 12.2363 11.5869 11.3887L11.6143 11.3066L11.6074 11.2998ZM19.6875 24.0625C19.6875 25.2725
           18.71 26.25 17.5 26.25C16.29 26.25 15.3125 25.2725 15.3125 24.0625C15.3125 22.8525 16.29 21.875 17.5 21.875C18.71 21.875 19.6875 22.8525
            19.6875 24.0625Z"
        className={`${
          hcol ? colrs : 'fill-[#3D5A80] group-hover:fill-[#EE6C4D]'
        }`}
      />
    </svg>
  );
}
