import { useState } from 'react'
import './App.css'

const features = [
  {
    title: 'Современный стек',
    description: 'React 19 + Vite 8 — молниеносная разработка и сборка',
    icon: '⚡',
  },
  {
    title: 'Адаптивный дизайн',
    description: 'Отлично выглядит на любом устройстве — от телефона до десктопа',
    icon: '📱',
  },
  {
    title: 'Тёмная тема',
    description: 'Автоматически подстраивается под системные настройки',
    icon: '🌙',
  },
  {
    title: 'Готово к деплою',
    description: 'Просто собери проект и выложи на Vercel, Netlify или GitHub Pages',
    icon: '🚀',
  },
]

function App() {
  const [active, setActive] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <div className="logo">ReactSite</div>
        <nav>
          <a href="#features">Возможности</a>
          <a href="#about">О проекте</a>
          <a href="#contact" className="btn-primary">
            Связаться
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>
              Красивый сайт
              <br />
              <span className="gradient">на React</span>
            </h1>
            <p className="hero-subtitle">
              Современный, быстрый и полностью адаптивный лендинг.
              Создан с нуля и готов к кастомизации.
            </p>
            <div className="hero-actions">
              <a href="#features" className="btn-primary">
                Смотреть возможности
              </a>
              <a
                href="https://github.com/kekih/react-website"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                GitHub →
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="card floating">
              <div className="card-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <pre>
                <code>{`function App() {
  return (
    <h1>Привет, мир! 👋</h1>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <h2>Что внутри</h2>
          <p className="section-subtitle">
            Всё необходимое для быстрого старта вашего проекта
          </p>
          <div className="features-grid">
            {features.map((f, i) => (
              <div
                key={i}
                className={`feature-card ${active === i ? 'active' : ''}`}
                onMouseEnter={() => setActive(i)}
              >
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-content">
            <h2>О проекте</h2>
            <p>
              Этот сайт создан как демонстрация чистого и современного подхода
              к разработке на React. Используется Vite для мгновенной горячей
              перезагрузки и оптимальной сборки.
            </p>
            <p>
              Код максимально простой и понятный — идеальная основа для вашего
              следующего проекта.
            </p>
            <ul className="tech-list">
              <li>React 19</li>
              <li>Vite 8</li>
              <li>CSS Variables</li>
              <li>Responsive</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Готовы начать?</h2>
          <p>Клонируйте репозиторий и запускайте за минуту</p>
          <div className="code-block">
            <code>
              git clone https://github.com/kekih/react-website.git
              <br />
              cd react-website
              <br />
              npm install
              <br />
              npm run dev
            </code>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} ReactSite · Сделано с ❤️ на React</p>
        <a
          href="https://github.com/kekih/react-website"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  )
}

export default App
