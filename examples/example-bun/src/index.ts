import { fetchSubstream } from "./fetch.js";
import { token } from "./token.js";
import { createConnectTransport } from "@bufbuild/connect-web";
import { createAuthInterceptor, createRegistry, unpackMapOutput } from "@substreams/core";
import { createRequest, streamBlocks } from "@substreams/proxy/client";

const SUBSTREAM = "https://github.com/streamingfast/substreams-uniswap-v3/releases/download/v0.2.1/substreams.spkg";
const MODULE = "map_pools_created";

const substream = await fetchSubstream(SUBSTREAM);
const registry = createRegistry(substream);
const transport = createConnectTransport({
  baseUrl: "https://substreams.fly.dev",
  interceptors: [createAuthInterceptor(token)],
  jsonOptions: {
    typeRegistry: registry,
  },
});

const request = createRequest({
  substreamPackage: substream,
  outputModule: MODULE,
  productionMode: false,
  startBlockNum: 17255000n,
  stopBlockNum: 17260000n,
});

for await (const item of streamBlocks(transport, request)) {
  const message = unpackMapOutput(item.response, registry);
  if (message !== undefined) {
    console.dir(message);
  }
}
