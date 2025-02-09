import React from "react";

const Portfolio = () => {
  return (
    <div class="portfolio-container">
      <header class="header">
        <div class="header-content">
          <img
            src="https://via.placeholder.com/150"
            alt="Photo de l'avocat"
            class="profile-pic"
          />
          <h1>Ahmed Benali</h1>
          <p class="tagline">
            Avocat spécialisé en Droit des affaires et Droit fiscal
          </p>
          <div class="social-links">
            <a href="#" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </header>

      <section class="about-section">
        <h2>À propos de moi</h2>
        <p>
          Je suis Ahmed Benali, un avocat passionné par le droit des affaires et
          la fiscalité. Avec plus de 10 ans d'expérience, j'ai accompagné de
          nombreuses entreprises dans leurs projets de fusions-acquisitions et
          de conseil fiscal.
        </p>
        <a href="#" class="btn-primary">
          Télécharger mon CV
        </a>
      </section>

      <section class="specialisations-section">
        <h2>Mes spécialisations</h2>
        <div class="specialisations-grid">
          <div class="specialisation-card">
            <i class="fas fa-balance-scale fa-3x"></i>
            <h3>Droit des affaires</h3>
            <p>
              Conseil en fusions-acquisitions, contrats commerciaux, et droit
              des sociétés.
            </p>
          </div>
          <div class="specialisation-card">
            <i class="fas fa-chart-line fa-3x"></i>
            <h3>Droit fiscal</h3>
            <p>
              Optimisation fiscale, conseil en fiscalité internationale, et
              litiges fiscaux.
            </p>
          </div>
          <div class="specialisation-card">
            <i class="fas fa-users fa-3x"></i>
            <h3>Droit de la famille</h3>
            <p>Divorces, successions, et médiation familiale.</p>
          </div>
        </div>
      </section>

      <section class="experience-section">
        <h2>Mon expérience</h2>
        <div class="experience-timeline">
          <div class="timeline-item">
            <h3>Cabinet Benali & Associés</h3>
            <p class="date">2013 - Présent</p>
            <p>
              Associé - Spécialisé dans les fusions-acquisitions et le conseil
              fiscal.
            </p>
          </div>
          <div class="timeline-item">
            <h3>Cabinet Legal Maroc</h3>
            <p class="date">2010 - 2013</p>
            <p>
              Collaborateur - Conseil juridique pour des entreprises
              internationales.
            </p>
          </div>
        </div>
      </section>

      <section class="skills-section">
        <h2>Mes compétences</h2>
        <div class="skills-grid">
          <div class="skill-card">
            <i class="fas fa-file-contract fa-2x"></i>
            <p>Rédaction d'actes juridiques</p>
          </div>
          <div class="skill-card">
            <i class="fas fa-handshake fa-2x"></i>
            <p>Négociation</p>
          </div>
          <div class="skill-card">
            <i class="fas fa-gavel fa-2x"></i>
            <p>Plaidoirie</p>
          </div>
        </div>
      </section>

      <section class="contact-section">
        <h2>Contactez-moi</h2>
        <div class="contact-info">
          <p>
            <i class="fas fa-map-marker-alt"></i> 12 Rue Mohamed Diouri,
            Casablanca
          </p>
          <p>
            <i class="fas fa-phone"></i> +212 6 12 34 56 78
          </p>
          <p>
            <i class="fas fa-envelope"></i> ahmed.benali@cabinet.ma
          </p>
        </div>
        <form class="contact-form">
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Votre message" rows="5" required></textarea>
          <button type="submit" class="btn-primary">
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
