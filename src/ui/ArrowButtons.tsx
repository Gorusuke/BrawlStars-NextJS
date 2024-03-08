import styles from '@/ui/global.module.css'

const ArrowButtons = (
  { text, path, isUp, onClick, disabled }: 
  { text:string, path:string, isUp: boolean, onClick?: () => void, disabled?: boolean }
) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles.outline} flex items-center gap-2 py-3 text-base bg-transparent ${!disabled && 'cursor-pointer hover:text-[#ffe058]'}`}
    >
      {isUp && text}
      <svg 
        width="24px" 
        height="24px" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        color={`${!disabled ? "currentColor" : 'gray'}`}
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