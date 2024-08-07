import styles from './styles.module.css';

function MailConfiguration () {
    
    return (
        <div className={`${styles.container} d-flex flex-column align-items-center justify-content-between overflow-hidden overflow-y-auto`}>
            <div className={`${styles.container__Component} overflow-hidden overflow-y-auto`}>
                <h1 className={`${styles.title} mb-4`}>Configuración de correo</h1>
                <p>Es necessario configurar tu correo electrónico para envío de emails a tus clientes, proveedores, Ecopción y demás.</p>
                <p>Desde Ecopción puedes configurar tus campañas de vetas para tus clientes donde les podrás informar sobre las novedades de tus productos y las promociones que tienes para ellos, como recomendación, puedes usar este medio para vender todos los articulos que tienen poca rotación en tu inventario, nosotros te enviaremos reportes periódicos sobre todo aquello que casi no se vende, para que obtegas de vuelta el dinero que tienes invertido allí y puedas darle un mejor uso.</p>
                <p>Además, es común de que tus clientes se contacten contigo y sea necesario el envío de una cotización</p>
                <p>Si contratas con nosotros el servicio de facturación electrónica, puede ser muy útil que luego de generar la factura, la puedas remitir al correo electrónico de tu cliente.</p>
                <p>De igual forma, si tienes algúna inquietud, duda o inconveniente con la plataforma de Ecopción, puedes enviar tu comunicación directamente desde nuestra plataforma.</p>
                <p>Para poder configurar tu correo, necesitamos que crees una cuenta de Gmail</p>
            </div>
        </div>
    );
}

export default MailConfiguration;