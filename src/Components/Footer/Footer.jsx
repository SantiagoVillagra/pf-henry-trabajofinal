import React from 'react';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Card className={styles.card}>
                <div className={styles.grid}>
                    {/* Primera División: Texto Descriptivo */}
                    <div className={styles.column}>
                        <h5>Sobre la Aplicación</h5>
                        <p>Esta aplicación está diseñada para ofrecer una experiencia de compra de zapatillas en línea intuitiva y eficiente. Utilizamos las últimas tecnologías para asegurar un rendimiento óptimo y una experiencia de usuario excepcional.</p>
                    </div>
                    
                    {/* Segunda División: Tecnologías Utilizadas */}
                    <div className={styles.column}>
                        <h5>Tecnologías Usadas</h5>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>PrimeReact</li>
                            <li>Axios</li>
                            <li>Cloudinary</li>
                        </ul>
                    </div>
                    
                    {/* Tercera División: Enlaces a LinkedIn */}
                    <div className={styles.column}>
                        <h5>Conéctanos en LinkedIn</h5>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/usuario1" target="_blank" rel="noopener noreferrer">Alvarez Daniel</a></li>
                            <li><a href="https://www.linkedin.com/in/usuario2" target="_blank" rel="noopener noreferrer">Perez Ciro</a></li>
                            <li><a href="https://www.linkedin.com/in/usuario3" target="_blank" rel="noopener noreferrer">Quintero Gustavo</a></li>
                            <li><a href="https://www.linkedin.com/in/usuario4" target="_blank" rel="noopener noreferrer">Villagra Santiago</a></li>
                        </ul>
                    </div>
                </div>
                <Divider />
                <div className={styles.textCenter}>
                    <p>&copy; 2024 Shopsport. Derechos reservados.</p>
                </div>
            </Card>
        </div>
    );
};

export default Footer;