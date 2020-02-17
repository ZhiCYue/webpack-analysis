'use strict'

import(/* webpackChunkName: "foo" */'./foo').then(({foo}) => {
    console.log(foo());
})

import(/* webpackChunkName: "bar" */'./bar').then(({bar}) => {
    console.log(bar());
})
