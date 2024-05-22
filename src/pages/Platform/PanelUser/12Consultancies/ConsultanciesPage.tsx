import { Link } from 'react-router-dom';
import NavBar from '../../../../components/Platform/NavBar/NavBar';
import SideBar from '../../../../components/Platform/SideBar/SideBar';
import Footer from '../../../../components/Platform/Footer/Footer';
import styles from './styles.module.css';

function ConsultanciesPage() {
    return (
        <div className='d-flex flex-column'>
            <NavBar />
            <div className='d-flex'>
                <SideBar />
                <div className={`${styles.container} d-flex flex-column align-items-center justify-content-between overflow-hidden overflow-y-auto`}>
                    <div className={`${styles.container__Component} overflow-hidden overflow-y-auto`}>
                        <h2>Asesoría para toma de decisiones</h2>
                        <p>Explicación sobre lo que se puede hacer en esta sección</p>
                        <div className='d-flex flex-column'>
                            <h4>Consulta con un asesor</h4>
                            <Link to='/inventories/consult-assets' >Consulta tus clientes</Link>
                            <Link to='/inventories/create-assets' >Crea tus clientes</Link>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default ConsultanciesPage;