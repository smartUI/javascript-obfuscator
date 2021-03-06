/**
 * @returns {string}
 */
export function ConsoleOutputDisableExpressionTemplate (): string {
    return `
        var {consoleLogDisableFunctionName} = {singleNodeCallControllerFunctionName}(this, function () {            
            var func = function () {};
            
            {globalVariableTemplate}
                        
            if (!that.console) {
                that.console = (function (func){ 
                    var c = {}; 
                    
                    c.log = func;
                    c.warn = func; 
                    c.debug = func;
                    c.info = func;
                    c.error = func;
                    c.exception = func;
                    c.trace = func;
                    
                    return c; 
                })(func);
            } else {
                that.console.log = func;
                that.console.warn = func; 
                that.console.debug = func;
                that.console.info = func;
                that.console.error = func;
                that.console.exception = func;
                that.console.trace = func;
            }
        });
        
        {consoleLogDisableFunctionName}();
    `;
}
