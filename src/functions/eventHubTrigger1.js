const { app } = require('@azure/functions');

app.eventHub('eventHubTrigger1', {
    connection: 'ProdLiveEventHub_iothubroutes_ProdEmiCoIOTHub_EVENTHUB',
    eventHubName: 'telemetryhub',
    cardinality: 'many',
    handler: (messages, context) => {
        if (Array.isArray(messages)) {
            context.log(`Event hub function processed ${messages.length} messages`);
            for (const message of messages) {
                context.log('Event hub message:', message);
            }
        } else {
            context.log('Event hub function processed message:', messages);
        }
    }
});
