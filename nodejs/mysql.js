var mysql = require('mysql');
// ��й�ȣ�� ������ ���Ϸ� �и��ؼ� ���������� ���Խ�Ű�� �ʾƾ� �մϴ�. 
var connection = mysql.createConnection({
    host: '34.64.253.187',
    user: 'kjjgo35',
    password: '123456',
    port: '3306',
    database: 'opentutorials'
});

connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();