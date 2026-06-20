function e(e){e.forEach(e=>{const t=localStorage.getItem(e);null!==t&&window.dispatchEvent(new CustomEvent("storageChange",{detail:{key:e,newValue:t}}))})}export{e as d};
