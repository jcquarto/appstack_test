import '../stylesheets/application.scss';

require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
require('channels');
//require('jquery');

global.$ = require('jquery');
window.jQuery = $;
window.$ = $;

import 'bootstrap';

// Global
import './modules/bootstrap';
// remember to set the theme in the following file so external plugins with have colors to work with
import './modules/theme';

import './modules/dragula';
import './modules/feather';
import './modules/moment';
import './modules/sidebar';
import './modules/toastr';
import './modules/user-agent';

// Charts
import './modules/chartjs';
// import './modules/apexcharts';

// Forms
import './modules/daterangepicker';
import 'bootstrap-daterangepicker';
import './modules/datetimepicker';
import './modules/fullcalendar';
import './modules/markdown';
import './modules/mask';
import './modules/quill';
import './modules/select2';
import './modules/validation';
import './modules/wizard';

// Tables
import './modules/datatables';
