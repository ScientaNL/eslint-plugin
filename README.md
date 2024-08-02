# @scienta/eslint-plugin

[![npm](https://img.shields.io/npm/v/@scienta/eslint-plugin)](https://www.npmjs.com/package/@scienta/eslint-plugin)
[![npm](https://img.shields.io/npm/dy/@scienta/eslint-plugin)](https://www.npmjs.com/package/@scienta/eslint-plugin)

The `@scienta/eslint-plugin` is a set of common ESLint rules used across Scienta projects.  
Supercharge your code quality with just one line! Try Scienta's ESLint plugin now:

```json
{
  "extends": ["@scienta/recommended"]
}
```

## Installation

To use this plugin, you can install it via npm. Run the following command in your project:

```shell
npm install --save-dev @scienta/eslint-plugin
```

## Usage

Explore ESLint rules with concise descriptions, examples, and configuration options for effective code linting.

The legend below explains what the symbols after the rule name mean.

| Symbol | Meaning                                                      |
|:------:|--------------------------------------------------------------|
|   👍    | The rule is enabled when using the recommended configuration |
|   🔧   | The rule support autofixing via `eslint --fix`               |

### Rule: `ng-component-decorator-props-order` 👍🔧

Unifies the order of the props in `@Component(props)`. 

#### Description

With this rule you can maintain a unified order of properties inside the **Angular** `@Component` decorator. The properties are ranked in the following order:

- selector
- exportAs
- templateUrl
- template
- styleUrl
- styleUrls
- styles
- host
- hostDirectives
- animations
- encapsulation
- changeDetection
- preserveWhitespaces
- standalone
- jit
- inputs
- outputs
- imports
- providers
- viewProviders
- queries
- schemas

#### Examples

Examples of code for this rule with the default config:

##### ❌ Incorrect

```ts
@Component({
	template: "<ng-content></ng-content>",
	selector: "example",
    // changeDetection shouldn't percede styleUrls
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ["example.component.scss"],
})
class ExampleComponent {}
```

##### ✅ Correct

```ts
@Component({
	selector: "example",
	template: "<ng-content></ng-content>",
	styleUrls: ["example.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
class ExampleComponent {}
```


### Rule: `ng-module-decorator-props-order` 👍🔧

Unifies the order of the props in `@NgModule(props)`.

#### Description

With this rule you can maintain a unified order of properties inside the **Angular** `@NgModule` decorator. The properties are ranked in the following order:

- id
- jit
- bootstrap
- imports
- providers
- schemas
- declarations
- exports

#### Examples

Examples of code for this rule with the default config:

##### ❌ Incorrect

```ts
@NgModule({
	declarations: [],
	imports: [],
	exports: []
})
class ExampleModule {}
```

##### ✅ Correct

```ts
@NgModule({
	imports: [],
	declarations: [],
	exports: []
})
class ExampleModule {}
```

## Support

If you encounter any issues or need assistance with using the plugin, you can reach out for support. For support or bug reporting, please create an issue on the GitHub repository.

## Contributing

If you would like to contribute to the development of this plugin, you are more than welcome to do so.

## License

This plugin is open-source and is distributed under the [MIT License](LICENSE).
