export function guidGenerator() {
    var S4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return 'checkbox_' + S4() + '_' + S4()
}
