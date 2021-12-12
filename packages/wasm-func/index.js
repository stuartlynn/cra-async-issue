export const loadWasm = ()=>{
  console.log("loading wasm")
  return new Promise( (resolve,reject)=>{
    import("./pkg/index").then((module)=>{
      resolve(module)    
    })
    .catch( (error)=>{
      console.log("SOMETHING WENT WRONG ",error)
    })
  })
}
