// var firebaseConfig = {
//     apiKey: "AIzaSyCojUubQKAgEqik79bzahDv7hbgnbj9jD8",
//     authDomain: "website-a8392.firebaseapp.com",
//     databaseURL: "https://website-a8392.firebaseio.com",
//     projectId: "website-a8392",
//     storageBucket: "website-a8392.appspot.com",
//     messagingSenderId: "102193550774",
//     appId: "1:102193550774:web:f287b52110dde9c3229d17",
// };

// firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore();

// function getAllPosts() {
//     let posts = [];
//     db.collection("posts")
//         .get()
//         .then(function (querySnapshot) {
//             querySnapshot.forEach(function (doc) {
//                 posts.push({
//                     id: doc.id,
//                     data: doc.data(),
//                 });
//             });
//         });
//     return posts;
// }
// function createPost(userID, content) {
//     let today = new Date();
//     var date =
//         today.getDate() +
//         "/" +
//         (today.getMonth() + 1) +
//         "/" +
//         today.getFullYear();
//     db.collection("posts").doc().set({
//         userId: userID,
//         Content: content,
//         Time: date,
//         Reacts: 0,
//         Comments: [],
//         ReactList: [],
//     });
// }
// function updateContent(postID, newContent) {
//     db.collection("posts").doc(postID).update({
//         Content: newContent,
//     });
// }
// function deletePost(postID) {
//     db.collection("posts").doc(postID).delete();
// }
// function getPost(postID, callback, callbackPara) {
//     db.collection("posts").doc(postID).get().then(function (doc) {
//         callback({
//             data: doc.data(),
//             callbackPara
//             }
//             )
//     });
// }
// const updateComment = ({data, callbackPara}) => {
//     data["Comments"].push({
//         cuserID: callbackPara["userID"],
//         comment: callbackPara["content"],
//     })
//     db.collection("posts").doc(callbackPara["postID"]).update({
//         Comments: data["Comments"]
//     })
// }
// function addComment(postID, userID, content) {
//     const post = getPost(postID, updateComment, {postID, userID, content})
// }
// createPost("Jack", "I'm a clone")