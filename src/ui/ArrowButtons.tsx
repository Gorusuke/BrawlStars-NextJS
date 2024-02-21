const ArrowButtons = (
  { text, path, isUp, onClick }: 
  { text:string, path:string, isUp: boolean, onClick?: () => void }
) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 py-3 text-base bg-transparent cursor-pointer hover:text-[#ffe058]"
    >
      {isUp && text}
      <svg 
        width="24px" 
        height="24px" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        color="currentColor"
      >
        <path d={path} 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        ></path>
      </svg>
      {!isUp && text}
    </button>
  )
}

export default ArrowButtons