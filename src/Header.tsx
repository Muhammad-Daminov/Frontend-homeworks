function NavLink({text, active}: {text: string; active?: boolean}) {
    return (
        <div className="relative h-full flex items-center cursor-pointer">
            <p className={`text-[16px] font-medium ${active ? "text-white" : "text-[#9DA1A3] hover:text-white"}`}>
                {text}
            </p>
            {active && (
                <div className="absolute bottom-0 left-0 w-full h-0.75 bg-[#1C92E0] rounded-t-full"></div>
            )}
        </div>
    );
}

export default function Header() {
    return (
        <header className="w-full bg-[#16191D] border-b border-[#F7F9FA]/8 px-8">
            <div className="max-w-[1376px] mx-auto h-20 flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-6">
                    <img className="h-8" src="/uzchess.svg" alt="UzChess"/>

                    <div className="w-px h-6 bg-[#F7F9FA]/10"></div>

                    <div className="flex flex-row items-center gap-2 text-white text-[15px] cursor-pointer">
                        <p>O‘zbekcha</p>
                        <img className="w-4 h-4" src="/chevron.svg" alt="arrow"/>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-8 h-full">
                    <NavLink text="Asosiy"/>
                    <NavLink text="Yangiliklar"/>
                    <NavLink text="O‘rganish" active={true}/>
                    <NavLink text="Kutubxona"/>
                    <NavLink text="Bog‘lanish"/>
                </div>

                <div className="flex flex-row items-center gap-5">
                    <img className="w-6 h-6 cursor-pointer hover:opacity-80" src="/search.svg" alt="search"/>
                    <img className="w-8 h-8 cursor-pointer hover:opacity-80" src="/basket.svg" alt="cart"/>
                    <img className="w-6 h-6 cursor-pointer hover:opacity-80" src="/notification.svg" alt="notifications"/>

                    <div className="w-px h-6 bg-[#F7F9FA]/10"></div>

                    <div className="flex flex-row items-center gap-3 cursor-pointer">
                        <p className="text-white text-[15px] font-medium">Jasurbek Pulatov</p>
                        <img
                            className="w-9 h-9 rounded-full object-cover bg-[#2A2F33]"
                            src="/avatar.png"
                            alt="Jasurbek Pulatov"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}