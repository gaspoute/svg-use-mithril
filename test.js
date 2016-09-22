function oninit(vnode) {
	vnode.flag = true;
}

function view(vnode) {
	return [
		m('img[src="sprite.svg"]', {oncreate: function(vnode) {SVGInjector(vnode.dom)}}),
		m('ul', {onclick: function() {vnode.state.flag = !vnode.state.flag}}, [
			m('li', {style: 'background: yellow; width: 33%;'}, vnode.state.flag),
			m('li', vnode.state.flag ? m('label', m('svg', m('use[href="#ic_delete_24px"]'))) : null),
			m('li', {style: 'background: blue; width: 33%;'}, vnode.state.flag ? m('label', m('svg', m('use[href="#ic_edit_24px"]'))) : m('svg', m('use[href="#ic_check_24px"]')))
		])
	];
}

m.mount(document.getElementById('app'), {oninit: oninit, view: view});
