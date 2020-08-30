// import 'script-loader!fullcalendar/main.js';

import('raw-loader!fullcalendar/main.js').then((rawModule) =>
	eval.call(null, rawModule.default)
);
