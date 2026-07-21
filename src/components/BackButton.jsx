import { useNavigate, Link } from 'react-router-dom'

export default function BackButton({ to }) {
  const navigate = useNavigate()

  const buttonContent = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
      Volver
    </>
  )

  return (
    <div className="max-w-page mx-auto w-full px-6 pb-12 pt-8">
      {to ? (
        <Link
          to={to}
          className="flex items-center gap-2 text-carbon-warm text-body-sm font-normal hover:text-onyx-depth transition-colors duration-200"
          aria-label="Volver"
        >
          {buttonContent}
        </Link>
      ) : (
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-carbon-warm text-body-sm font-normal hover:text-onyx-depth transition-colors duration-200"
          aria-label="Volver"
        >
          {buttonContent}
        </button>
      )}
    </div>
  )
}
