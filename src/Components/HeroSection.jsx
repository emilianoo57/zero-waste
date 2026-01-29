import styles from './CssModules/HeroSection.module.css'
export default function HeroSection () {
    return(
        <>
        <section className={styles.HeroSection}>
            <h1>Juntos, salvamos 2400kg de comida este mes</h1>
            <p>unete a nuestros 500+ vecinos en tu ciudad haciendo una diferencia tangible todos los dias</p>
        </section>
    </>
    );
}