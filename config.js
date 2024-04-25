const mongoose = require('mongoose')
async function mongooseConnect() {
    await mongoose.connect(`mongodb+srv://shubhsemwal12:Semwal12@instaclone.y7paeb6.mongodb.net/?retryWrites=true&w=majority&appName=instaclone`).then(() => {
        console.log("CONNECTED")
    }).catch((err) => console.log(err, `not connect`))
}
exports.mongooseConnect = mongooseConnect;