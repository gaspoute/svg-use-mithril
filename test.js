function oninit(vnode) {
	vnode.state.flag = true;
}

function view(vnode) {
	return [
		m('ul', {onclick: function() {vnode.state.flag = !vnode.state.flag}}, [
			m('li', {style: 'background: green; width: 33%;'}, vnode.state.flag),
			m('li', {style: 'background: yellow; width: 33%;'}, vnode.state.flag ? m('label', m('svg', m('use[href="#ic_delete_24px"]'))) : null),
			m('li', {style: 'background: blue; width: 33%;'}, vnode.state.flag ? m('label', m('svg', m('use[href="#ic_edit_24px"]'))) : m('svg', m('use[href="#ic_check_24px"]')))
		])
	];
}

const sprite = document.querySelector('#sprite');
SVGInjector(sprite);

m.mount(document.getElementById('app'), {oninit: oninit, view: view});
