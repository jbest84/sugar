# Sugar - Dojo AMD plugin for loading coffeescript

CoffeeScript Module:
```coffeescript
define('some/coffeescript/module', [], () ->
  module = 
    someFunc : (arg) -> arg + 1
  )
```

In your javascript:
```javascript
require(['sugar/cs!./some/coffeescript/module'], function(module) {
  // Loads your coffeescript files
  module.someFunc(100);
});
```