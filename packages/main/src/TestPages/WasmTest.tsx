import React, { useEffect, useState } from "react";
//@ts-ignore
import { loadWasm } from "@wasm/wasm-func";
import { loadWasmIndirectly } from "@components/components";

export const WasmTest: React.FC = () => {
  const [wasm, setWasm] = useState<any>(null);
  const [wasmError, setWasmError] = useState<any>(null);
  const [indirectWasm, setIndirectWasm] = useState<any>(null);
  const [indirectWasmError, setIndirectWasmError] = useState<any>(null);

  useEffect(() => {
    loadWasm()
      .then((wasm:any) => {
        setWasm(wasm);
        setWasmError(null);
      })
      .catch((e: any) => setWasmError(e));
  }, []);

  useEffect(() => {
    loadWasmIndirectly()
      .then((wasm:any) => {
        setIndirectWasm(wasm);
        setIndirectWasmError(null);
      })
      .catch((e: any) => setIndirectWasmError(e));
  }, []);

  return (
    <div>
      <h3> WASM TEST</h3>
      <h2> Attempting to load wasm directly from the @wasm/wasm-func module</h2>
      {wasm ? (
        <>
          <p>Successfully loaded. Click button to trigger alert</p>
          <button onClick={() => wasm.greet()}>Click Me</button>
        </>
      ) : (
        <p>Failed to load wasm from @wasm/wasm-func with error {wasmError}</p>
      )}

      <h2> Attempting to load wasm from the @components/components module</h2>

      {indirectWasm ? (
        <>
          <p>Successfully loaded. Click button to trigger alert</p>
          <button onClick={() => indirectWasm.greet()}>Click Me</button>
        </>
      ) : (
        <p>
          Failed to load wasm from @wasm/wasm-func with error{" "}
          {indirectWasmError}
        </p>
      )}
    </div>
  );
};
