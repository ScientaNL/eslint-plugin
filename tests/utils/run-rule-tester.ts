import { RuleTester } from '@typescript-eslint/rule-tester';
import tsParser from "@typescript-eslint/parser"
import { RuleModule } from '@typescript-eslint/utils/ts-eslint';

export function runRuleTester<TMessageIds extends string, TOptions extends Readonly<unknown[]> = unknown[]>(props: {
	ruleName: string,
	messageId: TMessageIds,
	rule: RuleModule<TMessageIds, TOptions>,
	validStatements: string[],
	invalidStatements: string[],
}): void {
	(new RuleTester({
		languageOptions: {
			parser: tsParser,
		},
	})).run(props.ruleName, props.rule, {
		valid: props.validStatements.map((validStatement, idx) => ({
			name: `statement #${idx + 1}`,
			code: validStatement,
		})),
		invalid: props.invalidStatements.map((invalidStatement, idx) => ({
			name: `statement #${idx + 1}`,
			code: invalidStatement,
			errors: [{messageId: props.messageId}],
			output: props.validStatements[idx],
		})),
	});
}
