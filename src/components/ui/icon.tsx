export default function Icon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
            </defs>

            {/* Foundation Tiers */}
            <path d="M 30 130 L 100 165 L 170 130" stroke="#1e293b" strokeWidth="16"
                strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 30 100 L 100 135 L 170 100" stroke="#1e293b" strokeWidth="16"
                strokeLinecap="round" strokeLinejoin="round" />

            {/* Logic Layer */}
            <path d="M 100 25 L 180 65 L 100 105 L 20 65 Z" fill="url(#plateGrad)" />
            <path d="M 100 45 L 135 65 L 100 85 L 65 65 Z" stroke="url(#nodeGrad)" strokeWidth="4"
                strokeLinejoin="round" />

            {/* Network Nodes */}
            <circle cx="100" cy="45" r="8" fill="url(#nodeGrad)" stroke="#030712"
                strokeWidth="2.5" />
            <circle cx="135" cy="65" r="8" fill="url(#nodeGrad)" stroke="#030712"
                strokeWidth="2.5" />
            <circle cx="100" cy="85" r="8" fill="url(#nodeGrad)" stroke="#030712"
                strokeWidth="2.5" />
            <circle cx="65" cy="65" r="8" fill="url(#nodeGrad)" stroke="#030712"
                strokeWidth="2.5" />
        </svg>
    )
}