import m from 'mithril/hyperscript';

function view({attrs}) {
	const {icon, ...rest} = attrs;
	const href = `sprite.svg#ic_${icon}_24px`;
	return m('svg', rest, m('use', {href}));
}

export default {view};
