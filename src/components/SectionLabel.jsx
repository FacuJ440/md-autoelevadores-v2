export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="w-1 h-1 bg-carbon-warm" />
      <span className="text-label font-normal uppercase tracking-[0.12em] text-carbon-warm">
        {children}
      </span>
    </div>
  )
}
