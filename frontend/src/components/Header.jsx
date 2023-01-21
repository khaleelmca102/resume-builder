import { Link } from 'react-router-dom';
import '../assets/css/style-min.css';
import '../assets/css/custom.css';
import '../assets/css/article.css';
import { useStateContext } from '../contexts/ContextProvider';

const Header = () => {
    const {token, loader, setToken} = useStateContext();
    const onLogout = (e) => {
        e.preventDefault();
        setToken(null);
    }

  return (
    <div>
        <div className="navbar-top navbar-dark d-xl-block py-2 mx-2 mx-md-4 rounded-bottom-4">
            <div className="container-fluid px-3 px-xl-0">
                <div className="d-lg-flex justify-content-lg-between align-items-center top-nav-links">
                    <ul className="nav align-items-center justify-content-center">
                        <li className="nav-item" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Home Page">
                            <a className="nav-link" href="https://www.tutorialspoint.com/index.htm"><i className="fal fa-home-alt me-1"></i> Home</a>
                        </li>
                        <li className="nav-item" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Online Coding System">
                            <a className="nav-link" href="https://www.tutorialspoint.com/codingground.htm"><i className="fal fa-code me-1"></i> Coding Ground</a>
                        </li>
                        <li className="nav-item" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Job Openings">
                            <span><a className="nav-link" href="https://www.tutorialspoint.com/about/about_careers.htm"><i className="fal fa-suitcase me-1"></i> Jobs</a></span>
                        </li>
                        <li className="nav-item" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Digital Whiteboard">
                            <span><a className="nav-link" href="https://www.tutorialspoint.com/whiteboard.htm"><i className="fal fa-chalkboard me-1"></i> Whiteboard</a></span>
                        </li>
                        <li className="nav-item" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Developer's Tools">
                            <span><a className="nav-link" href="https://www.tutorialspoint.com/online_dev_tools.htm"><i className="fal fa-tools me-1"></i> Tools</a></span>
                        </li>
                        <li className="nav-item" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Corporate Trainings">
                            <span><a className="nav-link" href="https://www.tutorialspoint.com/business/index.asp"><i className="fal fa-analytics me-1"></i> Business</a></span>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="navbar-nav ms-2">
                        <div className="modeswitch-wrap" id="darkModeSwitch">
                            <div className="modeswitch-item">
                                <div className="modeswitch-icon">
                                    <i className="fal fa-sun toggle-sun"></i>
                                    <i className="fal fa-moon toggle-moon"></i>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="me-3c top-nav-social">
                        <a className="nav-link" href="https://www.tutorialspoint.com/market/teach_with_us.jsp" target="_self"  data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Teach with us"><i className="fal fa-users-class me-2"></i> <span>Teach with us</span></a>
                        </div>
                        <ul className="list-unstyled d-flex mb-0 top-nav-social">
                            <li><a className="px-2 nav-link" rel="noreferrer" href="https://www.facebook.com/tutorialspointindia" target="_blank" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Tutorialspoint Facebook"><i className="fab fa-facebook"></i></a> </li>
                            <li><a className="px-2 nav-link" rel="noreferrer" href="https://www.instagram.com/tutorialspoint_/" target="_blank" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Tutorialspoint Instagram"><i className="fab fa-instagram"></i></a> </li>
                            <li><a className="px-2 nav-link" rel="noreferrer" href="https://twitter.com/tutorialspoint" target="_blank" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Tutorialspoint Twitter"><i className="fab fa-twitter"></i></a> </li>
                            <li><a className="px-2 nav-link" rel="noreferrer" href="https://www.youtube.com/channel/UCVLbzhxVTiTLiVKeGV7WEBg" target="_blank" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Tutorialspoint Youtube"><i className="fab fa-youtube"></i></a> </li>
                            <li><a className="px-2 nav-link" rel="noreferrer" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEkqX2eckF__gAAAX-wMwEYvrsjBVbEtWQd4pgEdVSzkL22Nik1KEpY_ECWLKDGc41z8IOZWr2Bb0fvJplT60NPBtSw87J6QCpc7wD4qQ3iU13n6xJtBxME5o05Wmpg5JPm5YY=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftutorialspoint" target="_blank" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" data-bs-original-title="Tutorialspoint LinkedIn"><i className="fab fa-linkedin-in"></i></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <header className="navbar-light navbar-sticky header-static">
            <nav className="navbar navbar-expand-xl">
                <div className="container-fluid px-3 px-xl-4">
                    <a className="navbar-brand" href="https://www.tutorialspoint.com/index.htm"><img className="light-mode-item navbar-brand-item" src="https://www.tutorialspoint.com/static/images/logo-color.png" alt="logo" /> <img className="dark-mode-item navbar-brand-item" src="/static/images/logo-color-b.png" alt="logo" /></a>
                    <button className="navbar-toggler-toc collapsed ms-auto-toc" type="button"  id="btn-tutorial-toc">
                                <span><i className="fal fa-th-list"></i></span>
                    </button>
                    <button className="navbar-toggler ms-auto" type="button" id="btn-menu-collapse">
                        <span className="navbar-toggler-animation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                    <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
                        <ul className="navbar-nav navbar-nav-scroll me-auto">
                            <li className="nav-item nav-xs-login">
                                <a className="nav-link" href="#"><i className="fal fa-sign-in-alt me-2"></i>Login</a>
                            </li>
                            <li className="nav-item dropdown dropdown-menu-shadow-stacked">
                                <a className="nav-link" href="#" id="categoryMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fal fa-th-list fs-5 me-xl-1 d-xl-none"></i>
                                    <i className="fal fa-th me-1 d-none d-xl-inline-block"></i>
                                    <span className="d-xl-inline-block">Category <i className="fal fa-angle-down"></i></span>
                                </a>
                              
                                <ul className="dropdown-menu categories-menu shadow" id="categories-menu">
                                    <li><a href="/academic_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Academic Tutorials</a></li>
                                    <li><a href="/big_data_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Big Data &amp; Analytics </a></li>
                                    <li><a href="/computer_programming_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Computer Programming </a></li>
                                    <li><a href="/computer_science_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Computer Science </a></li>
                                    <li><a href="/database_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Databases </a></li>
                                    <li><a href="/devops_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> DevOps </a></li>
                                    <li><a href="/digital_marketing_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Digital Marketing </a></li>
                                    <li><a href="/engineering_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Engineering Tutorials </a></li>
                                    <li><a href="/upsc_ias_exams.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Exams Syllabus </a></li>
                                    <li><a href="/famous_monuments.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Famous Monuments </a></li>
                                    <li><a href="/gate_exams_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> GATE Exams </a></li>
                                    <li><a href="/latest_technologies.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Latest Technologies </a></li>
                                    <li><a href="/machine_learning_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Machine Learning </a></li>
                                    <li><a href="/mainframe_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Mainframe Development </a></li>
                                    <li><a href="/management_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Management Tutorials </a></li>
                                    <li><a href="/maths_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Mathematics Tutorials</a></li>
                                    <li><a href="/microsoft_technologies_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Microsoft Technologies </a></li>
                                    <li><a href="/misc_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Misc tutorials </a></li>
                                    <li><a href="/mobile_development_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Mobile Development </a></li>
                                    <li><a href="/java_technology_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Java Technologies </a></li>
                                    <li><a href="/python_technologies_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Python Technologies </a></li>
                                    <li><a href="/sap_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> SAP Tutorials </a></li>
                                    <li><a href="/scripting_lnaguage_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Programming Scripts </a></li>
                                    <li><a href="/selected_reading.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Selected Reading </a></li>
                                    <li><a href="/software_quality_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Software Quality </a></li>
                                    <li><a href="/soft_skill_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Soft Skills </a></li>
                                    <li><a href="/telecom_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Telecom Tutorials </a></li>
                                    <li><a href="/upsc_ias_exams.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> UPSC IAS Exams </a></li>
                                    <li><a href="/web_development_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Web Development </a></li>
                                    <li><a href="/sports_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Sports Tutorials </a></li>
                                    <li><a href="/xml_technologies_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> XML Technologies </a></li>
                                    <li><a href="/multi_language_tutorials.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Multi-Language</a></li>
                                    <li><a href="/questions_and_answers.htm" className="dropdown-item"><i className="fal fa-angle-right"></i> Interview Questions</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="navbar-collapse">
                            <div className="col-xl-9">
                                <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                                    <div className="nav-item w-100">
                                        <form className="rounded position-relative">
                                            <input className="form-control pe-4 bg-secondary bg-opacity-10 border-0 search-strings" type="search" placeholder="Search tutorials ..." id="search-strings" name="key" data-result="search-results" aria-label="Search" />
                                            <button type="button" id="btnSearch" className="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"><i className="fal fa-search fs-6"></i></button>
                                            <div className="search-box search-box-inn" id="search-results"></div>
                                            <div className="clear"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.tutorialspoint.com/latest/prime-packs" target="_self"><i className="fal fa-cubes me-1"></i>Prime Packs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.tutorialspoint.com/market/index.asp" target="_self"><i className="fal fa-play-circle me-1"></i>Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.tutorialspoint.com/latest/ebooks" target="_self"><i className="fal fa-book-reader me-1"></i>eBooks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.tutorialspoint.com/tutorialslibrary.htm" target="_self"><i className="fal fa-books me-1"></i>Library</a>
                            </li>
                            <li className="nav-item">
                                    <a className="nav-link" href="https://www.tutorialspoint.com/questions/index.php" target="_self"><i className="fal fa-money-check-edit me-1"></i> Articles</a>
                            </li>
                        </ul>
                    </div>         
                        {!token            
                            ?<div className="navbar-nav d-lg-inline-block nav-login">
                                <Link to="/login" className="btn btn-grey-border mb-0"><i className="fal fa-sign-in"></i> Login</Link>
                            </div>     
                            :<div className="navbar-nav d-lg-inline-block nav-login">
                                <Link onClick={onLogout} className="btn btn-grey-border mb-0"><i className="fal fa-sign-out"></i> Logout</Link>
                            </div>             
                        }
                </div>
            </nav>
        </header>
        {loader 
            ?<div className="wrap_loader" style={{display:"block"}}></div>
            : ''
        }
    </div>
  )
}

export default Header