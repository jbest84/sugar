/* globals define, CoffeeScript */
define(["dojo/_base/xhr", "dojo/_base/lang"], function (xhr, lang) {
    return {
        load : function (id, parentRequire, load, config) {
            xhr.get({
                url: parentRequire.toUrl(id + ".coffee"),
                load: lang.hitch(this, function (text) {
                    try {
                        var compile = CoffeeScript.compile(text, { bare: true });
                        parentRequire.eval(compile);
                        parentRequire([id], function (v) {
                            load(v);
                        });
                    } catch (err) {
                        console.error(err); 
                    }
                })
            });
        }
    };
});
