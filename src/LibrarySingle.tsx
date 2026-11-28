import BookInfoCard from "./BookInfoCard.tsx";
import RecommendedBooks from "./RecommendedBooks.tsx";

export default function LibrarySingle() {
    return (
        <main className="w-full max-w-[1376px] mx-auto px-8 py-6 flex flex-col gap-6 font-poppins">
            <div className="flex flex-row items-center gap-2 text-[13px] text-[#9DA1A3]">
                <img src="/home.svg" alt="home" className="w-4 h-4"/>
                <p className="hover:text-white cursor-pointer">Asosiy</p>
                <p>›</p>
                <p className="hover:text-white cursor-pointer">Kutubxona</p>
                <p>›</p>
                <p className="text-white font-medium">
                    Shaxmatdagi qobiliyatliringizga qayta baxo bering
                </p>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-1 min-w-0 flex flex-col gap-6">
                    <BookInfoCard/>

                    <div className="w-full bg-[#14171A] border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
                        <h2 className="text-white text-[20px] font-bold">Kitob haqida</h2>
                        <p className="text-[#9DA1A3] text-[14px] leading-relaxed">
                            Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan.
                            Ushbu 4-nashr Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay yangi
                            darajaga olib chiqadi. 1400 dan 2100 gacha bo'lgan reyting oralig'idagi o'yinchilar va
                            shaxmat bo'yicha tayyor o'quv dasturini qidirayotgan o'qituvchilar uchun mo'ljallangan
                            muallif o'quvchini nomutanosiblik asoslari orqali olib boradigan, barcha
                            nomutanosibliklarning har bir tafsiloti o'zlashtirilishini ta'minlaydigan aqlni
                            kengaytiruvchi sayohatni baham ko'radi. va shaxmat o'yinchisini/sevuvchisini har doim
                            xohlagan, lekin erisha olishiga ishonmagan narsasi bilan qoldiradi: usta darajasidagi
                            pozitsion poydevor.
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-5">
                    <div className="w-full rounded-2xl overflow-hidden">
                        <img src="/Banners.png" alt="Banner" className="w-full h-auto block"/>
                    </div>

                    <RecommendedBooks/>
                </div>
            </div>
        </main>
    );
}