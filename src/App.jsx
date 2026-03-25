import './App.css'

function App() {
    return (<>
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "DecisionSupport",
                "description": "Веб-додаток для прийняття рішень методами теорії прийняття рішень",
                "author": {
                    "@type": "Person",
                    "name": "Багно Тимофій"
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

        <header className="header">
            <div className="header-title">
                <h1 className="title-ua">
                    Розробка веб-додатку підтримки прийняття рішень за різних умов
                </h1>
                <h2 className="title-en">
                    Development of a web application to support decision-making under various conditions
                </h2>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li>Короткий опис</li>
                    <li>Ключові слова</li>
                    <li>Мета Дослідження</li>
                    <li>Основні завдання</li>
                    <li>Очікувані результати</li>
                    <li>Контактна інформація</li>
                </ul>
            </nav>
        </header>
        <main className="main">
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>Приймай рішення структуровано</h1>
                        <p>Сучасний інструмент для аналізу альтернатив на основі математичних методів</p>
                    </div>
                    <div className="hero-image">
                        <img src="" alt="Hero"/>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="section-title">Короткий опис</h3>
                <p className="description-text">
                    {"Розробка веб-додатку для підтримки прийняття рішень, що реалізує метод аналізу ієрархій " + "(МАІ) та методи в умовах визначеності й ризику. Додаток допомагає користувачам " + "максимізувати позитивнийрезультат у бізнесі, кар'єрі та особистих рішеннях завдяки " + "математичному аналізу, перевірціузгодженості експертних оцінок (CR < 0,1) та наочній " + "візуалізації результатів."}
                </p>
            </section>

            <section>
                <h3 className="section-title">Ключові слова</h3>
                <div className="keywords-list">
                    <span className="keyword-tag">ASP.NET Core</span>
                    <span className="keyword-tag">React</span>
                    <span className="keyword-tag">JavaScript</span>
                    <span className="keyword-tag">Метод аналізу ієрархій (AHP)</span>
                    <span className="keyword-tag">Теорія прийняття рішень</span>
                    <span className="keyword-tag">Багаторівнева ієрархія критеріїв</span>
                    <span className="keyword-tag">{"Узгодженість матриць (CR < 0.1)"}</span>
                    <span className="keyword-tag">Прийняття рішень в умовах ризику</span>
                    <span className="keyword-tag">Прийняття рішень в умовах невизначеності</span>
                    <span className="keyword-tag">JWT аутентифікація</span>
                    <span className="keyword-tag">Entity Framework Core</span>
                    <span className="keyword-tag">Колаборація</span>
                </div>
            </section>

            <section>
                <h3 className="section-title">Мета дослідження</h3>
                <p>
                    Метою проєкту є розробка сучасного, доступного та безпечного веб-
                    додатка, який надає користувачам інструменти для структурованого прийняття
                    рішень на основі математичних методів. Додаток покликаний допомогти
                    користувачам максимізувати позитивний результат від прийнятих рішень у
                    ключових сферах життя та бізнесу, надаючи чіткий, виважений аналіз
                    альтернатив.
                </p>
            </section>

            <section>
                <h3 className="section-title">Основні завдання</h3>
                <ul className="tasks-list">
                    <li>
                        {"Реалізувати метод аналізу ієрархій (МАІ) з автоматичною перевіркою узгодженості матриць" +
                            "(CR < 0,1) та підтримкою багаторівневої ієрархії критеріїв."}
                    </li>
                    <li>
                        Впровадити методи прийняття рішень в умовах визначеності та ризику (з можливістю задання
                        ймовірностей).
                    </li>
                    <li>
                        Створити зручний інтерфейс із двома режимами роботи («експертний» – пряме заповнення
                        матриць, «спрощений» – попарне порівняння за допомогою питань) та наочною візуалізацією
                        результатів (діаграми, рейтинги).
                    </li>
                    <li>
                        Забезпечити колаборацію: запрошення інших користувачів до спільної роботи над задачею,
                        збереження стану, бібліотеку шаблонів типових задач та інструмент «Мозковий штурм».
                    </li>
                    <li>
                        Реалізувати безпечну аутентифікацію (JWT, email-підтвердження), адаптивний дизайн (від 360px
                        до 3440px) та повну локалізацію українською та англійською мовами.
                    </li>
                    <li>
                        Реалізувати безпечну аутентифікацію (JWT, email-підтвердження), адаптивний дизайн (від 360px
                        до 3440px) та повну локалізацію українською та англійською мовами.
                    </li>
                </ul>
            </section>

            <section>
                <h3 className="section-title">Очікувані результати</h3>
            </section>
        </main>

        <footer className="footer">
            <p>© 2026 Багно Тимофій | всі права захищено</p>
            <span>t.bahno@student.sumdu.edu.ua</span>
        </footer>
    </>)
}

export default App
