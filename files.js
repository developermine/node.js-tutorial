const fs = require('fs')

// read files

fs.readFile('./doc/text.txt', (error, data) => {
    if(error) {
        console.log(error)
    }
    console.log(data.toString())
})

// Write files

fs.writeFile('./doc/text.txt', 'Hello NodeJs', () => {
    console.log('File replaced Successfully')
})

// Make a new Folder

if(!fs.existsSync('./asset')) {

fs.mkdir('./asset', (error) => {
    if(error){
        console.log(error)
    }
    console.log('new directory created')
})

} else {
    fs.rmdir('./asset', (error) => {
        if(error){
            console.log(error)
        }
        console.log('folder deleted')
    })
}

//deleting files

if(fs.existsSync('./doc/text.txt')) {
    fs.unlink('./doc/text.txt', (error) => {
        if (error){
            console.log(error)
        }
        console.log('file deleted')
    })
}

