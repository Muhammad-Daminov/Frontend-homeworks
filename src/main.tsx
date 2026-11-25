import {createRoot} from "react-dom/client";
import "./style.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import CoursesPage from "./CoursesPage.tsx";

const root = createRoot(document.getElementById('root')!);

root.render(
    <div className="min-h-screen flex flex-col min-h-screen bg-[#111315]">
        <Header/>
        <CoursesPage/>
        <Footer/>
    </div>
);



