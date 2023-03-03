const appInsights = require("applicationinsights");
appInsights.setup("YOUR_CONNECTION_STRING")
.setAutoCollectIncomingRequestAzureFunctions(true)
.setAutoCollectConsole(true,true)
.setInternalLogging(false, false)
.start();


import axios from "axios";
import { AzureFunction, Context, HttpRequest } from "@azure/functions";


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    console.log("Reveived context in HTTP Trigger:" + JSON.stringify(context.traceContext));

    if (req.query.name == "Error") {
        throw new Error("Error query name");
    }
    const response = await axios.get("https://httpbin.org/status/200");
    const responseMessage = response.data;

    context.res = {
        body: responseMessage
    };

};

export default httpTrigger;