# Sugar - Dojo AMD plugin for loading coffeescript
```coffeescript
define('some/coffeescript/module', [], () ->
  module = 
    someFunc : (arg) -> arg + 1
  )
```

```javascript
require(['sugar/cs!./some/coffeescript/module'], function(module) {
  // Loads your coffeescript files
});
```