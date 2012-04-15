define('./mod1', ['dojo/_base/array'], (array) ->
    console.log "In coffeescript test"
    test =
        sayHi : (name) -> "Hello #{ name }"
    return test)
