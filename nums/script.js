const $luckyNums = $('#lucky-num-facts');
const $mulitNum = $('#multi-num-facts');

async function get_num_facts() {
    let resp = await axios.get('http://numbersapi.com/7,10,8,122');
    for (let num in resp.data) {
        $mulitNum.append(`<li>${resp.data[num]}</li>`);
    }

}

async function get_lucky_num_facts() {
    let resp = await Promise.all([
        axios.get('http://numbersapi.com/138'),
        axios.get('http://numbersapi.com/138'),
        axios.get('http://numbersapi.com/138'),
        axios.get('http://numbersapi.com/138')
      ]);

    for (let num of resp) {
        $luckyNums.append(`<li>${num.data}</li>`);
    }

}

 get_num_facts();
 get_lucky_num_facts();