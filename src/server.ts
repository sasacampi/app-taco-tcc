import mockServer from "./mockBackend";

const PORT = 3000;
mockServer.listen(PORT, () => {
  console.log(`✅ Backend mockado rodando em http://localhost:${PORT}`);
});
