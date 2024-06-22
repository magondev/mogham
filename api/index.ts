const fastify = require("fastify")();
const cors = require("@fastify/cors");

fastify.register(cors, {
	// Hier kannst du deine CORS-Optionen konfigurieren
});

fastify.get("/", async (request: any, reply: any) => {
	return "Änderung 1234 ASDF WWE ASDF";
});

// Konfiguration für den Server
const startServer = async () => {
	try {
		await fastify.listen({ port: 3001 });
		console.log(`Server läuft auf ${fastify.server.address().port}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

startServer();
