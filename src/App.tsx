import './App.css'

interface TimelineEvent {
  year: number
  title: string
  description: string
}

function App() {
  const stats = [
    { value: '750 t', label: 'Produkcji miesięcznie' },
    { value: '40', label: 'Lat prowadzenia firmy' },
    { value: '34 500 m²', label: 'Powierzchni uprawy' }
  ]

  const timeline: TimelineEvent[] = [
    {
      year: 1986,
      title: 'Założenie firmy',
      description: 'Początek rodzinnej tradycji uprawy pieczarek'
    },
    {
      year: 2010,
      title: 'Modernizacja',
      description: 'Wdrożenie nowoczesnych technologii uprawy'
    },
    {
      year: 2020,
      title: 'Ekspansja',
      description: 'Rozszerzenie mocy produkcyjnych'
    },
    {
      year: 2025,
      title: 'Nowy zakład produkcyjny',
      description: 'Zakup zakładu o powierzchni 3 500 m² wraz z magazynem chłodniczym w Rudniku'
    }
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">🍄 Chibowski</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#stats">O nas</a></li>
            <li><a href="#timeline">Historia</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Chibowski</h1>
          <p>Świeże Pieczarki i Boczniaki - Polska Uprawa</p>
          <p className="subtitle">Tradycja i nowoczesność od 1986 roku</p>
          <button className="cta-button">Skontaktuj się</button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats">
        <h2>Nasze osiągnięcia</h2>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>O firmie Chibowski</h2>
        <div className="about-content">
          <p>
            Chibowski to rodzinna firma z ponad 40-letnim doświadczeniem w uprawie pieczarek. 
            Oferujemy świeże pieczarki białe, brązowe, boczniaki i portobello najwyższej jakości.
          </p>
          <p>
            Nasza produkcja wynosi 750 ton pieczarek miesięcznie na powierzchni 34 500 m². 
            Zajmujemy się hodowlą w nowoczesnych warunkach kontrolowanych, gwarantujących 
            najwyższą jakość i świeżość produktu.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="timeline">
        <h2>Historia Chibowski</h2>
        <div className="timeline-container">
          {timeline.map((event, idx) => (
            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker">{event.year}</div>
              <div className="timeline-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Skontaktuj się z nami</h2>
        <div className="contact-info">
          <p>📧 Email: kontakt@chibowski.com</p>
          <p>📞 Telefon: +48 789 565 959</p>
          <p>📍 Lokalizacja: Rudnik, Polska</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Chibowski. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  )
}

export default App
