/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import RegisterTransactions from '../../../assets/LandingPage/05Characteristics/RegisterTransactions.png';
import ManageYourElectronicInvoicing from '../../../assets/LandingPage/05Characteristics/ManageYourElectronicInvoicing.png';
import ManageYourCustomers from '../../../assets/LandingPage/05Characteristics/ManageYourCustomers.png';
import CalculateIndicators from '../../../assets/LandingPage/05Characteristics/CalculateIndicators.png';
import ViewAndDownload from '../../../assets/LandingPage/05Characteristics/ViewAndDownload.png';
import ReceiveCounseling from '../../../assets/LandingPage/05Characteristics/ReceiveCounseling.png';
import MakingInformedDecisions from '../../../assets/LandingPage/05Characteristics/MakingInformedDecisions.png';
import styles from './styles.module.css';

interface AnimatedBlockProps {
    title: string;
    content: string;
    callAction: string;
    image: string;
    route: string;
    textButton: string;
}

function AnimatedBlockLeft({ title, content, callAction, image, route, textButton }: AnimatedBlockProps) {
    const [ ref, inView ] = useInView({
        triggerOnce: false,
        rootMargin: '-100px 0px',
    });

    const [ animated, setAnimated ] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimated(true);
        } else {
            setAnimated(false);
        }
    }, [ inView ]);

    const animateClass = animated ? styles.animateIn : '';


    return (
        <div className="m-5 d-flex align-items-center justify-content-center gap-4" ref={ref}>
            <div className={`${styles.containerEffectTitle} d-flex flex-column align-items-center justify-content-center`}>
                <div className={`${styles.effectTitle} p-0 w-100 overflow-hidden`}>                
                    <div className={`${styles.titleCharacteristics} ${animateClass} d-flex flex-title align-items-start justify-content-center`}>
                        <h2 className={`${styles.title} m-0 text-center`}>{title}</h2>
                    </div>
                </div>
                <div><p className={`${styles.textContent} m-0 `}>{content}</p></div>
                <div><p className={`${styles.textContent} m-2 `}>{callAction}</p></div>
                <div className={`${styles.containerRoute}  d-flex align-items-center justify-content-center w-100`}>
                    <Link to={`/${route}`} className={`${styles.buttonRoute} text-center text-decoration-none`} >{textButton}</Link>
                </div>
            </div>
            <div className={`${styles.containerImage} position-relative d-flex align-items-center justify-content-center overflow-hidden`}>
                <img src={image} alt="Ecopcion" className={styles.image} />
            </div>
        </div>
    );
}

function AnimatedBlockRight ({ title, content, callAction, image, route, textButton }: AnimatedBlockProps) {
    const [ ref, inView ] = useInView({
        triggerOnce: false,
        rootMargin: '-100px 0px',
    });

    const [ animated, setAnimated ] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimated(true);
        } else {
            setAnimated(false);
        }
    }, [ inView ]);

    const animateClass = animated ? styles.animateIn : '';


    return (
        <div className="m-5 d-flex align-items-center justify-content-center gap-4" ref={ref}>
            <div className={`${styles.containerImage} position-relative d-flex align-items-center justify-content-center overflow-hidden`}>
                <img src={image} alt="Ecopcion" className={styles.image} />
            </div>
            <div className={`${styles.containerEffectTitle} d-flex flex-column align-items-center justify-content-center`}>
                <div className={`${styles.effectTitle} p-0 w-100 overflow-hidden`}>                
                    <div className={`${styles.titleCharacteristics} ${animateClass} d-flex flex-title align-items-start justify-content-center`}>
                        <h2 className={`${styles.title} mt-5 text-center`}>{title}</h2>
                    </div>
                </div>
                <div><p className={`${styles.textContent} m-0 `}>{content}</p></div>
                <div><p className={`${styles.textContent} m-2 `}>{callAction}</p></div>
                <div className={`${styles.containerRoute}  d-flex align-items-center justify-content-center w-100`}>
                    <Link to={`/${route}`} className={`${styles.buttonRoute} text-center text-decoration-none`} >{textButton}</Link>
                </div>
            </div>
        </div>
    );
}

function Characteristics () {

    return (
        <div className={`${styles.container} mb-5 d-flex align-items-center justify-content-center`}> 
            <div> 
                <AnimatedBlockLeft
                    title="Registrar tus transacciones diarias"
                    content="Cada vez que realices una venta, ingrese dinero al negocio o hagas una compra o pago, podrás registrar el movimiento en tu libro diario digital."
                    callAction="Gestiona con nosotros tus cuentas e inventarios."
                    image={RegisterTransactions}
                    route="register-your-transactions"
                    textButton="Saber más"
                />
                <AnimatedBlockRight
                    title="Gestionar tus facturas electrónicas"
                    content="Una vez realices la venta, podrás enviar la factura a la Dian, recibir su aprobación e imprimir o enviar el documento a tu cliente. También si lo deseas, podrás reversar o anular tus facturas."
                    callAction="Gestiona con nosotros tus cuentas e inventarios."
                    image={ManageYourElectronicInvoicing}
                    route="manage-your-electronic-invoices"
                    textButton="¡Quiero ver!"
                />
                <AnimatedBlockLeft
                    title="Gestionar tus clientes y mejorar las ventas"
                    content="A través de nuestro CRM, podrás gestionar tus clientes y hacer seguimiento a tu proceso de ventas."
                    callAction="Gestiona con nosotros tus cuentas e inventarios."
                    image={ManageYourCustomers}
                    route="manage-your-customers"
                    textButton="El CRM ya!"
                />
                <AnimatedBlockRight
                    title="Gestión de la sostenibilida de tu negocio"
                    content="Lograr que tu negocio sea sostenible es uno de los propósitos fundamentales en ecopción. Con nosotros podrás dar el salto hacia la sostenibilidad cumpliendo con las normas ambientales, compartiendo con tus clientes la historia de impacto de tu negocio y tomando decisiones que, aumenten el impacto de tu empresa en la sociedad, el planeta y la economía local."
                    callAction="Gestiona con nosotros tus cuentas e inventarios."
                    image={CalculateIndicators}
                    route="calculate-indicators-plus"
                    textButton="Conoce cómo"
                />
                <AnimatedBlockLeft
                    title="Calcula + de 100 indicadores y genera reportes"
                    content="En cualquier momento, podrás calcular indicadores y generar informes que te permitan medir y entender cómo está la gestión de tu negocio en términos de plata, ventas e impacto generado en el planeta."
                    callAction="Gestiona con nosotros tus cuentas e inventarios."
                    image={ViewAndDownload}
                    route="view-download-reports"
                    textButton="Quiero saber más"
                />
                <AnimatedBlockRight
                    title="Recibir asesorías personalizadas"
                    content="Podrás agendar una cita de 20 minutos con asesores empresariales para tomar decisiones de tu negocio con base en los indicadores."
                    callAction="Gestiona con nosotros tus cuentas e inventarios."
                    image={ReceiveCounseling}
                    route="personalized-advisories"
                    textButton="Saber más"
                />
                <AnimatedBlockLeft
                    title="Notificaciones estratégicas"
                    content="Ecopcion te enviará notificaciones y/o avisos importantes y estratégicos que te ayudarán a tomar mejores decisiones sobre tu negocio."
                    callAction="Gestiona con nosotros tus cuentas e inventarios."
                    image={MakingInformedDecisions}
                    route="informed-decisions"
                    textButton="Intentémoslo"
                />
                <AnimatedBlockRight
                    title="Toma decisiones informadas"
                    content="Con base en la asesoría y el ejercicio de análisis hagas con posterioridad, podrás tomar la decisión en conjunto con tu equipo."
                    callAction="Gestiona con nosotros tus cuentas e inventarios."
                    image={ReceiveCounseling}
                    route="personalized-advisories"
                    textButton="Saber más"
                />
            </div>
        </div>
    );
}

export default Characteristics;