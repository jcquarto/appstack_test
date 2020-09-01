// import quill from 'script-loader!quill/dist/quill.js';

import('raw-loader!quill/dist/quill.js').then((rawModule) =>
	eval.call(null, rawModule.default)
);
