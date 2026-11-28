export default function BookInfoCard() {
    return (
        <div className="w-full bg-[#14171A] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-full sm:w-[190px] shrink-0 rounded-xl overflow-hidden bg-[#1F2428]">
                <img
                    src="/book2.png"
                    alt="Shaxmatdagi qobiliyatliringizga qayta baxo bering"
                    className="w-full h-[255px] object-cover block"
                />
            </div>

            <div className="flex-1 min-w-0 flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-3">
                    <h1 className="text-white text-[24px] font-bold leading-snug">
                        Shaxmatdagi qobiliyatliringizga qayta baxo bering
                    </h1>

                    <div className="flex flex-row items-center gap-3">
                        <div className="flex flex-row items-center gap-1.5">
                            <img src="/cash.svg" alt="price" className="w-5 h-5" />
                            <span className="text-white font-bold text-[16px]">55 000.00 UZS</span>
                        </div>
                        <span className="text-[#9DA1A3] text-[13px] line-through">160 000.00 uzs</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-y border-white/8">
                    <div className="flex flex-col gap-1">
                        <span className="text-[#9DA1A3] text-[12px] flex items-center gap-1">
                            Daraja
                        </span>
                        <span className="text-white text-[13px] font-medium">Boshlang‘ich</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-[#9DA1A3] text-[12px] flex items-center gap-1">
                            Muallif
                        </span>
                        <span className="text-white text-[13px] font-medium">Jeremy Silman</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-[#9DA1A3] text-[12px] flex items-center gap-1">
                            Sahifa soni
                        </span>
                        <span className="text-white text-[13px] font-medium">231</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-[#9DA1A3] text-[12px] flex items-center gap-1">
                            Chop etilgan sana
                        </span>
                        <span className="text-white text-[13px] font-medium">2002</span>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-3">
                    <button
                        type="button"
                        className="h-11 px-6 bg-[#1C92E0] hover:bg-[#1781C7] text-white font-medium text-[14px] rounded-lg flex flex-row items-center gap-2 cursor-pointer transition-colors"
                    >
                        <img src="/basket.svg" alt="cart" className="w-4 h-4" />
                        <span>Savatchaga</span>
                    </button>

                    <button
                        type="button"
                        className="w-11 h-11 rounded-lg bg-[#1F2428] hover:bg-[#2A3036] border border-white/10 flex items-center justify-center cursor-pointer transition-colors"
                    >
                        <img src="/heart.svg" alt="like" className="w-5 h-5" />
                    </button>

                    <button
                        type="button"
                        className="w-11 h-11 rounded-lg bg-[#1F2428] hover:bg-[#2A3036] border border-white/10 flex items-center justify-center cursor-pointer transition-colors"
                    >
                        <img src="/share.svg" alt="share" className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}