
// Khai báo cấu hình Firebase cho dự án của bạn
let firebaseConfig = {
    apiKey: "AIzaSyD4XzvwUqDMXoQF7l3qMtaAQg2fQUnh1gM",
    authDomain: "blogging-64cc1.firebaseapp.com",
    projectId: "blogging-64cc1",
    storageBucket: "blogging-64cc1.appspot.com",
    messagingSenderId: "837588777402",
    appId: "1:837588777402:web:0d70fe54730c05dcca8583",
    measurementId: "G-VLP3SV6H0S"
};

// Khởi tạo Firebase với cấu hình dự án
firebase.initializeApp(firebaseConfig);

// Khởi tạo kết nối tới Firestore
let db = firebase.firestore();

// Khởi tạo Firebase Authentication
let auth = firebase.auth();

// Hàm đăng xuất người dùng
const logoutUser = () => {
    auth.signOut().then(() => {
        location.reload();
    }).catch(error => {
        console.error("Error logging out:", error);
    });
}
