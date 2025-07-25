import React from "react"

interface Props {
  status: "ACTIVE" | "INACTIVE"
}

const StatusBadge: React.FC<Props> = ({ status }) => {
  const isActive = status === "ACTIVE"

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide inline-block shadow-sm transition-all duration-300
        ${isActive ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}
    >
      {isActive ? "AKTIF" : "TIDAK AKTIF"}
    </span>
  )
}

export default StatusBadge