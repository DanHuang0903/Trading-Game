
const startBtn = $('#start_btn');
const login = $('#login');
const playground = $('#playground');
const RECORD = {};


startBtn.click(function(){
    console.log($('#user_id').val())
    let user = $('#user_id').val();
    if($('#user_id').val() != ""){
        RECORD.user_id = $('#user_id').val();
        login.hide();
        playground.show();

        // const mysql = require('mysql');
        // const connection = mysql.createConnection({
        //     host: 'us-cdbr-east-06.cleardb.net',
        //     user: 'be2a1b689d026a',
        //     password: '09c33246',
        //     database: 'heroku_84033afa304cc4e',

        // });

        // connection.connect((err) => {
        //     if(err) throw err;
        //     console.log('Connected');
        // });
        // connection.query(`INSERT INTO trading_records (user_id) VALUES ('${user}')`, (err, rows)=>{
        //     if (err) throw err;
        // });
        // connection.end();
        $('#user_login').submit(function(event) {
            event.preventDefault(); //prevent default form submission

            var user_id = $('#user_id').val();

            $.ajax({
                type: 'POST',
                url: 'insert_user.php',
                data: { user_id: user_id },
                success: function(response) {
                    console.log(response);
                },
                error: function(xhr, status, error) {
                    console.log(error);
                }
            });
        });

    }else{
        alert("User ID cannot be empty");
        return false;
    }
})

