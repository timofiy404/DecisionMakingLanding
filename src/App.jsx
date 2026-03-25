import './App.css'
import Illustration from "./components/Illustration.jsx"
import {screenshot1, screenshot2, screenshot_result, screenshot_tips, sumdu_image } from "./assets/index.js"

function App() {
    return (<>
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "DecisionSupport",
                "description": "Web application for decision-making using decision theory methods",
                "author": {
                    "@type": "Person",
                    "name": "Tymofii Bahno"
                },
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "UAH"
                }
            })}
        </script>

        <header className="header" role="banner" aria-label="Site header">
            <div className="header-title">
                <h1 className="title-ua" aria-label="Work title in Ukrainian">
                    Development of a web application to support decision-making under various conditions
                </h1>
                <h2 className="title-en" aria-label="Work title in English">
                    Development of a web application to support decision-making under various conditions
                </h2>
            </div>
            <nav className="nav-bar" role="navigation" aria-label="Main navigation">
                <ul role="list">
                    <li role="listitem"><a href="#short-description">Short description</a></li>
                    <li role="listitem"><a href="#keywords">Keywords</a></li>
                    <li role="listitem"><a href="#goal">Research goal</a></li>
                    <li role="listitem"><a href="#main-tasks">Main tasks</a></li>
                    <li role="listitem"><a href="#results">Expected results</a></li>
                    <li role="listitem"><a href="#contacts">Contact information</a></li>
                </ul>
            </nav>
        </header>
        <main className="main" role="main" aria-label="Main content">
            <section className="hero" aria-label="Hero banner">
                <div className="hero-container">
                    <div className="hero-text">
                        <h2 aria-label="Hero section main title">Make structured decisions</h2>
                        <p aria-label="Hero section description">A modern tool for analyzing alternatives based on mathematical methods</p>
                    </div>
                    <div className="hero-image">
                        <img src={sumdu_image} alt="Hero" aria-label="Illustration of the decision-making process"/>
                    </div>
                </div>
            </section>

            <section className="section" aria-label="Relevance section">
                <h3 className="section-title" aria-label="Relevance section title">Relevance of the topic</h3>
                <p aria-label="Research relevance text">
                    Every adult constantly faces the need to make decisions that can significantly impact key areas of their life. In such situations, it is necessary to maximize the positive outcome of decisions made, which is achieved through decision theory methods. Existing software solutions are either too complex for unprepared users or lack the necessary functionality, particularly support for multi-level criteria hierarchies, consistency verification of expert assessments, and collaboration capabilities. Therefore, developing a modern, accessible, and intuitive web application is a relevant task.
                </p>
            </section>

            <section id="short-description" aria-label="Short description section">
                <h3 className="section-title" aria-label="Short description section title">Short description</h3>
                <p className="description-text" aria-label="Short description text">
                    {"Development of a web application to support decision-making that implements the analytic hierarchy process (AHP) and methods under certainty and risk. The application helps users maximize positive outcomes in business, career, and personal decisions through mathematical analysis, consistency verification of expert assessments (CR < 0.1), and clear visualization of results."}
                </p>
            </section>

            <section className="section" aria-label="Methodology section">
                <h3 className="section-title" aria-label="Methodology section title">Research methodology</h3>
                <p aria-label="Research methods description">
                    The work uses decision theory methods, particularly the analytic hierarchy process (AHP), decision-making methods under certainty and risk. A modern technology stack was chosen for the web application implementation: frontend on React.js with TypeScript, backend on ASP.NET Core, SQL Server database with Entity Framework Core. Authentication is implemented using JWT tokens with httpOnly cookies. CI/CD principles, unit testing, and API integration testing are used to ensure development quality.
                </p>
            </section>

            <section id="keywords" aria-label="Keywords section">
                <h3 className="section-title" aria-label="Keywords section title">Keywords</h3>
                <div className="keywords-list" role="list" aria-label="Keywords list">
                    <span className="keyword-tag" role="listitem">ASP.NET Core</span>
                    <span className="keyword-tag" role="listitem">React</span>
                    <span className="keyword-tag" role="listitem">JavaScript</span>
                    <span className="keyword-tag" role="listitem">Analytic Hierarchy Process (AHP)</span>
                    <span className="keyword-tag" role="listitem">Decision Theory</span>
                    <span className="keyword-tag" role="listitem">Multi-level Criteria Hierarchy</span>
                    <span className="keyword-tag" role="listitem">{"Matrix Consistency (CR < 0.1)"}</span>
                    <span className="keyword-tag" role="listitem">Decision Making Under Risk</span>
                    <span className="keyword-tag" role="listitem">Decision Making Under Uncertainty</span>
                    <span className="keyword-tag" role="listitem">JWT Authentication</span>
                    <span className="keyword-tag" role="listitem">Entity Framework Core</span>
                    <span className="keyword-tag" role="listitem">Collaboration</span>
                </div>
            </section>

            <section id="goal" aria-label="Research goal section">
                <h3 className="section-title" aria-label="Research goal section title">Research goal</h3>
                <p aria-label="Research goal text">
                    The goal of the project is to develop a modern, accessible, and secure web application that provides users with tools for structured decision-making based on mathematical methods. The application aims to help users maximize the positive outcome of their decisions in key areas of life and business by providing clear, well-considered analysis of alternatives.
                </p>
            </section>

            <section id="main-tasks" aria-label="Main tasks section">
                <h3 className="section-title" aria-label="Main tasks section title">Main tasks</h3>
                <ul className="tasks-list" role="list" aria-label="List of main tasks">
                    <li role="listitem">
                        {"Implement the analytic hierarchy process (AHP) with automatic consistency verification of matrices (CR < 0.1) and support for multi-level criteria hierarchy."}
                    </li>
                    <li role="listitem">
                        Implement decision-making methods under certainty and risk (with the ability to set probabilities).
                    </li>
                    <li role="listitem">
                        Create a user-friendly interface with two operating modes ("expert" – direct matrix filling, "simplified" – pairwise comparison through questions) and clear visualization of results (charts, ratings).
                    </li>
                    <li role="listitem">
                        Provide collaboration: inviting other users to work together on a task, saving state, a library of typical task templates, and a "Brainstorming" tool.
                    </li>
                    <li role="listitem">
                        Implement secure authentication (JWT, email confirmation), responsive design (from 360px to 3440px), and full localization in Ukrainian and English.
                    </li>
                    <li role="listitem">
                        Implement secure authentication (JWT, email confirmation), responsive design (from 360px to 3440px), and full localization in Ukrainian and English.
                    </li>
                </ul>
            </section>

            <section id="results" className="section" aria-label="Expected results section">
                <h3 className="section-title" aria-label="Expected results section title">Expected results</h3>
                <p aria-label="Expected results description">
                    As a result of the work, a fully functional web application will be created that allows:
                </p>
                <ul className="tasks-list" role="list" aria-label="List of expected results">
                    <li role="listitem">Conduct alternative analysis using the analytic hierarchy process with support for multi-level criteria hierarchy</li>
                    <li role="listitem">Automatically verify the consistency of pairwise comparison matrices (CR &lt; 0.1)</li>
                    <li role="listitem">Make decisions under certainty and risk with visualization of results</li>
                    <li role="listitem">Collaborate on tasks with other users through invitations</li>
                    <li role="listitem">Save and load tasks, use typical solution templates</li>
                    <li role="listitem">Conduct brainstorming to structure ideas before formalizing a task</li>
                </ul>
                <p style={{marginTop: "1rem"}} aria-label="Additional results">
                    An improvement in the quality of decisions made is expected through the use of mathematically sound methods and a reduction in the entry barrier for users thanks to an intuitive interface and Ukrainian localization.
                </p>
            </section>

            <section className="section" aria-label="Illustrative materials section">
                <h3 className="section-title" aria-label="Illustrations section title">Illustrative materials</h3>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                    <Illustration
                        src={screenshot2}
                        title="Set of criteria and alternatives"
                    />
                    <Illustration
                        src={screenshot1}
                        title="Pairwise comparison matrices"
                    />
                </div>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                    <Illustration
                        src={screenshot_tips}
                        title="User tips"
                    />
                    <Illustration
                        src={screenshot_result}
                        title="Clear results"
                    />
                </div>
            </section>
        </main>

        <footer id="contacts" className="footer" role="contentinfo" aria-label="Site footer">
            <p aria-label="Copyright information">© 2026 Tymofii Bahno | all rights reserved</p>
            <p aria-label="Contact email">email - t.bahno@student.sumdu.edu.ua</p>
            <p>The full text of the bachelor's thesis could be viewed at the following <a href="/">link</a>, if it existed</p>
        </footer>
    </>)
}

export default App