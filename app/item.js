import m from 'mithril/hyperscript';

import SvgIcon from './svg-icon';

// m('path[d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"]') delete
// m('path[d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"]') edit
// m('path[d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z]"') check

// m('use[href="sprite.svg#ic_delete_24px"]')
// m('use[href="sprite.svg#ic_edit_24px"]')
// m('use[href="sprite.svg#ic_check_24px"]')

function oninit({attrs, state}) {
	state.flag = true;
}

function view({attrs, state}) {
	return m('tr', {onclick: () => state.flag = !state.flag,}, [
		m('td', {style: 'width: 33%;'}, state.flag),
		m('td#delete', {style: 'width: 33%;'}, state.flag ? m('label', m('svg#icon_delete', m('use[href="#ic_delete_24px"]'))) : []),
		m('td', {style: 'width: 33%;'}, state.flag ? m('label', m('svg#icon_edit', m('use[href="#ic_edit_24px"]'))) : m('svg', m('use[href="#ic_check_24px"]')))
	]);
}

export default {oninit, view};
