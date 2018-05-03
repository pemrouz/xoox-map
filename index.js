module.exports = fn => next => (acc, v) => next(acc, fn(v)) 
