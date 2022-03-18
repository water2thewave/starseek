import { writable as internal, get } from 'svelte/store'
import { browser } from '$app/env' // sveltekit environment 

export function writable(key, initialValue) {
    
  const store = internal(initialValue)
  const {subscribe, set} = store
  // check if in client
  if(browser){
    const json = localStorage.getItem(key)
    if (json) { set(JSON.parse(json)) }
  } 
  
  return {
    set(value) {
    // check if in client
      if(browser){
        console.debug(`Localstorage saved. ${key}: `, value)
        localStorage.setItem(key, JSON.stringify(value))
      }
      set(value)
    },
    update(cb) {
      const value = cb(get(store))
      this.set(value)
    },
    subscribe
  }
} 