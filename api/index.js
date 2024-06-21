"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fastify = require("fastify")();
const cors = require("@fastify/cors");
fastify.register(cors, {
// Hier kannst du deine CORS-Optionen konfigurieren
});
fastify.get("/", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return "Änderung 1234";
}));
// Konfiguration für den Server
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fastify.listen({ port: 3001 });
        console.log(`Server läuft auf ${fastify.server.address().port}`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
});
startServer();
