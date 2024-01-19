const { VoyageProvider, Wallet, LogicFactory} = require("js-moi-sdk");
const manifest = require("./Adder.json")

const MNEMONIC = "barely below broom excite wear slim wolf course loud amazing turkey mechanic";

const constructWallet = async () => {
    const provider = new VoyageProvider("babylon")
    const wallet = new Wallet(provider);
    await wallet.fromMnemonic(MNEMONIC, "m/44'/6174'/7020'/0/0");
    return wallet
}

const deployLogic = async()=>{
    const wallet = await constructWallet()

    console.log("------ Deploying Logic ----------")
    const logicFactory = new LogicFactory(manifest, wallet)
    const ix = await logicFactory.deploy("Init!", []).send({
        fuelPrice: 1,
        fuelLimit: 1000
    })

    const [ixReceipt, ixResult] = await Promise.all([
        ix.wait(),
        ix.result()
    ])
    
    console.log("------ Deployed Logic Successfully!! ----------")
    console.log("------ IX Receipt ----------")
    console.log(ixReceipt)
    console.log("------ IX Result ----------")
    console.log(ixResult)
    console.log("------ Logic Id ----------")
    console.log(ixResult.logic_id)

    
}

deployLogic()


//barely below broom excite wear slim wolf course loud amazing turkey mechanic

//0x03dfcbc0ec75552b15c862cc07b41d3e917433cc089caf01e146d98daed5cd1062