EAATLIuh6fY8BOyPlkb66raEOZByQqsf753gOdcX44AEeftYBHogFjShAMWZBNxMQp4Bm1b8IiARxHC16iT6ZCUCm6MxK8Ssb7dLTX8rLTrlTtdYhj7FhzmiOlhXuLwZBZBr9WL9vZAswGVZApylqxYdm5EJFGNDfNvEBo9x04I39OGh6d9bE5P0A9Tf51mLVxHO1OPccob9xYLxFVmZAIwZDZD; 

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/webhook", (req, res) => {
    const VERIFY_TOKEN = "EAATLIuh6fY8BOyPlkb66raEOZByQqsf753gOdcX44AEeftYBHogFjShAMWZBNxMQp4Bm1b8IiARxHC16iT6ZCUCm6MxK8Ssb7dLTX8rLTrlTtdYhj7FhzmiOlhXuLwZBZBr9WL9vZAswGVZApylqxYdm5EJFGNDfNvEBo9x04I39OGh6d9bE5P0A9Tf51mLVxHO1OPccob9xYLxFVmZAIwZDZD;";      const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token === VERIFY_TOKEN) {
        console.log("Webhook validado com sucesso!");
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);  // Se a validação falhar
    }
});

app.post("/webhook", (req, res) => {
    console.log("Mensagem recebida:", req.body);
    res.status(200).send("Evento recebido");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
