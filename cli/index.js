const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")




if(fs.existsSync(path.resolve("now.json"))){

    inquirer.prompt([{
    type : "confirm",
    name : "overwrite",
    message : "now.json already exists would you like to overwrite it?",
    default : false
}]).then((answers) => {
    if(answers.overwrite){
        buildConfig()
    }else{
        console.log("See ya.")
    }
}).catch(console.log)
}else{
    inquirer.prompt([{
    type : "confirm",
    name : "stuff",
    message : "How would you like to do some random stuff?",
    default : false
}]).then(answers => {
    if(answers){
        console.log(answers)
    }
}).catch(console.log)
}


async function buildConfig(){
    const res = await inquirer.prompt([{
        type : "confirm",
    name : "name",
    message : "What is the name of your project?",
    default : path.basename(process.cwd())
    }])

    console.log(res)
}
