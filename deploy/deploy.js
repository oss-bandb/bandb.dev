var FtpDeploy = require("ftp-deploy")
var ftpDeploy = new FtpDeploy()

require("dotenv").config()

var config = {
    user: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    localRoot: __dirname + "./../public",
    remoteRoot: process.env.FTP_ROOT,
    include: ["*", "**/*"], // this would upload everything except dot files
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
}

console.log("Uploading...")

ftpDeploy
    .deploy(config)
    .then(res => console.log("Upload completed"))
    .catch(err => console.error(err))
