//引入mysql2套件
const mysql = require('mysql2');

//建立資料庫連接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'breakfast_system'
});

//測試連接
connection.connect((err) => {
    if (err) {
        console.error('資料庫連接失敗：', err);
        return;
    }
    console.log('成功連接到資料庫');
});
// 匯出連接模組，方便其他檔案使用
module.exports = connection;
