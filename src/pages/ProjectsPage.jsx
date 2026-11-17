import React from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import { initialProjects } from "../data/portafolioData.js";

export function ProjectsPage() {
  const API_URL = 'https://api.github.com/users/elbno/repos?sort=updated&per_page=4';
  const { data: repos, loading, error } = useFetchApi(API_URL);

  return (
    <main className="projects-section">
      <header className="projects-section__header">
        <h1 className="projects-section__title">Proyectos y Repositorios</h1>
        <p className="projects-section__subtitle">
          Trabajos destacados de ingeniería y sincronización en tiempo real con la API de GitHub
        </p>
      </header>

      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', color: 'var(--accent)' }}>
           Proyectos Universitarios (E2)
        </h2>
        <div className="projects-section__grid">
          {initialProjects.map((project) => (
            <article key={project.id} className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__footer">
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-card__lang">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      
      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', color: 'var(--accent)' }}>
           Repositorios en Vivo (GitHub REST API)
        </h2>

        {loading && (
          <div className="projects-section__status" role="status" aria-live="polite">
            Cargando repositorios desde GitHub...
          </div>
        )}

        {error && (
          <div className="projects-section__status projects-section__status--error" role="alert">
            No fue posible conectar con GitHub: {error}
          </div>
        )}

        {!loading && !error && repos && (
          <div className="projects-section__grid">
            {repos.map((repo) => (
              <article key={repo.id} className="project-card">
                <h3 className="project-card__title">{repo.name}</h3>
                <p className="project-card__description">
                  {repo.description ?? 'Sin descripción proporcionada en el repositorio.'}
                </p>
                <div className="project-card__footer">
                  <span className="project-card__lang">{repo.language || 'N/A'}</span>
                  <span className="project-card__stars">⭐ {repo.stargazers_count}</span>
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    Ver código
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}