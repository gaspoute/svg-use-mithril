import m from 'mithril/hyperscript';
import mount from 'mithril/mount';
import inject from 'svg-injector';

function oninit(vnode) {
	vnode.state.flag = true;
}

function view(vnode) {
	return [
		m('img[src="sprite.svg"]', {oncreate: vnode => inject(vnode.dom)}),
		m('ul', {onclick: () => vnode.state.flag = !vnode.state.flag}, [
			m('li', {style: 'background: yellow; width: 33%;'}, vnode.state.flag),
			m('li', {style: 'background: yellow; width: 33%;'}, vnode.state.flag ? m('label', m('svg', m('use[href="#ic_delete_24px"]'))) : null),
			m('li', {style: 'background: blue; width: 33%;'}, vnode.state.flag ? m('label', m('svg', m('use[href="#ic_edit_24px"]'))) : m('svg', m('use[href="#ic_check_24px"]')))
		])
	];
}

mount(document.getElementById('app'), {oninit, view});
