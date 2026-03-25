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

        <header className="header" role="banner" aria-label="Заголовок сайту">
            <div className="header-title">
                <h1 className="title-ua" aria-label="Назва роботи українською">
                    Розробка веб-додатку підтримки прийняття рішень за різних умов
                </h1>
                <h2 className="title-en" aria-label="Назва роботи англійською">
                    Development of a web application to support decision-making under various conditions
                </h2>
            </div>
            <nav className="nav-bar" role="navigation" aria-label="Головна навігація">
                <ul role="list">
                    <li role="listitem">Короткий опис</li>
                    <li role="listitem">Ключові слова</li>
                    <li role="listitem">Мета Дослідження</li>
                    <li role="listitem">Основні завдання</li>
                    <li role="listitem">Очікувані результати</li>
                    <li role="listitem">Контактна інформація</li>
                </ul>
            </nav>
        </header>
        <main className="main" role="main" aria-label="Основний вміст">
            <section className="hero" aria-label="Головний банер">
                <div className="hero-container">
                    <div className="hero-text">
                        <h2 aria-label="Головний заголовок hero-секції">Приймай рішення структуровано</h2>
                        <p aria-label="Опис hero-секції">Сучасний інструмент для аналізу альтернатив на основі математичних методів</p>
                    </div>
                    <div className="hero-image">
                        <img src="" alt="Hero" aria-label="Ілюстрація процесу прийняття рішень"/>
                    </div>
                </div>
            </section>

            <section aria-label="Секція короткого опису">
                <h3 className="section-title" aria-label="Заголовок секції короткого опису">Короткий опис</h3>
                <p className="description-text" aria-label="Текст короткого опису">
                    {"Розробка веб-додатку для підтримки прийняття рішень, що реалізує метод аналізу ієрархій " + "(МАІ) та методи в умовах визначеності й ризику. Додаток допомагає користувачам " + "максимізувати позитивнийрезультат у бізнесі, кар'єрі та особистих рішеннях завдяки " + "математичному аналізу, перевірціузгодженості експертних оцінок (CR < 0,1) та наочній " + "візуалізації результатів."}
                </p>
            </section>

            <section aria-label="Секція ключових слів">
                <h3 className="section-title" aria-label="Заголовок секції ключових слів">Ключові слова</h3>
                <div className="keywords-list" role="list" aria-label="Список ключових слів">
                    <span className="keyword-tag" role="listitem">ASP.NET Core</span>
                    <span className="keyword-tag" role="listitem">React</span>
                    <span className="keyword-tag" role="listitem">JavaScript</span>
                    <span className="keyword-tag" role="listitem">Метод аналізу ієрархій (AHP)</span>
                    <span className="keyword-tag" role="listitem">Теорія прийняття рішень</span>
                    <span className="keyword-tag" role="listitem">Багаторівнева ієрархія критеріїв</span>
                    <span className="keyword-tag" role="listitem">{"Узгодженість матриць (CR < 0.1)"}</span>
                    <span className="keyword-tag" role="listitem">Прийняття рішень в умовах ризику</span>
                    <span className="keyword-tag" role="listitem">Прийняття рішень в умовах невизначеності</span>
                    <span className="keyword-tag" role="listitem">JWT аутентифікація</span>
                    <span className="keyword-tag" role="listitem">Entity Framework Core</span>
                    <span className="keyword-tag" role="listitem">Колаборація</span>
                </div>
            </section>

            <section aria-label="Секція мети дослідження">
                <h3 className="section-title" aria-label="Заголовок секції мети дослідження">Мета дослідження</h3>
                <p aria-label="Текст мети дослідження">
                    Метою проєкту є розробка сучасного, доступного та безпечного веб-
                    додатка, який надає користувачам інструменти для структурованого прийняття
                    рішень на основі математичних методів. Додаток покликаний допомогти
                    користувачам максимізувати позитивний результат від прийнятих рішень у
                    ключових сферах життя та бізнесу, надаючи чіткий, виважений аналіз
                    альтернатив.
                </p>
            </section>

            <section aria-label="Секція основних завдань">
                <h3 className="section-title" aria-label="Заголовок секції основних завдань">Основні завдання</h3>
                <ul className="tasks-list" role="list" aria-label="Список основних завдань">
                    <li role="listitem">
                        {"Реалізувати метод аналізу ієрархій (МАІ) з автоматичною перевіркою узгодженості матриць" +
                            "(CR < 0,1) та підтримкою багаторівневої ієрархії критеріїв."}
                    </li>
                    <li role="listitem">
                        Впровадити методи прийняття рішень в умовах визначеності та ризику (з можливістю задання
                        ймовірностей).
                    </li>
                    <li role="listitem">
                        Створити зручний інтерфейс із двома режимами роботи («експертний» – пряме заповнення
                        матриць, «спрощений» – попарне порівняння за допомогою питань) та наочною візуалізацією
                        результатів (діаграми, рейтинги).
                    </li>
                    <li role="listitem">
                        Забезпечити колаборацію: запрошення інших користувачів до спільної роботи над задачею,
                        збереження стану, бібліотеку шаблонів типових задач та інструмент «Мозковий штурм».
                    </li>
                    <li role="listitem">
                        Реалізувати безпечну аутентифікацію (JWT, email-підтвердження), адаптивний дизайн (від 360px
                        до 3440px) та повну локалізацію українською та англійською мовами.
                    </li>
                    <li role="listitem">
                        Реалізувати безпечну аутентифікацію (JWT, email-підтвердження), адаптивний дизайн (від 360px
                        до 3440px) та повну локалізацію українською та англійською мовами.
                    </li>
                </ul>
            </section>

            <section aria-label="Секція очікуваних результатів">
                <h3 className="section-title" aria-label="Заголовок секції очікуваних результатів">Очікувані результати</h3>
            </section>
        </main>

        <footer className="footer" role="contentinfo" aria-label="Нижній колонтитул сайту">
            <p aria-label="Інформація про авторські права">© 2026 Багно Тимофій | всі права захищено</p>
            <span aria-label="Контактна електронна пошта">t.bahno@student.sumdu.edu.ua</span>
        </footer>
    </>)
}

export default App
