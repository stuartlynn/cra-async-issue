## Minimal example of issue when loading wasm through intermediate module 

This repo shows an issue I am having with loading wasm in a CRA app through an second module.

The module @wasm/wasm-func contains a single function called greet() which simple triggers an Alter.

If it is imported an initalized directly in the CRA, then everything is fine. However if it is imported in to the module @components/components and then that is imported to CRA, it no longer can find the chunk for the async import.

### To run 

1. Clone repo 
2. Install deps with `yarn`
3. Install rust and wasm_pack 
4. Build modules with 

```bash
yarn workspace @wasm/wasm-func run build-dev
```

and 

```bash
yarn workspace @components/components run build-dev 
```

finally run the main CRA 
```bash 
yarn workspace main run start 
```

