import { useState } from "react";
import CourseHeader from "./CourseHeader.tsx";
import LessonCard from "./LessonCard.tsx";
import CourseReview from "./CourseReview.tsx";

const lessons1 = [
    { image: "/course-4.png", time: "07:12", title: "1.1 Krish" },
    { image: "/course-2.png", time: "08:15", title: "1.2 Mot qilish" },
    { image: "/course-3.png", time: "05:45", title: "1.2 Piyoda bilan tanishuv" },
];

export default function CourseDetailPage() {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <main className="w-full max-w-[1376px] mx-auto px-8 py-6 flex flex-col gap-6">
            <CourseHeader />

            <div className="w-full flex flex-row items-start gap-6">
                <div className="flex-1 min-w-0 flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-3">
                        <div className="w-full bg-[#111417] border border-white/10 rounded-xl overflow-hidden">
                            <button
                                type="button"
                                onClick={() => setOpen1(!open1)}
                                className="w-full h-[64px] px-6 bg-[#14171A] flex flex-row items-center justify-between cursor-pointer"
                            >
                                <p className="text-white font-semibold font-poppins text-[18px]">
                                    1. Asosiy donalar
                                </p>
                                <img
                                    src="/chevron.svg"
                                    alt="icon"
                                    className={`w-4 h-4 shrink-0 transition-transform ${open1 ? "rotate-180" : ""}`}
                                />
                            </button>

                            {open1 && (
                                <div className="w-full px-6 pb-6 pt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {lessons1.map((lesson, i) => (
                                        <LessonCard
                                            key={i}
                                            image={lesson.image}
                                            time={lesson.time}
                                            title={lesson.title}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="w-full bg-[#111417] border border-white/10 rounded-xl overflow-hidden">
                            <button
                                type="button"
                                onClick={() => setOpen2(!open2)}
                                className="w-full h-[60px] px-6 bg-[#14171A] flex flex-row items-center justify-between cursor-pointer"
                            >
                                <p className="text-white font-semibold font-poppins text-[18px]">
                                    2. Eng ko‘p foydalaniadigan donalar
                                </p>
                                <img
                                    src="/chevron.svg"
                                    alt="icon"
                                    className={`w-4 h-4 shrink-0 transition-transform ${open2 ? "rotate-180" : ""}`}
                                />
                            </button>
                        </div>

                        <div className="w-full bg-[#111417] border border-white/10 rounded-xl overflow-hidden">
                            <button
                                type="button"
                                onClick={() => setOpen3(!open3)}
                                className="w-full h-[60px] px-6 bg-[#14171A] flex flex-row items-center justify-between cursor-pointer"
                            >
                                <p className="text-white font-semibold font-poppins text-[18px]">
                                    3. Mot qilish oson bolgan donalar
                                </p>
                                <img
                                    src="/chevron.svg"
                                    alt="icon"
                                    className={`w-4 h-4 shrink-0 transition-transform ${open3 ? "rotate-180" : ""}`}
                                />
                            </button>
                        </div>
                    </div>

                    <CourseReview />
                </div>

                <div className="w-[320px] shrink-0 rounded-xl overflow-hidden">
                    <img src="/Banners.png" alt="Banner" className="w-full h-auto block" />
                </div>
            </div>
        </main>
    );
}