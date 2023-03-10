
const startBtn = $('#start_btn');
const login = $('#login');
const playground = $('#playground');
const RECORD = [[],[],[],[],[],[],[],[],[],[],[],[]];
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
    $('#final_panel').hide();
    let cash = $('#cash').text();
    let user = $('#user_id').val();
        RECORD[num].push({user:$('#user_id').val()});
        login.hide();
        playground.show();

let flag_a = false;
$('#buy_a').click(function(){
    
    let buy_num = $('#a_buy').val();
    let price = $('#a_buy').attr('price');
    let shares = $('#share_a').text();
    
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
        let flag = false;
        console.log(RECORD[num]);
        console.log(num)
        RECORD[num].forEach(function(value){
            console.log(typeof value.A_Buy == "undefined");
            if(value.A_Buy){
                console.log("run");
                flag = true;
                cash = parseInt(cash) + parseInt(value.A_Buy) * parseInt(price);
                shares = parseInt(shares) - parseInt(value.A_Buy)
                value.A_Buy = buy_num;
                cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
                $('#cash').text(cash);
                shares = parseInt(shares) + parseInt($('#a_buy').val())
                $('#share_a').text(shares);
                
            }
        });

        if(!flag){
            shares = $('#share_a').text();
            console.log("test");
            console.log(shares);
            RECORD[num].push({A_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            $('#cash').text(cash);
            shares = parseInt(shares) + parseInt($('#a_buy').val())
            $('#share_a').text(shares);
        }
    }
    

});

$('#buy_b').click(function(){

    let buy_num = $('#b_buy').val();
    let price = $('#b_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
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
        }

    }
    

});

$('#buy_c').click(function(){
    let buy_num = $('#c_buy').val();
    let price = $('#c_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.C_Buy){
                flag = true;
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
        }

    }

    

});

$('#buy_d').click(function(){
    let buy_num = $('#d_buy').val();
    let price = $('#d_buy').attr('price');
    
    if(parseInt(cash) < (parseInt(buy_num) * parseInt(price))){
        alert("Have no enough cash.");
    }else{
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
            }

        });

        if(!flag){
            RECORD[num].push({D_Buy: buy_num});
            cash = parseInt(cash) - parseInt(buy_num) * parseInt(price);
            $('#cash').text(cash);
            $('#share_d').text(buy_num);
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
        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.E_Buy){
                flag = true;
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
        let flag = false;
        RECORD[num].forEach(function(value){
            if(value.F_Buy){
                flag = true;
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
            $('#share_a').text(shares);
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
            $('#share_b').text(shares);
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
            $('#share_c').text(shares);
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
            $('#share_d').text(shares);
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
            $('#share_e').text(shares);
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
            $('#share_f').text(shares);

        }

});
}

 $('#next').click(function(){
    let num = parseInt($('#round_num').text());
    let total = a_value + b_value + c_value + d_value + e_value + f_value + parseInt($('#cash').text());
    RECORD[num].push({total_value:total});

    num ++;
    if(num < 11){
        a_value = parseInt( $('#share_a').text()) * parseInt($('#a_buy').attr('price'));
        b_value = parseInt( $('#share_b').text()) * parseInt($('#b_buy').attr('price'));
        f_value = parseInt( $('#share_f').text()) * parseInt($('#f_buy').attr('price'));
        e_value = parseInt( $('#share_e').text()) * parseInt($('#e_buy').attr('price'));
        d_value = parseInt( $('#share_d').text()) * parseInt($('#d_buy').attr('price'));
        c_value = parseInt( $('#share_c').text()) * parseInt($('#c_buy').attr('price'));

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

        $('#chart').attr('src', 'img/Round ' + num + '.png');
        process(num);
    }else if(num == 11){
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
        RECORD[num].push({user:$('#user_id').val()},{fianl_value:finalValue});
        console.log(RECORD);

        let flattenedData = RECORD.reduce((acc, val) => acc.concat(val), []); // flatten the nested arrays into a single array
        
        // let csv = Papa.unparse(
        //     {
        //         fields: ["user", "A_Buy", "A_Sell", "B_Buy", "B_Sell", "C_Buy", "C_Sell", "D_Buy", "D_Sell", "E_Buy", "E_Sell", "F_Buy", "F_Sell"],
        //         data: RECORD
        //     }
        //     );
        const data = RECORD.flatMap(row => {
                const flatRow = {};
                row.forEach(obj => Object.assign(flatRow, obj));
                return flatRow;
              });
              const csv = Papa.unparse(data);
        console.log(csv);
        //let csv1 = Papa.unparse(RECORD[1]);
        let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        let url = URL.createObjectURL(blob);

        let link = document.getElementById('log');
        link.setAttribute("href", url);
        link.setAttribute("download", "log.csv");
        
    }
 })       
        // RECORD=[
        //     [{user: 'we'},{A_Buy: '4'},{B_Buy: '3'},{C_Buy: '3'},{D_Buy: '3'},{total_value: 8937}
        
        //     ],
        //     [
        //         {user: 'we'},
        //         {C_Buy: '3'},
        //         {D_Buy: '3'}, 
        //         {E_Buy: '3'},
        //         {total_value: 9072},
        //         {B_Buy: '3'},
        //         {A_Buy: '4'}   
        //     ],
        //     [{user: 'we'},
        //     {B_Buy: '3'},
        //     {C_Buy: '3'},
        //     {D_Buy: '3'},
        //     {total_value: 8669},
        //     {A_Buy: '4'}
        //     ],[
        //         {user: 'we'},
        //         {B_Buy: '3'},
        //         {total_value: 8063}
        //     ]
        // ]
        
