import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";

function Page() {
    return(
        <div className="page">
            <div className="conteiner">
                <Routes>
                    <Route path="/" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div> 
        </div>
    )
}

export default Page;