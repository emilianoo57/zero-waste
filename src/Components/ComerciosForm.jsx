import styles from './CssModules/ComercioForm.module.css'

export default function ComerciosForm() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <div className={styles.textContent}>
            <span className={styles.badge}>Programa de Socios</span>
            <h1 className={styles.title}>
              Convierte tu <span className={styles.highlight}>desperdicio</span> en beneficios
            </h1>
            <p className={styles.description}>
              Únete al movimiento Savfood y convierte el excedente de tu negocio en una fuente de ingresos sostenible. Llega hoy mismo a miles de héroes locales conscientes del medio ambiente en tu área.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputWrapper}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" /><path d="M3 7l9 6l9 -6" /></svg>
              </span>
              <input 
                className={styles.input}
                placeholder="Ingresa el correo de tu negocio" 
                type="email"
              />
            </div>
            <button className={styles.submitButton} type="submit">
              Unirme como Socio
            </button>
          </form>

          <div className={styles.stats}>
            <div className={styles.avatarGroup}>
              <div 
                className={styles.avatar}
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyzv0vsMz9dqr42d8Y6MbN2LBe0VSknKHZDNnnlv-1Mxml54nON4k3bIW2Zv838u0iTZzXLFyadMmmHYi6ibKMIpyGHIk-fSGAjuFnmXSeADYz7thIQVQ0w6nPThs5wjdPtOpYrSr-weVPjD94reIpQAM1BY0XPY8QrR4VJu2MK7zMHrXzhEMi_2tmNec9sTe7tWXLR4JhC9gEgtXUQ9UiZ4gfJe8z4lW-y7sqcFJK5sWPscSGJbcFOoJ6dJu47xugI3Omq4qC52jp')"}}
                aria-label="Imagen de perfil de comercio socio 1"
              />
              <div 
                className={styles.avatar}
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkeWe6NCINkMQBfz0mysgOf1jP1a_OrGqCWlHTyosg4WQFEO55oRi_A_ygbqNR5IxpidBQBIH8XnsHJr_zrfBh7S3N_0YjXD3Rf6UHg9eRZSuK-2pB-z7CWBJDNbabs72oMJdwzA5tm2jn5ukqZ5N5_qQ_4a5pBkwKfHdW2awoDTj3Ls6HH919pcqkHoUgKYArQOVy6mtUH0za5f2wDpAWEoqh7vR0HSrwBALY8waYWj2agHZD5ui1NM8XztdVT-4XyzPUN3Z_8_Cb')"}}
                aria-label="Imagen de perfil de comercio socio 2"
              />
              <div 
                className={styles.avatar}
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLg-t-1SaDO3Gb50BSeRPEFbO8feF8tWaRyM00en4NQlzS8L5o9EHrQJrRaKUwSaJCXKOb9MS19Bv29y0q_VYkly_jw5cNozagXwjl18F4hPZnWRqaW4RpFNzY7uvba8In7ZV-GO0OfkXUionttBANEmp115Ui7hN_SQngFgYbGVDtTWj3dQDJHhVV7GZ4DJeKgG-WLeGt_JQ7XQNRmcN4pYOEqzmg12sKCMbFJzX4TkkzGh1sihSOVuibTqhS-P1EoljXcpji1EQF')"}}
                aria-label="Imagen de perfil de comercio socio 3"
              />
            </div>
            <p className={styles.statsText}>
              <span className={styles.statsHighlight}>500+</span> negocios ya ahorrando desperdicios
            </p>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.glow}></div>
          <div className={styles.imageCard}>
            <div 
              className={styles.mainImage}
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlQ_-RjkSnB8fE1eitx4LT9YR1WGIkgKdVeHE_HHObx1dBg2XMk1O2QelAKZZw_j5sqUlZ8-uaF4d4z6Yio_yx7q662Ih4e0fpojy2LlfaymVEpYuThhgfJZQ98dywCWHaXfTZjkOJFpRuP_69CJzUoelYCNc6_ETYiwAQdpcdW6KsICrnSDIwyllw431g-C_n72_Sr1YaO1fzfHoo0A1j8LjRVcBMiPA2bkCe5iyMoZ2hz5aAhFu57lRBKsp5GxoyJ8hp09vVBryP')"}}
              aria-label="Interior de tienda local mostrando contenedores a granel"
            />
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <h3 className={styles.infoTitle}>La Despensa Verde</h3>
                <span className={styles.verifiedBadge}>Verificado</span>
              </div>
              <p className={styles.infoDescription}>
                Salvó 2,400kg de alimentos de vertederos este mes.
              </p>
              <div className={styles.infoStats}>
                <span className={`material-symbols-outlined ${styles.trendIcon}`}>trending_up</span>
                <span className={styles.trendText}>+12% crecimiento de ingresos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}