/**
 * @format
 */

import {AppRegistry, AppState} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import Login from './src/screens/login';
//import Signup from './src/screens/signup';
import ForgotPassword from './src/screens/forgotPassword';
import changePassword from './src/screens/changePassword';
import organizations_list from './src/screens/organizations_list';
import Account from './src/screens/account';
import OTPVerification from './src/screens/OTPVerification';
import achievements from './src/screens/achievements';
import questionnaire from './src/screens/questionnaire';
import manageAddresses from './src/screens/manage_addresses';
import ApplicationForm from './src/screens/Forms/ApplicationForm';
import DonationHistory from './src/screens/DonationHistory';
import DonationRequestInfoPage from './src/screens/DonationRequestInfoPage';
import tabNavigation from './src/screens/tabNavigation';
import organizationRequests from './src/screens/organizationRequests';
import checkLocation from './src/components/Location';
import organizationRegPatients from './src/screens/organizationRegPatients';
import PrivateReceiversRequestList from './src/screens/privateRequests';
import OrganisationInfo from './src/screens/OrganisationInfo/OrganisationInfo';
import PatientDetails from './src/screens/PatientDetails/PatientDetails';
// import ChatScreen from './src/screens/ChatScreen';
// import MessagesScreen from './src/screens/MessagesScreen';
import Notifications from './src/screens/Notifications';


AppRegistry.registerComponent(appName, () => App);





