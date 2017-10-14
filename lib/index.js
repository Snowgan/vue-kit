import KComponents from './components'

const KitPlugin = {
	install(Vue) {
		Object.keys(KComponents).forEach(key => {
			Vue.component(key, KComponents[key]);
		})
	},
};

export default KitPlugin;