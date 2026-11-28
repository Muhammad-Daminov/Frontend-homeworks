import CartItemCard from "./CartItemCard.tsx";

const cartItems = [
    {
        id: 1,
        image: "/book2.png",
        title: "Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va barchani",
        price: "155 000.00 uzs",
        oldPrice: "205 000.00 uzs",
        quantity: 5,
    },
    {
        id: 2,
        image: "/medal.png",
        title: "Shaxmatchilar klubi nishoni",
        price: "2 000 000.00 uzs",
        oldPrice: "2 500 000.00 uzs",
        quantity: 1,
    },
    {
        id: 3,
        image: "/medal1.png",
        title: "“Shox”lar uchun shox donasi ko‘rinishidagi nishon",
        price: "525 250.00 uzs",
        oldPrice: "600 000.00 uzs",
        quantity: 20,
    },
];

export default function CartPage() {
    return (
        <main className="w-full max-w-[1376px] mx-auto px-8 py-6 flex flex-col gap-6 font-poppins">
            <div className="flex flex-row items-center gap-2 text-[13px] text-[#9DA1A3]">
                <img src="/home.svg" alt="home" className="w-4 h-4" />
                <p className="hover:text-white cursor-pointer">Asosiy</p>
                <p>›</p>
                <p className="text-white font-medium">Savatcha</p>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <CartItemCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            quantity={item.quantity}
                        />
                    ))}
                </div>

                <div className="w-full lg:w-[360px] shrink-0 flex flex-col gap-5">
                    <div className="w-full bg-[#14171A] border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
                        <div className="flex flex-col gap-2.5 text-[13px]">
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-[#9DA1A3]">To‘lov narxi:</p>
                                <p className="text-white font-medium">1560 000.00 UZS</p>
                            </div>

                            <div className="flex flex-row items-center justify-between">
                                <p className="text-[#9DA1A3]">Chegirma:</p>
                                <p className="text-white font-medium">1 56000.00 UZS (10%)</p>
                            </div>

                            <div className="flex flex-row items-center justify-between">
                                <p className="text-[#9DA1A3]">Kupon:</p>
                                <p className="text-white font-medium">0 UZS</p>
                            </div>

                            <div className="flex flex-row items-center justify-between">
                                <p className="text-[#9DA1A3]">Yetkazib berish:</p>
                                <p className="text-white font-medium">0 UZS</p>
                            </div>
                        </div>

                        <div className="pt-3 border-t border-white/10 flex flex-row items-center justify-between">
                            <p className="text-white text-[16px] font-semibold">Jami:</p>
                            <p className="text-white text-[18px] font-bold">1404000.00 UZS</p>
                        </div>

                        <div className="flex flex-col gap-2 pt-1">
                            <p className="text-white text-[13px] font-medium">Kupon</p>
                            <input
                                type="text"
                                placeholder="Kupondagi kodni kiriting"
                                className="w-full h-11 px-3.5 rounded-lg bg-[#111315] border border-white/10 text-white placeholder:text-[#6C7278] text-[13px] focus:outline-none focus:border-[#1C92E0]"
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full h-11 bg-[#1C92E0] hover:bg-[#1781C7] text-white font-medium text-[14px] rounded-lg flex flex-row items-center justify-center gap-2 cursor-pointer transition-colors"
                        >
                            <img src="/cash.svg" alt="checkout" className="w-4 h-4" />
                            <p>Rasmiylashtirish</p>
                        </button>
                    </div>

                    <div className="w-full rounded-2xl overflow-hidden">
                        <img src="/Banners.png" alt="Banner" className="w-full h-auto block" />
                    </div>
                </div>
            </div>
        </main>
    );
}