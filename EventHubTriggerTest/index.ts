const bunyan = require('bunyan');
const winston = require('winston');
import { AzureFunction, Context } from "@azure/functions";

const bunyanLogger = bunyan.createLogger({ name: "EventHubTriggerLogger" });
const winstonLogger = winston.createLogger();

const eventHubTrigger: AzureFunction = async function (context: Context, eventHubMessages: any[]): Promise<void> {
    bunyanLogger.info("BunyanLogger Hello!");
    winstonLogger.log({ level: "info", message: "WinstonLogger Hello!" });

    context.log(`Eventhub trigger function called for message array ${eventHubMessages}`);

    eventHubMessages.forEach((message, index) => {
        context.log(`Processed message ${message}`);
    });
};

export default eventHubTrigger;
