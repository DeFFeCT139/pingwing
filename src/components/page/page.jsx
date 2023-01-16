import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error404";
import Portfolio from "./pages/portfolio";

function Page({languageContent}) {
    return(
        <div className="page">
            <div className="conteiner">
                <Routes>
                    <Route  path="/" element={<About languageContent={languageContent}/>}/>
                    <Route path="/contact" element={<Contact languageContent={languageContent}/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/error404" element={<ErrorPage/>}/>
                    <Route path="*" element={<Navigate to='/error404'/>}/>
                </Routes>
            </div> 
        </div>
    )
}

export default Page;