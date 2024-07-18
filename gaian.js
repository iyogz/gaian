const axios = require("axios");
const fs = require('fs');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

;(async () => {
    try {
        console.log('BOT Auto SendCHAT GAIAN By [Peking404XYogiPrt666]\n\n');
        const addressList = await fs.readFileSync('keyword.txt', 'utf-8');
        const addressListArray = await addressList.split('\n');

        for (let index = 11; index < addressListArray.length; index++) {
            const Wallet = addressListArray[index];
            console.log("Content Chat: " + Wallet + "\n");

            try {
                const response = await axios.post(
                    'https://0x6b9a987c78e5dd6c0685e7cb8d20133ac9087451.us.gaianet.network/v1/chat/completions',
                    {
                        'messages': [
                            {
                                'role': 'system',
                                'content': 'You are a helpful assistant.'
                            },
                            {
                                'role': 'user',
                                'content': `${Wallet}`
                            }
                        ]
                    },
                    {
                        headers: {
                            'accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }
                );

                console.log("Response: [" + response.data.choices[0].message.content + "]\n");
                console.log("DONE MEK! \n\n");
                await delay(60000);
            } catch (postError) {
                console.error("Error during axios post: ", postError);
            }
        }
    } catch (error) {
        console.error("Error: ", error);
    }
})();
