interface CartItemCardProps {
    image: string;
    title: string;
    price: string;
    oldPrice: string;
    quantity: number;
}

export default function CartItemCard({
                                         image,
                                         title,
                                         price,
                                         oldPrice,
                                         quantity,
                                     }: CartItemCardProps) {
    return (
        <div className="relative w-full bg-[#14171A] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <button
                type="button"
                className="absolute top-3.5 right-3.5 text-[#9DA1A3] hover:text-white text-[14px] leading-none cursor-pointer"
            >
                ✕
            </button>

            <div className="flex flex-row items-center gap-4 min-w-0 pr-6">
                <div className="w-[84px] h-[108px] rounded-xl overflow-hidden bg-[#1F2428] shrink-0 flex items-center justify-center">
                    <img src={image} alt={title} className="w-full h-full object-cover block" />
                </div>

                <div className="flex flex-col gap-2 min-w-0">
                    <p className="text-white text-[16px] sm:text-[18px] font-semibold leading-snug">
                        {title}
                    </p>
                    <div className="flex flex-col gap-0.5">
                        <p className="text-[#82C341] font-bold text-[15px] sm:text-[16px]">
                            {price}
                        </p>
                        <p className="text-[#9DA1A3] text-[12px] line-through">
                            {oldPrice}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center gap-2.5 self-end sm:self-end shrink-0">
                <button
                    type="button"
                    className="w-8 h-8 rounded-lg bg-[#E5484D] hover:bg-[#D13B40] text-white font-bold text-[16px] flex items-center justify-center cursor-pointer transition-colors"
                >
                    −
                </button>
                <div className="w-10 h-8 rounded-lg bg-[#1F2428] border border-white/10 flex items-center justify-center">
                    <p className="text-white text-[14px] font-medium">{quantity}</p>
                </div>
                <button
                    type="button"
                    className="w-8 h-8 rounded-lg bg-[#82C341] hover:bg-[#72B035] text-white font-bold text-[16px] flex items-center justify-center cursor-pointer transition-colors"
                >
                    +
                </button>
            </div>
        </div>
    );
}