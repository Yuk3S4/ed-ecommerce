import { BsShieldCheck } from "react-icons/bs"

const ProtectedPublish = ({ primaryText, secondaryText }) => {
  return (
    <div className="flex items-center gap-2">
        <BsShieldCheck className="text-2xl" />
        <div className="text-sm">
            <p className="font-semibold text-gray-600">
                {primaryText}
            </p>
            <p className="text-gray-600">{primaryText}</p>
        </div>
    </div>
  )
}

export default ProtectedPublish