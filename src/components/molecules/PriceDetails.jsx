import { formatPrice, getInstallments } from "../../helpers/numbers"
import ProtectedPublish from "../atoms/ProtectedPublish"

const PriceDetails = ({ price, includeIva }) => {
  return (
    <div className="flex items-center justify-between mb-4">
        <div>
            <span className="font-semibold text-3xl">{formatPrice(price)}</span>
            <p className="text-gray-600">
                en{" "}
                <span className="text-green-500 font-semibold">
                    {getInstallments(price, 12)}
                </span>
                {includeIva && <p className="text-gray-600 text-sm">IVA incluido</p>}
            </p>
        </div>
        <ProtectedPublish primaryText="Protección al Comprador de 75 días" secondaryText="Garantía de reembolso" />
    </div>
  )
}

export default PriceDetails