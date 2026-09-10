const { Vonage } = require("@vonage/server-sdk");

module.exports = async (data) => {
    const vonage = new Vonage({
        applicationId: data.vonageApplicationId,
        privateKey: data.vonagePrivateKey
    });

    const digits = String(data.code).split("").join(" ");

    const call = await vonage.voice.createOutboundCall({
        to: [
            {
                type: "phone",
                number: data.phone
            }
        ],
        from: {
            type: "phone",
            number: data.vonageFromNumber
        },
        ncco: [
            {
                action: "talk",
                text: `Ваш код ${digits}`
            }
        ]
    });

    data.call = call;

    return data;
};
