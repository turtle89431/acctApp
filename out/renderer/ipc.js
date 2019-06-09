const {ipcRenderer} =require("electron")

module.exports = class ipc{
    send(channel,data){
        ipcRenderer.send(channel,data)
    }
    set(obj){
        ipcRenderer.send("updatestate",obj)
    }
    reply(stateKey=null){
        let key={}
        
        ipcRenderer.on("update",(err,arg)=>{

            stateKey?key[`${stateKey}`]=arg:key=arg
            console.log(key);
            
            Main.setState(key)
        })
    }
}
 