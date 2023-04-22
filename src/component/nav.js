import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profilepic from "./Profilepic";
import { Link } from "react-router-dom";
import Accueil from "./card";
import Formations from "./Formations";
import Projets from "./Projets";
import Certification from "./Certification";
import Experiences from "./Experiences";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";


export default function Navbar() {
    return (
      <div>
      <BrowserRouter>
        <div>
        <header className="header">
       <Profilepic />
            <h1>Rida Oussama</h1>
            <h2>Etudiant Ingénieurie 4eme année IIR</h2>
          </header>
        </div>
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "black" }}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link " >
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link">
                  Projets
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/formations" className="nav-link">
                  Formations
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/experiences" className="nav-link">
                  Expériences
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/certifications" className="nav-link">
                  Certifications
                </Link>
              </li>
             
            </ul>
          </nav>
          <div className="container mt-4" >
            <Routes>
              <Route exact path="/" element={<Accueil />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/project" element={<Projets />} />

              <Route path="/certifications" element={<Certification />} />
            </Routes>

          </div>
      </BrowserRouter>
         <Footer/>
         </div>
    );
  }