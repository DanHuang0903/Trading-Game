$(document).ready(function(){


const startBtn = $('#start_btn');
const login = $('#login');
const playground = $('#playground');
const RECORD = [[],[],[],[],[],[],[],[],[],[],[],[]];
let buys = [0,0,0,0,0,0];
let sells = [0,0,0,0,0,0];

const UNIT = [
    [],
    [70, 132, 82, 51, 149, 96],
    [73, 134, 81, 53, 150, 101],
    [70, 135, 77, 50, 152, 90],
    [69, 128, 69, 50, 150, 81],
    [76, 122, 66, 55, 135, 81],
    [80, 121, 59, 58, 122, 89],
    [72, 133, 65, 52, 121, 80],
    [65, 139, 66, 47, 115, 72],
    [58, 138, 72, 42, 103, 65],
    [59, 131, 65, 42, 108, 65],
    [56, 130, 66, 40, 107, 59]
]

let num = 0;


startBtn.click(function(){
    if($('#user_id').val() != ""){
        RECORD[0].push({round: '0'});
        process(0)
    }else{
        alert("User ID cannot be empty");
        return false;
    }
    
});

let a_value = 0;
let b_value = 0;
let c_value = 0;
let d_value = 0;
let e_value = 0;
let f_value = 0;

function process(num){
    $('#final_panel').hide();
    let cash = $('#cash').text();
    let user = $('#user_id').val();
        RECORD[num].push({user:$('#user_id').val()});
        login.hide();
        playground.show();


$('#buy_a').click(function(){

    let buy_num = $('#a_buy').val();
    let price = $('#a_buy').attr('price');
    let shares = $('#share_a').text();
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            $('#cash').text(cash);
            shares = parseInt(shares) + parseInt($('#a_buy').val())
            $('#share_a').text(shares);
            buys[0] += parseInt(buy_num);
    }
    

});

$('#buy_b').click(function(){

    let buy_num = $('#b_buy').val();
    let price = $('#b_buy').attr('price');
    let shares = $('#share_b').text();

    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            $('#cash').text(cash);
            $('#share_b').text(buy_num);
            shares = parseInt(shares) + parseInt($('#b_buy').val())
            $('#share_b').text(shares);
            buys[1] += parseInt(buy_num);
    }
    

});

$('#buy_c').click(function(){
    let buy_num = $('#c_buy').val();
    let price = $('#c_buy').attr('price');
    let shares = $('#share_c').text();
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
            //RECORD[num].push({C_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            shares = parseInt(shares) + parseInt($('#c_buy').val())
            $('#share_c').text(shares);
            buys[2] += parseInt(buy_num);
        }

});

$('#buy_d').click(function(){
    let buy_num = $('#d_buy').val();
    let price = $('#d_buy').attr('price');
    let shares = $('#share_d').text();
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
            //RECORD[num].push({D_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            shares = parseInt(shares) + parseInt($('#d_buy').val())
            $('#share_d').text(shares);
            buys[3] += parseInt(buy_num);
        }
});

$('#buy_e').click(function(){
    let shares = $('#share_e').text();
    let buy_num = $('#e_buy').val();
    let price = $('#e_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
            //RECORD[num].push({E_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            shares = parseInt(shares) + parseInt($('#e_buy').val())
            $('#share_e').text(shares);
            buys[4] += parseInt(buy_num);
        }

    

});

$('#buy_f').click(function(){
    let shares = $('#share_f').text();
    let buy_num = $('#f_buy').val();
    let price = $('#f_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
            //RECORD[num].push({F_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            shares = parseInt(shares) + parseInt($('#f_buy').val())
            $('#share_f').text(shares);
            buys[5] += parseInt(buy_num);
        }
    
});


$('#sell_a').click(function(){
    let shares = $("#share_a").text();
    let sell_num = $('#a_sell').val();
    let price = $('#a_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }
            cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_a').text(sell_num);
             
             shares = parseInt(shares) - parseInt(sell_num);
            $('#share_a').text(shares);
            sells[0] += parseInt(sell_num);

});

$('#sell_b').click(function(){
    let shares = $("#share_b").text();
    let sell_num = $('#b_sell').val();
    let price = $('#b_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }
        cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
        $('#cash').text(cash);
        $('#share_b').text(sell_num);
        shares = parseInt(shares) - parseInt(sell_num);
        $('#share_b').text(shares);
        sells[1] += parseInt(sell_num);
});

$('#sell_c').click(function(){
    let shares = $("#share_c").text();
    let sell_num = $('#c_sell').val();
    let price = $('#c_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }
            cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_c').text(sell_num);
             
             shares = parseInt(shares) - parseInt(sell_num);
            $('#share_c').text(shares);
            sells[2] += parseInt(sell_num);
        

});

$('#sell_d').click(function(){
    let shares = $("#share_d").text();
    let sell_num = $('#d_sell').val();
    let price = $('#d_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }
            cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_d').text(sell_num);
             
             shares = parseInt(shares) - parseInt(sell_num);
            $('#share_d').text(shares);
            sells[3] += parseInt(sell_num);
        

});

$('#sell_e').click(function(){
    let shares = $("#share_e").text();
    let sell_num = $('#e_sell').val();
    let price = $('#e_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }
            cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_e').text(sell_num);
             shares = parseInt(shares) - parseInt(sell_num);
            $('#share_e').text(shares);
            sells[4] += parseInt(sell_num);
        

});

$('#sell_f').click(function(){
    let shares = $("#share_f").text();
    let sell_num = $('#f_sell').val();
    let price = $('#f_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }

            cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_f').text(sell_num);
             
             shares = parseInt(shares) - parseInt(sell_num);
            $('#share_f').text(shares);
            sells[5] += parseInt(sell_num);

});
}

 $('#next').click(function(){
    let num = parseInt($('#round_num').text());
    a_value = parseInt( $('#share_a').text()) * parseInt($('#a_buy').attr('price'));
    b_value = parseInt( $('#share_b').text()) * parseInt($('#b_buy').attr('price'));
    f_value = parseInt( $('#share_f').text()) * parseInt($('#f_buy').attr('price'));
    e_value = parseInt( $('#share_e').text()) * parseInt($('#e_buy').attr('price'));
    d_value = parseInt( $('#share_d').text()) * parseInt($('#d_buy').attr('price'));
    c_value = parseInt( $('#share_c').text()) * parseInt($('#c_buy').attr('price'));
    let total = a_value + b_value + c_value + d_value + e_value + f_value + parseInt($('#cash').text());
    RECORD[num].push({round: num});
    RECORD[num].push({user:$('#user_id').val()});
    RECORD[num].push({A_buy:buys[0]},{B_buy: buys[1]},{C_buy: buys[2]},{D_buy: buys[3]},{E_buy: buys[4]},{F_buy: buys[5]});
    RECORD[num].push({A_sell:sells[0]},{B_sell: sells[1]},{C_sell: sells[2]},{D_sell: sells[3]},{E_sell: sells[4]},{F_sell: sells[5]});
    RECORD[num].push({total_value:total});
    buys = [0,0,0,0,0,0];
    sells = [0,0,0,0,0,0];

    num ++;
    if(num < 11){

        let inputs = document.getElementsByClassName("input_panel");
        for(let e of inputs){
            e.value = "0";
        }
        
        $('#round_num').text(num)
        $('#a_buy').attr('price', UNIT[num][0]);
        $('#a_unit').text(UNIT[num][0]);
        $('#b_buy').attr('price', UNIT[num][1]);
        $('#b_unit').text(UNIT[num][1]);
        $('#c_buy').attr('price', UNIT[num][2]);
        $('#c_unit').text(UNIT[num][2]);
        $('#d_buy').attr('price', UNIT[num][3]);
        $('#d_unit').text(UNIT[num][3]);
        $('#e_buy').attr('price', UNIT[num][4]);
        $('#e_unit').text(UNIT[num][4]);
        $('#f_buy').attr('price', UNIT[num][5]);
        $('#f_unit').text(UNIT[num][5]);

       // $('#chart').attr('src', 'img/Round ' + num + '.png');
    }else if(num == 11){
        RECORD[num].push({round: 'Final'});
        $('#next').hide();
        $('#final_panel').show();
        $('#input_panel').hide();
        $('#final_result').hide();
        $('#header').hide();
        $('#chart').attr('src', 'img/Round ' + num + '.png');
        let finalValue = parseInt($('#cash').text());
        let finalShare = [
            $('#share_a').text(),
            $('#share_b').text(),
            $('#share_c').text(),
            $('#share_d').text(),
            $('#share_e').text(),
            $('#share_f').text(),
         ]
        UNIT[num].forEach(function(e,i){
            finalValue += e * parseInt(finalShare[i]);
        });
        $('#final_value').text(finalValue);
        RECORD[num].push({user:$('#user_id').val()},{total_value:finalValue});

        const data = RECORD.flatMap(row => {
                const flatRow = {};
                row.forEach(obj => Object.assign(flatRow, obj));
                return flatRow;
              });
              const csv = Papa.unparse(data);
        console.log(csv);

        let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        let url = URL.createObjectURL(blob);

        let link = document.getElementById('log');
        link.setAttribute("href", url);
        link.setAttribute("download", "log.csv");

        const AWS = window.AWS;
        const s3 = new AWS.S3({
            profile: 'default',
            accessKeyId: 'AKIAW5DJH7M77U6EBCFH',
            secretAccessKey: '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',

        });
        const params = {
            Bucket: 'trading-game',
            Key: 'trading-game-clarkson/object.json',
            Body: JSON.stringify(RECORD),
            ContentType: 'application/json',
        };

        s3.putObject(params, (err, data) => {
            if(err){
                throw err;
            }
            console.log('success!');
        });
        
    }
 }); 
 
});
        
