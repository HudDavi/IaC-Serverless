import { DynamoDB } from "aws-sdk";

const getItem = async (event) => {
    const dynamodb = new DynamoDB.DocumentClient();
    const {id} = event.pathParameters
    let item;

    try {
        const result = await dynamodb.get({
            TableName: "ItemTable",
            Key: {id}
        }).promise();

        item = result.Item;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item),
    };
};

export const handler = getItem;