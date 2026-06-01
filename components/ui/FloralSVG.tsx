type FloralSVGProps = {
  className?: string;
};

export default function FloralSVG({ className }: FloralSVGProps) {
  return (
    <svg
      className={`h-auto w-full ${className ?? ""}`}
      viewBox="0 0 280 320"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M145 307C132 263 129 232 133 198C139 145 162 104 205 67"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M133 205C101 177 83 147 80 107C79 83 88 62 107 47"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M164 122C194 119 215 105 227 83C235 67 236 51 230 35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M112 95C96 76 88 58 88 38C88 22 93 10 104 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M135 183C115 166 99 145 88 122"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="208" cy="63" r="18" stroke="currentColor" strokeWidth="2" />
      <circle cx="106" cy="45" r="14" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
