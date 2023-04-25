import { DynamoDB } from "aws-sdk";

const getItems = async (event) => {
    const dynamodb = new DynamoDB.DocumentClient();
    let items;

    try {
        const results = await dynamodb.scan({
            TableName: "ItemTable"
        }).promise();

        items = results.Items;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
};

export const handler = getItems;