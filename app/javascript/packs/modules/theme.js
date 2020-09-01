/*
 * Add the right theme colors to the window object
 * so this can be used by the charts and vector maps
 * - classic (default)
 * - modern
 * - corporate
 */
theme = 'corporate';

switch (theme) {
	case 'corporate':
		theme = {
			primary: '#3A89FF',
			secondary: '#495057',
			tertiary: '#0069fc',
			success: '#4BBF73',
			info: '#1F9BCF',
			warning: '#f0ad4e',
			danger: '#d9534f',
		};
		break;

	case 'modern':
		theme = {
			primary: '#2c7be5',
			secondary: '#9D7BD8',
			tertiary: '#5997eb',
			success: '#4CAF50',
			info: '#47BAC1',
			warning: '#ff9800',
			danger: '#e51c23',
		};
		break;

	default:
		// "classic"
		theme = {
			primary: '#47BAC1',
			secondary: '#a180da',
			tertiary: '#5fc27e',
			success: '#5fc27e',
			info: '#5b7dff',
			warning: '#fcc100',
			danger: '#f44455',
		};
}

// Add theme to the window object
window.theme = theme;
