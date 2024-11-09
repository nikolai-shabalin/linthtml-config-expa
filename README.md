# linthtml-config-expa


## Installation

```bash
npm i -D @linthtml/linthtml linthtml-config-expa 
```

## Utilization
When you have installed `linthtml-config-expa` locally in your project, apply it in the `.linthtmlrc` configuration file of your project:

```json
{
  "extends": "linthtml-config-expa"
}
```

### Config extension
Just add the `"rules"` key to your config after `"extends": "linthtml-config-expa"`, and then add your rules there.

For example, if you want to change the maximum length of `line-max-len`, you would:

```json
{
  "extends": "linthtml-config-expa",
  "rules": {
    "line-max-len": [
      true,
      120
    ]
  }
}
```
