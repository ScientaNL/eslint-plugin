import { name, version } from '../package.json';
import { rules } from './rules';
const pluginName = '@scienta';
const plugin = {
	meta: {
		name: name,
		version: version
	},
	configs: {},
	rules: rules,
};

Object.assign(plugin.configs, {
	recommended: {
		plugins: {
			[pluginName]: plugin,
		},
		rules: Object.fromEntries(Object.keys(rules).map(ruleName => [`${pluginName}/${ruleName}`, 'error'])),
	}
});

module.exports = plugin;
