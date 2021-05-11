const BHP_MAIN_IP = 'http://localhost:8080'
const BHP_MAIN_EXPLORER = 'http://localhost:8080'
const BHP_TEST_IP = 'https://http-testnet.bhpnet.io'
const BHP_TEST_EXPLORER = 'https://testnet.bhpnet.io'
const FIL_MAIN_IP = 'http://localhost:8080'
const FIL_MAIN_TOKEN = 'http://localhost:8080'
const TRON_MAIN_ALL_IP = 'http://localhost:8080'
const TRON_MAIN_SOLIDITY_IP = 'http://localhost:8080'

var BhpNetIp = ""
var BhpExplorer = ""

function init() {
    let currentNet = localStorage.getItem("network");
    if (currentNet == null || currentNet == "") {
        changeNet("testNet");
    } else {
        changeNet(currentNet);
    }
}

function changeNet(val) {
    if (val == "testNet") {
        localStorage.setItem("network", "testNet");
        BhpNetIp = BHP_TEST_IP;
        BhpExplorer = BHP_TEST_EXPLORER;
    } else {
        localStorage.setItem("network", "mainNet");
        BhpNetIp = BHP_MAIN_IP;
        BhpExplorer = BHP_MAIN_EXPLORER;
    }
}

function getIp() {
    return BhpNetIp;
}

function getExplorer() {
    return BhpExplorer;
}

function getFilIp() {
    return FIL_MAIN_IP;
}

function getFilConnector() {
    return {
        url: FIL_MAIN_IP,
        token: FIL_MAIN_TOKEN
    }
}

function getTronAllIp() {
    return TRON_MAIN_ALL_IP;
}

function getTronSolidityIp() {
    return TRON_MAIN_SOLIDITY_IP;
}

export default {
    init,
    changeNet,
    getIp,
    getExplorer,
    getFilIp,
    getFilConnector,
    getTronAllIp,
    getTronSolidityIp
}