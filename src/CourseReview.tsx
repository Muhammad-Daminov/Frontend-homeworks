function ReviewItem({avatar, author, date, rating, text}) {
    const stars = Array.from({length: 5});

    return (
        <div className="bg-[#1A1D1F] rounded-lg border border-[#F7F9FA]/8 p-5 flex flex-col gap-3">
            <div className="flex flex-row justify-between items-start">
                <div className="flex flex-row items-center gap-3">
                    <img className="w-10 h-10 rounded-full object-cover bg-[#2A2F33]" src={avatar} alt="user"/>
                    <div className="flex flex-col">
                        <p className="text-[#F7F9FA] text-[15px] font-semibold">{author}</p>
                        <div className="flex flex-row items-center gap-2">
                            <p className="text-[#F7F9FA]/50 text-[12px]">{date}</p>
                            <div className="flex flex-row gap-0.5">
                                {stars.map((_, index) => (
                                    <img
                                        key={index}
                                        className="w-3.5 h-3.5"
                                        src={`${index < rating ? '/star' : '/star-empty'}.svg`}
                                        alt="star"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-[#F7F9FA]/50 cursor-pointer">⋮</p>
            </div>
            <p className="text-[#F7F9FA]/80 text-[16px]">{text}</p>
        </div>
    );
}

function CourseReview() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-[#F7F9FA] text-28.12 font-poppins font-bold">Kurs haqida izohlar</h2>
            <div className="flex flex-col gap-3">
                <ReviewItem
                    avatar="/Rectangle.1.png"
                    author="Jasurbek Narzullayev"
                    date="7 Sentyabr 2022 y. 15:52"
                    rating={4}
                    text="2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.  26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
                />
                <ReviewItem
                    avatar="/Rectangle.2.png"
                    author="Muhammadamin Domlajonov"
                    date="7 Sentyabr 2022 y. 15:52"
                    rating={3}
                    text="2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.  26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
                />
                <ReviewItem
                    avatar="/Rectangle.3.png"
                    author="Shoxruh Sodirjonov"
                    date="7 Sentyabr 2022 y. 15:52"
                    rating={5}
                    text="2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.  26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
                />
            </div>
        </div>
    );
}

export default CourseReview;