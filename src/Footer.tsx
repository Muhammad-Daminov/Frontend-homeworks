function FooterLink({text}: { text: string }) {
    return (
        <p className="text-[#F7F9FA] text-[14px] hover:text-[#1C92E0] cursor-pointer">
            {text}
        </p>
    )
}

function SocialIcon({icon}: { icon: string }) {
    return (
        <img
            className="w-5 h-5 cursor-pointer hover:opacity-80"
            src={icon}
            alt="social"/>
    );
}

export default function Footer() {
    return (
        <footer className="w-full bg-[#16191D] border-t border-[#F7F9FA]/8 mt-auto">
            <div className="max-w-[1376px] mx-auto py-8 px-8 flex flex-col items-center gap-6">
                <img className="h-8" src="/uzchess.svg" alt="Uzchess"/>


                <div className="flex flex-row items-center gap-8">
                    <FooterLink text="Biz haqimizda"/>
                    <FooterLink text="Cookie fayllari siyosati"/>
                    <FooterLink text="Foydalanish qoidalari"/>
                    <FooterLink text="Cookie fayllari siyosati"/>
                </div>

                <div className="flex flex-row items-center gap-5">
                    <SocialIcon icon="/instagram.svg"/>
                    <SocialIcon icon="/telegram.svg"/>
                    <SocialIcon icon="/youtube.svg"/>
                    <SocialIcon icon="/twitter.svg"/>
                    <SocialIcon icon="/facebook.svg"/>
                </div>
            </div>

            <div className="border-t border-[#F7F9FA]/8 px-8 py-4">
                <div className="max-w-[1376px] mx-auto flex flex-row justify-between items-center">
                    <p className="text-[#9DA1A3] text-[13px]">
                        © UzChess. All rights reserved.
                    </p>
                    <img className="h-5" src="/bird.svg" alt="icon"/>

                    <p className="text-[#9DA1A3] text-[13px] hover:text-white cursor-pointer">
                        Foydalanish qoidalari
                    </p>

                </div>
            </div>

        </footer>
    )
}