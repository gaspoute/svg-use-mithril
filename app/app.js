import m from 'mithril/hyperscript';
import mount from 'mithril/mount';
import inject from 'svg-injector';

import Item from './item';

function oninit({state}) {
	state.items = ['1'];
}

function view({state}) {
	return [
		m('img[src="sprite.svg"]', {oncreate: vnode => inject(vnode.dom)}),
		m('table', {style: 'width: 100%;'}, state.items.map(item => {
			return m(Item, {key: item, item});
		}))
	];
}

mount(document.getElementById('app'), {oninit, view});
