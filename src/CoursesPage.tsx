interface CourseProps {
    image: string;
    rating: string;
    lang: string;
    title: string;
    author: string;
    oldPrice?: string;
    price: string;
    level: string;
    levelIcon: string;
    sections: string;
    category: string;
}

function FilterSelect({label, value}: {label: string; value: string}) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-[#9DA1A3] text-[12px] font-medium uppercase">
                {label}
            </p>
            <div className="bg-[#111315] border border-[#F7F9FA]/8 rounded-lg px-4 py-3 flex flex-row justify-between items-center cursor-pointer hover:border-[#F7F9FA]/20">
                <p className="text-[#F7F9FA] text-[14px]">{value}</p>
                <img className="w-4 h-4" src="/chevron.svg" alt="arrow"/>
            </div>
        </div>
    );
}

function CourseCard({
                        image,
                        rating,
                        lang,
                        title,
                        author,
                        oldPrice,
                        price,
                        level,
                        levelIcon,
                        sections,
                        category,
                    }: CourseProps) {
    return (
        <div className="group bg-[#16191D] border border-[#F7F9FA]/8 hover:border-[#1C92E0] rounded-xl p-4 flex flex-row gap-5 cursor-pointer transition-colors">
            <div className="relative w-32 h-32 shrink-0 rounded-lg overflow-hidden bg-[#111315]">
                <img className="w-full h-full object-cover" src={image} alt={title}/>

                <div className="absolute top-2.5 left-2.5 bg-[#16191D]/90 px-2 py-1 rounded flex flex-row items-center gap-1">
                    <img className="w-3.5 h-3.5" src="/star.svg" alt="star"/>
                    <p className="text-[#F7F9FA] text-[12px] ">{rating}</p>
                </div>

                <div className="absolute bottom-2.5 left-2.5 bg-[#16191D]/90 border border-[#F7F9FA]/10 px-2 py-0.5 rounded">
                    <p className="text-[#F7F9FA] text-[11px] font-medium">{lang}</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-between py-1">
                <div className="flex flex-col gap-1">
                    <h2 className="text-[#F7F9FA] group-hover:text-[#1C92E0] text-[18px] font-bold transition-colors">
                        {title}
                    </h2>
                    <p className="text-[#9DA1A3] text-[13px]">{author}</p>

                    <div className="mt-2 flex flex-col">
                        {oldPrice && (
                            <p className="text-[#9DA1A3] text-[12px] line-through decoration-[#DC2D2D]">
                                {oldPrice}
                            </p>
                        )}
                        <p className="text-[#82CC2A] text-[16px] font-bold">{price}</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center pt-3 border-t border-[#F7F9FA]/5">
                    <div className="flex flex-row items-center gap-5">
                        <div className="flex flex-row items-center gap-1.5">
                            <img className="w-4 h-4" src={levelIcon} alt="level"/>
                            <p className="text-[#9DA1A3] text-[13px]">{level}</p>
                        </div>
                        <div className="flex flex-row items-center gap-1.5">
                            <img className="w-4 h-4" src="/cap.svg" alt="sections"/>
                            <p className="text-[#9DA1A3] text-[13px]">{sections}</p>
                        </div>
                        <div className="flex flex-row items-center gap-1.5">
                            <img className="w-4 h-4" src="/menu.svg" alt="category"/>
                            <p className="text-[#9DA1A3] text-[13px]">{category}</p>
                        </div>
                    </div>

                    <img
                        className="w-5 h-5 opacity-70 hover:opacity-100"
                        src="/heart.svg"
                        alt="favorite"
                    />
                </div>
            </div>
        </div>
    );
}

export default function CoursesPage() {
    const stars = Array.from({length: 5});

    return (
        <main className="w-full max-w-[1376px] mx-auto px-8 py-6 flex flex-col gap-6">
            <div className="flex flex-row items-center gap-2 text-[14px]">
                <img className="w-4 h-4" src="/home.svg" alt="home"/>
                <p className="text-[#9DA1A3] hover:text-white cursor-pointer">Asosiy</p>
                <p className="text-[#9DA1A3]">›</p>
                <p className="text-[#F7F9FA] font-medium">O‘rganish</p>
            </div>

            <div className="flex flex-row items-start gap-6">
                <div className="w-65 shrink-0 flex flex-col gap-6">
                    <div className="bg-[#16191D] border border-[#F7F9FA]/8 rounded-xl p-6 flex flex-row items-center gap-4">
                        <img className="w-12 h-11" src="/vector.svg" alt="education"/>
                        <h1 className="text-[#F7F9FA] text-[26px] font-bold">
                            O‘rganish
                        </h1>
                    </div>

                    <div className="bg-[#16191D] border border-[#F7F9FA]/8 rounded-xl p-6 flex flex-col gap-5">
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[#F7F9FA] text-[18px] font-bold">Filter</p>
                            <p className="text-[#1C92E0] text-[14px] cursor-pointer hover:underline">
                                Tozalash
                            </p>
                        </div>

                        <FilterSelect label="Darajani tanlang:" value="Barchasi"/>
                        <FilterSelect label="Kategoriya:" value="Barchasi"/>
                        <FilterSelect label="Darslik tili:" value="Barchasi"/>

                        <div className="flex flex-col gap-2">
                            <p className="text-[#9DA1A3] text-[12px] font-medium uppercase">
                                Reyting:
                            </p>
                            <div className="bg-[#111315] border border-[#F7F9FA]/8 rounded-lg px-4 py-3 flex flex-row justify-between items-center">
                                {stars.map((_, index) => (
                                    <img
                                        key={index}
                                        className="w-6 h-6 cursor-pointer opacity-30 hover:opacity-100"
                                        src="/star-empty.svg"
                                        alt="star"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-4">
                    <div className="bg-[#16191D] border border-[#F7F9FA]/8 rounded-xl px-4 py-3 flex flex-row items-center gap-3">
                        <img className="w-5 h-5 opacity-50" src="/search.svg" alt="search"/>
                        <input
                            type="text"
                            placeholder="Izlash"
                            className="w-full bg-transparent text-[#F7F9FA] placeholder-[#9DA1A3] text-[14px] outline-none"
                        />
                    </div>

                    <CourseCard
                        image="/course-1.png"
                        rating="3.5"
                        lang="РУ"
                        title="Shaxmat donalari bilan tanishuv"
                        author="Robert Fisher"
                        oldPrice="205 000.00 uzs"
                        price="96 000.00 uzs"
                        level="Boshlang'ich"
                        levelIcon="/dona.svg"
                        sections="5 ta bo'lim"
                        category="Strategiya"
                    />

                    <CourseCard
                        image="/course-2.png"
                        rating="5.0"
                        lang="O‘z"
                        title="Shoxga hujum qilish"
                        author="Andre Konfutsiy"
                        price="96 000.00 uzs"
                        level="Boshlang'ich"
                        levelIcon="/dona.svg"
                        sections="8 ta bo'lim"
                        category="Hujum qilish"
                    />

                    <CourseCard
                        image="/course-3.png"
                        rating="4.5"
                        lang="РУ"
                        title="Mot qilish"
                        author="David Harikon"
                        oldPrice="160 000.00 uzs"
                        price="107 000.00 uzs"
                        level="Professional"
                        levelIcon="/pro.svg"
                        sections="20 ta bo'lim"
                        category="Himoyalanish"
                    />

                    <CourseCard
                        image="/course-4.png"
                        rating="5.0"
                        lang="O‘z"
                        title="Asosiy taktikalar"
                        author="Paul Heckler"
                        price="Bepul kurs"
                        level="Havaskor"
                        levelIcon="/image_1.svg"
                        sections="7 ta bo'lim"
                        category="Qoidalar"
                    />

                    <button className="mx-auto mt-2 bg-[#16191D] border border-[#F7F9FA]/8 hover:border-[#F7F9FA]/20 text-[#F7F9FA] text-[14px] font-medium px-8 py-3 rounded-lg cursor-pointer">
                        Ko‘proq
                    </button>


                </div>

                <div className="w-[326px] shrink-0">
                    <img className="w-full h-auto cursor-pointer" src="/banners.png" alt="banners"/>
                </div>

            </div>
        </main>
    );
}