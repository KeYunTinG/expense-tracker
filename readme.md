# Expense Tracker

此專案需先註冊帳密再登入，登入後讓使用者可以新增支出紀錄，有了支出紀錄可做分類搜尋、刪除、新增、修改，最後顯示總金額。

註冊帳號（註冊之後，可以登入/登出，只有登入狀態的使用者可以看到 app 內容，否則一律被導向登入頁）
在首頁瀏覽所有支出的清單＆總金額（只能看到自己的記帳紀錄）
新增一筆支出
編輯支出的屬性 
刪除任何一筆支出 
根據「類別」篩選支出

## 開發工具
- Node.js 16.17.1
- Express 4.16.4
- Express-Handlebars 3.0.0
- Express-Session 1.17.1
- passport 0.4.1
- bcryptjs 2.4.3
- connect-flash 0.1.1
- mongoose 6.0.0
- Bootstrap 5.2.2
- Font Awesome 6.2.1

## 使用資料庫

MongoDB

## 執行專案

1.請先安裝 node.js 與 npm

2.將專案 clone 到本地
```
https://github.com/robert1074004/expense-tracker
```

3.在本地開啟之後，透過終端機進入資料夾
```
cd expense-tracker
```

4.安裝npm 套件

```
npm install 
```

5.安裝完畢後，輸入：

```
npm run dev
```

6.若能看見以下訊息代表運行成功，可用瀏覽器進入到以下網址:

```
Express is listening on localhost:3000
```

7.結束運行請輸入:

```
ctrl + c
```
## 環境建置
Node.js Robo3T