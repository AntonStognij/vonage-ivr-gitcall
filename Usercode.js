async function handler(input) {
    const { phone, code } = input;

    return {
        phone,
        code,
        status: "received"
    };
}

module.exports = { handler };
