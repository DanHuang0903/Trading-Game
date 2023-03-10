
const startBtn = $('#start_btn');
const login = $('#login');
const playground = $('#playground');
const RECORD = [[],[],[],[],[],[],[],[],[],[],[]]
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



//RECORD.push({round: $('#round_num').text()});




startBtn.click(function(){
    if($('#user_id').val() != ""){
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
    
    let cash = $('#cash').text();
    console.log()
    let user = $('#user_id').val();
    
        RECORD[num].push({user:$('#user_id').val()});
        login.hide();
        playground.show();
        console.log(RECORD);


$('#buy_a').click(function(){
    let buy_num = $('#a_buy').val();
    let price = $('#a_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
        console.log(RECORD[num]['A_Buy'])
        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.A_Buy){
                flag = true;
                console.log(value.A_Buy);
                cash = parseInt(cash) + parseInt(value.A_Buy) * parseInt(price);
                value.A_Buy = buy_num;
                cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
                $('#cash').text(cash);
                $('#share_a').text(buy_num);
            }

        });

        if(!flag){
            RECORD[num].push({A_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            $('#cash').text(cash);
            shares = $('#share_a').text();
            $('#share_a').text(buy_num);
            console.log(RECORD)
            console.log(RECORD[num].A_Buy)
            console.log(RECORD[num]['A_Buy'])
        }
    }
    

});

$('#buy_b').click(function(){

    let buy_num = $('#b_buy').val();
    let price = $('#b_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
        console.log(RECORD[num]['B_Buy'])
        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.B_Buy){
                flag = true;
                console.log(value.B_Buy);
                cash = parseInt(cash) + parseInt(value.B_Buy) * parseInt(price);
                value.B_Buy = buy_num;
                cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
                $('#cash').text(cash);
                $('#share_b').text(buy_num);
            }

        });

        if(!flag){
            RECORD[num].push({B_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            $('#cash').text(cash);
            $('#share_b').text(buy_num);
            console.log(RECORD)
        }

    }
    

});

$('#buy_c').click(function(){
    let buy_num = $('#c_buy').val();
    let price = $('#c_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
        console.log(RECORD[num]['C_Buy'])
        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.C_Buy){
                flag = true;
                console.log(value.C_Buy);
                cash = parseInt(cash) + parseInt(value.C_Buy) * parseInt(price);
                value.C_Buy = buy_num;
                cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
                $('#cash').text(cash);

                $('#share_c').text(buy_num);
            }

        });

        if(!flag){
            RECORD[num].push({C_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            $('#cash').text(cash);
    
            $('#share_c').text(buy_num);
            console.log(RECORD)
        }

    }

    

});

$('#buy_d').click(function(){
    let buy_num = $('#d_buy').val();
    let price = $('#d_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
        console.log(RECORD[num]['D_Buy'])
        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.D_Buy){
                flag = true;
                console.log(value.D_Buy);
                cash = parseInt(cash) + parseInt(value.D_Buy) * parseInt(price);
                value.D_Buy = buy_num;
                cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
                $('#cash').text(cash);
                $('#share_d').text(buy_num);
            console.log(RECORD)
            }

        });

        if(!flag){
            RECORD[num].push({D_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            $('#cash').text(cash);
            $('#share_d').text(buy_num);
            console.log(RECORD)
        }

    }
    

});

$('#buy_e').click(function(){
    let shares = $('#share_e').text();
    let buy_num = $('#e_buy').val();
    let price = $('#e_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
        console.log(RECORD[num]['E_Buy'])
        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.E_Buy){
                flag = true;
                console.log(value.E_Buy);
                cash = parseInt(cash) + parseInt(value.E_Buy) * parseInt(price);
                value.E_Buy = buy_num;
                cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
                $('#cash').text(cash);
                 $('#share_e').text(buy_num);
            }

        });

        if(!flag){
            RECORD[num].push({E_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            $('#cash').text(cash);
            $('#share_e').text(buy_num);
        }

    }
    

});

$('#buy_f').click(function(){
    let shares = $('#share_f').text();
    let buy_num = $('#f_buy').val();
    let price = $('#f_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
        console.log(RECORD[num]['F_Buy'])
        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.F_Buy){
                flag = true;
                console.log(value.F_Buy);
                cash = parseInt(cash) + parseInt(value.F_Buy) * parseInt(price);
                value.F_Buy = buy_num;
                cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
                $('#cash').text(cash);
                $('#share_f').text(buy_num);
            }

        });

        if(!flag){
            RECORD[num].push({F_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            $('#cash').text(cash);
            $('#share_f').text(buy_num);
        }

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

        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.A_Sell){
                flag = true;
                console.log(value.A_Sell);
                cash = parseInt(cash) - parseInt(value.A_Sell) * parseInt(price);
                shares = parseInt(shares) + parseInt(value.A_Sell);
                value.A_Sell = sell_num;
                cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
                $('#cash').text(cash);
                shares = parseInt(shares) - parseInt(sell_num);
                $('#share_a').text(shares);

            }

        });

        if(!flag){
            RECORD[num].push({A_Sell: sell_num});
            cash = parseInt(cash) - parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_a').text(sell_num);
             
             shares = parseInt(shares) - parseInt(sell_num);
             console.log(shares);
             console.log(sell_num);
            $('#share_a').text(shares);
            console.log(RECORD)
        }

});

$('#sell_b').click(function(){
    let shares = $("#share_b").text();
    let sell_num = $('#b_sell').val();
    let price = $('#b_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }

        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.B_Sell){
                flag = true;
                console.log(value.B_Sell);
                cash = parseInt(cash) - parseInt(value.B_Sell) * parseInt(price);
                shares = parseInt(shares) + parseInt(value.B_Sell);
                value.B_Sell = sell_num;
                cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
                $('#cash').text(cash);
                shares = parseInt(shares) - parseInt(sell_num);
                $('#share_b').text(shares);

            }

        });

        if(!flag){
            RECORD[num].push({B_Sell: sell_num});
            cash = parseInt(cash) - parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_b').text(sell_num);
             
             shares = parseInt(shares) - parseInt(sell_num);
             console.log(shares);
             console.log(sell_num);
            $('#share_b').text(shares);
            console.log(RECORD)
        }

});

$('#sell_c').click(function(){
    let shares = $("#share_c").text();
    let sell_num = $('#c_sell').val();
    let price = $('#c_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }

        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.C_Sell){
                flag = true;
                console.log(value.C_Sell);
                cash = parseInt(cash) - parseInt(value.C_Sell) * parseInt(price);
                shares = parseInt(shares) + parseInt(value.C_Sell);
                value.C_Sell = sell_num;
                cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
                $('#cash').text(cash);
                shares = parseInt(shares) - parseInt(sell_num);
                $('#share_c').text(shares);

            }

        });

        if(!flag){
            RECORD[num].push({C_Sell: sell_num});
            cash = parseInt(cash) - parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_c').text(sell_num);
             
             shares = parseInt(shares) - parseInt(sell_num);
             console.log(shares);
             console.log(sell_num);
            $('#share_c').text(shares);
            console.log(RECORD)
        }

});

$('#sell_d').click(function(){
    let shares = $("#share_d").text();
    let sell_num = $('#d_sell').val();
    let price = $('#d_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }

        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.D_Sell){
                flag = true;
                console.log(value.D_Sell);
                cash = parseInt(cash) - parseInt(value.D_Sell) * parseInt(price);
                shares = parseInt(shares) + parseInt(value.D_Sell);
                value.D_Sell = sell_num;
                cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
                $('#cash').text(cash);
                shares = parseInt(shares) - parseInt(sell_num);
                $('#share_d').text(shares);

            }

        });

        if(!flag){
            RECORD[num].push({D_Sell: sell_num});
            cash = parseInt(cash) - parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_d').text(sell_num);
             
             shares = parseInt(shares) - parseInt(sell_num);
             console.log(shares);
             console.log(sell_num);
            $('#share_d').text(shares);
            console.log(RECORD)
        }

});

$('#sell_e').click(function(){
    let shares = $("#share_e").text();
    let sell_num = $('#e_sell').val();
    let price = $('#e_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }

        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.E_Sell){
                flag = true;
                console.log(value.E_Sell);
                cash = parseInt(cash) - parseInt(value.E_Sell) * parseInt(price);
                shares = parseInt(shares) + parseInt(value.E_Sell);
                value.D_Sell = sell_num;
                cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
                $('#cash').text(cash);
                shares = parseInt(shares) - parseInt(sell_num);
                $('#share_e').text(shares);

            }

        });

        if(!flag){
            RECORD[num].push({E_Sell: sell_num});
            cash = parseInt(cash) - parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_e').text(sell_num);
             
             shares = parseInt(shares) - parseInt(sell_num);
             console.log(shares);
             console.log(sell_num);
            $('#share_e').text(shares);
            console.log(RECORD)
        }

});

$('#sell_f').click(function(){
    let shares = $("#share_f").text();
    let sell_num = $('#f_sell').val();
    let price = $('#f_buy').attr('price');
        if(parseInt(shares) < parseInt(sell_num)){
            alert("Have no enough shares");
            return false;
        }

        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.F_Sell){
                flag = true;
                console.log(value.F_Sell);
                cash = parseInt(cash) - parseInt(value.F_Sell) * parseInt(price);
                shares = parseInt(shares) + parseInt(value.F_Sell);
                value.F_Sell = sell_num;
                cash = parseInt(cash) + parseInt(sell_num) * parseInt(price);
                $('#cash').text(cash);
                shares = parseInt(shares) - parseInt(sell_num);
                $('#share_f').text(shares);

            }

        });

        if(!flag){
            RECORD[num].push({F_Sell: sell_num});
            cash = parseInt(cash) - parseInt(sell_num) * parseInt(price);
            $('#cash').text(cash);
             $('#share_f').text(sell_num);
             
             shares = parseInt(shares) - parseInt(sell_num);
             console.log(shares);
             console.log(sell_num);
            $('#share_f').text(shares);
            console.log(RECORD)
        }

});
}

 $('#next').click(function(){
    if(num < 11){
    let num = parseInt($('#round_num').text());
    a_value = parseInt( $('#share_a').text()) * parseInt($('#a_buy').attr('price'));
    b_value = parseInt( $('#share_b').text()) * parseInt($('#b_buy').attr('price'));
    f_value = parseInt( $('#share_f').text()) * parseInt($('#f_buy').attr('price'));
    e_value = parseInt( $('#share_e').text()) * parseInt($('#e_buy').attr('price'));
    d_value = parseInt( $('#share_d').text()) * parseInt($('#d_buy').attr('price'));
    c_value = parseInt( $('#share_c').text()) * parseInt($('#c_buy').attr('price'));

    let total = a_value + b_value + c_value + d_value + e_value + f_value + parseInt($('#cash').text());
    RECORD[num].push({total_value:total});
    console.log(RECORD);

    num ++;
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
    
   process(num);
    }
 })       
        
        
