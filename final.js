var firebaseConfig = {
    apiKey: "AIzaSyCojUubQKAgEqik79bzahDv7hbgnbj9jD8",
    authDomain: "website-a8392.firebaseapp.com",
    databaseURL: "https://website-a8392.firebaseio.com",
    projectId: "website-a8392",
    storageBucket: "website-a8392.appspot.com",
    messagingSenderId: "102193550774",
    appId: "1:102193550774:web:f287b52110dde9c3229d17"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

function createPost(userID, content) {
	let today = new Date();
	let date =
		today.getDate() +
		"/" +
		(today.getMonth() + 1) +
		"/" +
		today.getFullYear();
	db.collection("posts").doc().set({
		userId: userID,
		Content: content,
		Time: date,
		Reacts: 0,
		Comments: [],
		ReactList: [],
	});
}
function updateContent(postID, newContent) {
	db.collection("posts").doc(postID).update({
		Content: newContent,
	});
}
function deletePost(postID) {
	db.collection("posts").doc(postID).delete();
}
function getPost(postID, callback, callbackPara) {
	db.collection("posts")
		.doc(postID)
		.get()
		.then(function (doc) {
			callback({
				data: doc.data(),
				callbackPara,
			});
		});
}
const updateComment = ({ data, callbackPara }) => {
	data["Comments"].push({
		cuserID: callbackPara["userID"],
		comment: callbackPara["content"],
	});
	db.collection("posts").doc(callbackPara["postID"]).update({
		Comments: data["Comments"],
	});
};
function addComment(postID, content, userID) {
	const post = getPost(postID, updateComment, { postID, userID, content });
}

function addcomment(postID, content, userID) {
	let comments = document.getElementById(`comments-${postID}`);

	comments.innerHTML += `<div>${userID}: ${content}</div>`;
}

function addPost(userID, content, postID) {
	let baivietarea = document.getElementById("news");
	baivietarea.innerHTML += `
                                <div class="card-body">
									<h4 id="account">${userID}</h4>
									<p>${content}<p hidden>${postID}</p></p>
                                </div>
                                
									<div id="comments-${postID}"></div>

									<div id= "comment">
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<button id="${postID}" class = "commentBtns"
														type="button"><i class="fas fa-comment-dots"></i></button>
											</div>
											<input id = 'content${postID}' type="text" class="form-control"
													placeholder="viết nhận xét...">
										</div>

                                    </div>
                                    <div class="heading-underline" id="line"></div>
								
	`;
}

idList = []
cidList =[]
function renderAllPosts() {
	db.collection("posts")
		.get()
		.then(function (querySnapshot) {
			querySnapshot.forEach(function (doc) {
				addPost(doc.data().userId, doc.data().Content, doc.id);
				idList.push(doc.id)
				cidList.push(`content${doc.id}`)
			});
		})
		.then(function () {
			for ( let i=0; i<idList.length; i++) {
				document.getElementById(idList[i]).addEventListener("click", () => {
					addcomment(idList[i], document.getElementById(cidList[i]).value, "Jack")
					addComment(idList[i], document.getElementById(cidList[i]).value, "Jack")
				})
			}
		});
}
renderAllPosts();


let postbutton = document.getElementById("postbutton");
postbutton.addEventListener("click", () => {
	let nContent = quill.getText();
	createPost("Jack", nContent);
	addPost("Jack", nContent);
});

let quill = new Quill("#editor-container", {
	modules: {
		toolbar: [
			["bold", "italic", "underline"],
			["image", "code-block"],
		],
	},
	placeholder: "hãy chia sẻ cảm nghĩ...",
	theme: "snow", // or 'bubble'
})
