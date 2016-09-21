var Item = {};

Item.oninit = function(vnode) {
	vnode.state.flag = true;
}

Item.view = function(vnode) {
	return m('tr', {onclick: function() {vnode.state.flag = !vnode.state.flag}}, [
		m('td', {style: 'width: 33%;'}, vnode.state.flag),
		m('td#delete', {style: 'width: 33%;'}, vnode.state.flag ? m('label', m('svg#icon_delete', m('use[href="#ic_delete_24px"]'))) : null),
		m('td', {style: 'width: 33%;'}, vnode.state.flag ? m('label', m('svg#icon_edit', m('use[href="#ic_edit_24px"]'))) : m('svg', m('use[href="#ic_check_24px"]')))
	]);
}

function view(vnode) {
	return [
		m('img[src="sprite.svg"]', {oncreate: function(vnode) {SVGInjector(vnode.dom)}}),
		m('table', {style: 'width: 100%;'},  m(Item, {item: 1}))
	];
}

m.mount(document.getElementById('app'), {view: view});
