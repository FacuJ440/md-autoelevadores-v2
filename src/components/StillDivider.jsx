export default function StillDivider() {
  return (
    <div className="relative -mt-1 overflow-hidden">
      <div
        className="ml-auto bg-[#E87830] h-5"
        style={{
          clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)',
          width: '55%',
        }}
      />
    </div>
  )
}
