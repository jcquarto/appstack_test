import '../stylesheets/application.scss';

require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
require('channels');

// BEGIN comment these 2 files out when trying to install theme
// because they already are part of the app.js in the theme
//import 'bootstrap';
//import 'bootstrap-daterangepicker';
// END

// BEGIN uncomment this file when trying to install theme
import 'app';
// END

global.$ = jQuery;
