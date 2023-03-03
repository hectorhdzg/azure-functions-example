const appInsights = require("applicationinsights");
appInsights.setup("YOUR_CONNECTION_STRING")
.setAutoCollectIncomingRequestAzureFunctions(true)
.setAutoCollectConsole(true,true)
.setInternalLogging(false, false)
.start();

import axios from "axios";
import { AzureFunction, Context } from "@azure/functions";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    var timeStamp = new Date().toISOString();
    await axios.get("https://{YOUR_AZURE_FN_DOMAIN}.azurewebsites.net/api/HttpTriggerTest?");
    await axios.get("https://{YOUR_AZURE_FN_DOMAIN}.azurewebsites.net/api/HttpTriggerTest?name=Error").catch(function (error) {
    });;

    if (myTimer.isPastDue) {
        context.log('Timer function is running late!');
    }
    context.log('Timer trigger function ran!', timeStamp);
};

export default timerTrigger;
