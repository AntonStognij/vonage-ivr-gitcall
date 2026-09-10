module.exports = (data) => {
    data.env = {
        test: process.env.TEST_VARIABLE
    };

    return data;
};
