const recommended = [
    {
        image: "/book1.svg",
        title: "Bobbi Fisher shaxmatni o‘ynashni o‘rgataning",
        author: "J.Silman",
    },
    {
        image: "/book.png",
        title: "Mening tizimim",
        author: "J.Silman",
    },
    {
        image: "/book3.png",
        title: "Zurixdagi shaxmat musobaqasi",
        author: "J.Silman",
    },
    {
        image: "/book4.png",
        title: "Mening esdaqolarlik o‘yinlarim",
        author: "J.Silman",
    },
];

export default function RecommendedBooks() {
    return (
        <div className="w-full bg-[#14171A] border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <h3 className="text-white text-[18px] font-bold">Tavsiya</h3>
                <button
                    type="button"
                    className="text-[#9DA1A3] hover:text-white text-[13px] flex items-center gap-1 cursor-pointer"
                >
                    <span>Barchasi</span>
                    <span>›</span>
                </button>
            </div>

            <div className="flex flex-col gap-3">
                {recommended.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-row items-center gap-3 p-2 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-16 rounded-lg object-cover shrink-0 bg-[#1F2428]"
                        />
                        <div className="flex flex-col gap-1 min-w-0">
                            <p className="text-white text-[13px] font-semibold leading-snug line-clamp-2">
                                {item.title}
                            </p>
                            <span className="text-[#9DA1A3] text-[12px]">{item.author}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}