import { Link } from 'react-router-dom';
import Inventario from '../../../assets/Plataforma/Home/Inventario.png';
import LibroDiario from '../../../assets/Plataforma/Home/LibroDiario.png';
import FacturaElectronica from '../../../assets/Plataforma/Home/FacturaElectronica.png';
import Informes from '../../../assets/Plataforma/Home/Informe.png';
import CRM from '../../../assets/Plataforma/Home/CRM.png';
import Asesoria from '../../../assets/Plataforma/Home/Asesoria.png';
import NominaElectronica from '../../../assets/Plataforma/Home/NominaElectronica.png';
import Sostenibilidad from '../../../assets/Plataforma/Home/Sostenibilidad.png';
import Notificacion from '../../../assets/Plataforma/Home/Notificacion.png';
import styles from './styles.module.css';

function Panel() {

    return (
        <div>
            <h1 className={`${styles.title} text-center text-2xl font-bold`}>Bienvenido a Ecopción</h1 >
            <h3 className='text-center'>¿Qué quieres hacer hoy?</h3>
            <div className={`${styles.container__Panel} m-auto p-2 gap-3`} >
            
                <div className={`${styles.card__Section} m-auto d-flex align-items-center justify-content-between`} >
                    <Link to="/inventories" className="border-0 text-decoration-none d-flex align-items-center justify-content-center" >
                        <div className={`${styles.container__Image} d-flex align-items-center justify-content-center`} >
                            <img src={Inventario} alt="Registra o carga inventarios" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.cardTitle} p-2 d-flex align-items-center justify-content-center`} >
                            <h4 className={`${styles.subTitle} text-center`}>Inventarios</h4>
                        </div>
                    </Link>
                </div>

                <div className={`${styles.card__Section} m-auto d-flex align-items-center justify-content-between`} >
                    <Link to="/accounts" className="border-0 text-decoration-none d-flex align-items-center justify-content-center" >
                        <div className={`${styles.container__Image} d-flex align-items-center justify-content-center`} >
                            <img src={LibroDiario} alt="Registra tus transacciones diarias" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.cardTitle} p-2 d-flex align-items-center justify-content-center`} >
                            <h4 className={`${styles.subTitle} text-center`}>Cuentas</h4>
                        </div>
                    </Link>
                </div>

                <div className={`${styles.card__Section} m-auto d-flex align-items-center justify-content-between`} >
                    <Link to="/invoicing-and-pos" className="border-0 text-decoration-none d-flex align-items-center justify-content-center" >
                        <div className={`${styles.container__Image} d-flex align-items-center justify-content-center`} >
                            <img src={FacturaElectronica} alt="Facturación electrónica - gestiona tus facturas" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.cardTitle} p-2 d-flex align-items-center justify-content-center`} >
                            <h4 className={`${styles.subTitle} text-center`}>Facturación y POS</h4>
                        </div>
                    </Link>
                </div>

                <div className={`${styles.card__Section} m-auto d-flex align-items-center justify-content-between`} >
                    <Link to="/electronic-payroll" className="border-0 text-decoration-none d-flex align-items-center justify-content-center" >
                        <div className={`${styles.container__Image} d-flex align-items-center justify-content-center`} >
                            <img src={NominaElectronica} alt="Nomina electrónica" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.cardTitle} p-2 d-flex align-items-center justify-content-center`} >
                            <h4 className={`${styles.subTitle} text-center`}>Nomina electrónica</h4>
                        </div>
                    </Link>
                </div>

                <div className={`${styles.card__Section} m-auto d-flex align-items-center justify-content-between`} >
                    <Link to="/crm-clients/consult-crm-clients" className="border-0 text-decoration-none d-flex align-items-center justify-content-center" >
                        <div className={`${styles.container__Image} d-flex align-items-center justify-content-center`} >
                            <img src={CRM} alt="CRM" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.cardTitle} p-2 d-flex align-items-center justify-content-center`} >
                            <h4 className={`${styles.subTitle} text-center`}>CRM Clientes</h4>
                        </div>
                    </Link>
                </div>

                <div className={`${styles.card__Section} m-auto d-flex align-items-center justify-content-between`} >
                    <Link to="/crm-suppliers/consult-crm-suppliers" className="border-0 text-decoration-none d-flex align-items-center justify-content-center" >
                        <div className={`${styles.container__Image} d-flex align-items-center justify-content-center`} >
                            <img src={CRM} alt="CRM" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.cardTitle} p-2 d-flex align-items-center justify-content-center`} >
                            <h4 className={`${styles.subTitle} text-center`}>CRM Proveedores</h4>
                        </div>
                    </Link>
                </div>

                <div className={`${styles.card__Section} m-auto d-flex align-items-center justify-content-between`} >
                    <Link to="/sustainability" className="border-0 text-decoration-none d-flex align-items-center justify-content-center" >
                        <div className={`${styles.container__Image} d-flex align-items-center justify-content-center`} >
                            <img src={Sostenibilidad} alt="Sostenibilidad de tu negocio" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.cardTitle} p-2 d-flex align-items-center justify-content-center`} >
                            <h4 className={`${styles.subTitle} text-center`}>Sostenibilidad</h4>
                        </div>
                    </Link>
                </div>

                <div className={`${styles.card__Section} m-auto d-flex align-items-center justify-content-between`} >
                    <Link to="/reports-and-indicators" className="border-0 text-decoration-none d-flex align-items-center justify-content-center" >
                        <div className={`${styles.container__Image} d-flex align-items-center justify-content-center`} >
                            <img src={Informes} alt="Calcula indicadores/visualiza y descarga informes" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.cardTitle} p-2 d-flex align-items-center justify-content-center`} >
                            <h4 className={`${styles.subTitle} text-center`}>Reportes e indicadores</h4>
                        </div>
                    </Link>
                </div>

                <div className={`${styles.card__Section} m-auto d-flex align-items-center justify-content-between`} >
                    <Link to="/strategic-notifications" className="border-0 text-decoration-none d-flex align-items-center justify-content-center" >
                        <div className={`${styles.container__Image} d-flex align-items-center justify-content-center`} >
                            <img src={Notificacion} alt="Notificaciones estratégicas" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.cardTitle} p-2 d-flex align-items-center justify-content-center`} >
                            <h4 className={`${styles.subTitle} text-center`}>Notificaciones estratégicas</h4>
                            {/* Calendario tributario, CRM, inventario que mas rota, notificaciones de análisis de datos del negocio, información de tu ecosstema */}
                            {/* 
                            Notifcaciones reacionadas con obligaciones o trámites
                            Noticias, eventos convocatorias, leyes en trámite, temas de interes
                            Análiscic de datos, del negocio o de la industria
                            */}
                        </div>
                    </Link>
                </div>

                <div className={`${styles.card__Section} m-auto d-flex align-items-center justify-content-between`} >
                    <Link to="/consultancies" className="border-0 text-decoration-none d-flex align-items-center justify-content-center" >
                        <div className={`${styles.container__Image} d-flex align-items-center justify-content-center`} >
                            <img src={Asesoria} alt="Asesoría para toma de decisiones" className={`${styles.image}`} />
                        </div>
                        <div className={`${styles.cardTitle} p-2 d-flex align-items-center justify-content-center`} >
                            <h4 className={`${styles.subTitle} text-center`}>Asesoría para toma de decisiones</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Panel;