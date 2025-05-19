import type { TSESLint } from '@typescript-eslint/utils';

declare const rules: Record<string, TSESLint.RuleModule<string, unknown[]>>;
declare const configs: Record<string, TSESLint.Linter.ConfigType>;

declare const meta: {
	name: string;
	version: string;
};

type ESLintPlugin = {
	meta: typeof meta;
	rules: typeof rules;
	configs: typeof configs;
};

declare const plugin: ESLintPlugin;

export default plugin
