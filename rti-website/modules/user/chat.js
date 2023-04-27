const chatController = require('../../controllers/chatController');

app.all("/chat", (req, res)=>{
    chatController.io
});