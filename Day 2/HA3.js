function launchBrowser(){

    let browserName = "chrome";
    if (browserName == "chrome"){
        console.log("BrowserName -", browserName);
    
    }else{
        console.log("BrowserName - ", browserName);
    }
}
launchBrowser()

function runTests(){
    //let testType = 'sanity'

        switch (testType) {
            case "smoke":
                console.log('smoke');
                break;
            case "sanity":
                    console.log('sanity');
                    break;
            case "regression":
                    console.log('regression');
                    break;
            default:
                console.log('smoke');
                
        }
}
//runTests()
let testType = 'regression'
runTests()