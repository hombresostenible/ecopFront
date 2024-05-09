import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
// GENERALES
import WhatsApp from './components/WhatsApp/WhatsApp';
import Telegram from './components/WhatsApp/Telegram';
import Scroll from "./components/Scroll/Scroll";

// LANDINGPAGE
import LandingPage from './pages/LandingPage/LandingPage';

// NAVBAR DE LA LANDINGPAGE
import PaymentPlansPage from './pages/LandingPage/NavBarLandingPage/01PaymentPlans/PaymentPlansPage';
import ContactUsPage from './pages/LandingPage/NavBarLandingPage/02ContactUs/ContactUsPage';
import FastSimulatorPage from './pages/LandingPage/NavBarLandingPage/03FastSimulator/FastSimulatorPage';
import AppointmentPage from './pages/LandingPage/NavBarLandingPage/04Appointment/AppointmentPage';

// Registros
import RegisterPage from './pages/LandingPage/NavBarLandingPage/05Register/RegisterPage';
import RegisterUserPage from './pages/LandingPage/NavBarLandingPage/05Register/User/00RegisterUserPage';

// Login
import LoginPage from './pages/LandingPage/NavBarLandingPage/06Login/LoginPage';

// Sección de Body LandingPage
import RegisterYourTransactions from './components/LandingPage/05 Characteristics/01 RegisterYourTransactions/RegisterYourTransactions';
import ManageYourElectronicInvoices from './components/LandingPage/05 Characteristics/02 ManageYourElectronicInvoices/ManageYourElectronicInvoices';
import ManageYourCustomers from './components/LandingPage/05 Characteristics/03 ManageYourCustomers/ManageYourCustomers';
import CalculateIndicatorsPlus from './components/LandingPage/05 Characteristics/04 CalculateIndicatorsPlus/CalculateIndicatorsPlus';
import ViewDownloadReports from './components/LandingPage/05 Characteristics/05 ViewDownloadReports/ViewDownloadReports';
import PersonalizedAdvisories from './components/LandingPage/05 Characteristics/06 PersonalizedAdvisories/PersonalizedAdvisories';
import InformedDecisions from './components/LandingPage/05 Characteristics/07 InformedDecisions/InformedDecisions';

// Sección de Sustainability LandingPage
import Primer from './components/LandingPage/04 Sustainability/01 Primer/Primer';
import Segundo from './components/LandingPage/04 Sustainability/02 Segundo/Segundo';
import Tercer from './components/LandingPage/04 Sustainability/03 Tercer/Tercer';
import Cuarto from './components/LandingPage/04 Sustainability/04 Cuarto/Cuarto';

// FOOTER DE LA LANDINGPAGE
import Blog from './components/LandingPage/Footer/AboutUs/Blog/Blog';
import OurCompany from './components/LandingPage/Footer/AboutUs/OurCompany/OurCompany';
import KnowUs from './components/LandingPage/Footer/AboutUs/KnowUs/KnowUs';
import WorkWithUs from './components/LandingPage/Footer/AboutUs/WorkWithUs/WorkWithUs';
import AlliancesAndPrograms from './components/LandingPage/Footer/AboutUs/AlliancesAndPrograms/AlliancesAndPrograms';
import TermsAndConditions from './components/LandingPage/Footer/Legal/TermsAndConditions/TermsAndConditions';
import DataProcessing from './components/LandingPage/Footer/Legal/DataProcessing/DataProcessing';
import HabeasData from './components/LandingPage/Footer/Legal/HabeasData/HabeasData';
import MembershipAgreement from './components/LandingPage/Footer/Legal/MembershipAgreement/MembershipAgreement';
import Help from './components/LandingPage/Footer/Support/Help/Help';
import Trainings from './components/LandingPage/Footer/Support/Trainings/Trainings';
import APIDocumentation from './components/LandingPage/Footer/Support/APIDocumentation/APIDocumentation';

// PROTECCION DE RUTAS
import ProtectedRoute from './ProtectedRoute';
import ProfilePage from './pages/PanelUser/01Profile/ProfilePage';

//Error 404
import Error404 from './pages/Error404/Error404';

function App() {

    return (
        <div>
            <BrowserRouter>
                <WhatsApp />
                <Telegram />
                <Scroll />
                <Routes>
                    {/* LandingPage */}
                    <Route path='/' element={<LandingPage />} />
                        {/* Registros */}
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='/register-user' element={<RegisterUserPage />} />
                        {/* Login */}
                        <Route path='/login' element={<LoginPage />} />
                        {/* Recuperación de contraseñas y desbloqueos de cuenta de User */}

                        {/* Recuperación de contraseñas y desbloqueos de cuenta de Company */}

                        {/* Sección de NavBar LandingPage */}
                        <Route path='/paymentPlans' element={<PaymentPlansPage />} />
                        <Route path='/contactUs' element={<ContactUsPage />} />
                        <Route path='/fastSimulator' element={<FastSimulatorPage />} />
                        <Route path='/appointment' element={<AppointmentPage />} />

                        {/* Sección de Body LandingPage */}
                        <Route path='/register-your-transactions' element={<RegisterYourTransactions />} />
                        <Route path='/manage-your-electronic-invoices' element={<ManageYourElectronicInvoices />} />
                        <Route path='/manage-your-customers' element={<ManageYourCustomers />} />
                        <Route path='/calculate-indicators-plus' element={<CalculateIndicatorsPlus />} />
                        <Route path='/view-download-reports' element={<ViewDownloadReports />} />
                        <Route path='/personalized-advisories' element={<PersonalizedAdvisories />} />
                        <Route path='/informed-decisions' element={<InformedDecisions />} />
                        {/* Sección de Sustainability LandingPage */}
                        <Route path='/primer' element={<Primer />} />
                        <Route path='/segundo' element={<Segundo />} />
                        <Route path='/tercer' element={<Tercer />} />
                        <Route path='/cuarto' element={<Cuarto />} />
                        {/* Sección de Footer LandingPage */}
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/ourCompany' element={<OurCompany />} />
                        <Route path='/knowUs' element={<KnowUs />} />
                        <Route path='/workWithUs' element={<WorkWithUs />} />
                        <Route path='/alliancesAndPrograms' element={<AlliancesAndPrograms />} />
                        <Route path='/termsAndConditions' element={<TermsAndConditions />} />
                        <Route path='/dataProcessing' element={<DataProcessing />} />
                        <Route path='/habeasData' element={<HabeasData />} />
                        <Route path='/membershipAgreement' element={<MembershipAgreement />} />
                        <Route path='/help' element={<Help />} />
                        <Route path='/trainings' element={<Trainings />} />
                        <Route path='/apiDocumentation' element={<APIDocumentation />} />
                        {/* Rutas Protegidas */}
                        <Route element={<ProtectedRoute />}>
                        <Route path='/profile' element={<ProfilePage />} />
                            {/* Sección EcopcionApp */}

                            {/* Sección Home */}

                            {/* Sección Configuración del perfil */}

                            {/* Sección Sedes */}

                            {/* Sección Usuarios de plataforma del User o Company */}

                            {/* Sección Transacciones POS */}

                            {/* Sección AccountsBook */}

                            {/* Sección Tus Registros (Actvos, Mercancías, Productos, Materias Primas, Servicios) */}

                            {/* Sección CRM */}

                            {/* Sección Sales Funnel */}

                            {/* Sección Video Tutoriales */}

                            {/* Sección Reportar Errores o Mejoras */}

                            {/* Sección NavBar Indicadores */}

                            {/* Sección NavBar Indicadores Financieros */}

                            {/* Sección NavBar Indicadores de Mercadeo */}

                            {/* Sección NavBar Indicadores de Sostenibilidad */}
                        </Route>
                    {/* Sección Error 404 */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;