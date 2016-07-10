var app = angular.module('wsconsumer.services', []);

app.factory('UserRestService', function ($resource) {
	var userResource = $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
	
	return {
		all: function () {
			return userResource.query();
		},
		get: function (id){
			return userResource.get({user: id});
		}
	}
});

app.factory('UserService', function () {
	var serviceData = this;
	return {
		setSelectedUser: function(user){
			serviceData.selectedUser = user;
		},
		getSelectedUser: function(){
			return serviceData.selectedUser;
		}
	}
})

app.factory('PostService', function () {
	var selectedPost = this;
	return{
		setSelectedPost: function(post){
			selectedPost = post;
		},
		getSelectedPost: function(){
			return selectedPost;
		}
	}
})

app.factory('CommentService', function () {
	var comments = this;
	return{
		setComments: function(comments){
			comments = comments;
		},
		getComments: function(){
			return comments;
		}
	}
})

app.factory('CommentsRestService', function ($resource) {
	var commentResource = $resource('http://jsonplaceholder.typicode.com/comments/:comment',{comment: "@comment", postId: "@postId"},{
		getPostComments:{
			method: 'GET',
			isArray: true
		}
	});

	return {
		getPostComments: function(post){
			return commentResource.getPostComments({postId: post});
		},
		get: function(comment){
			return commentResource.get({comment: comment});
		}
	};
})

app.factory('PostRestService', function ($resource) {
	var postResource = $resource('http://jsonplaceholder.typicode.com/posts/:post',{post: "@post", user: "@userId"},{
		getUserPosts:{
			method: 'GET',
			isArray: true
		}
	});

	return {
		getUserPosts: function(user){
			return postResource.getUserPosts({userId: user});
		},
		get: function(post){
			return postResource.get({post: post});
		}
	};
})

app.factory('MenuService', function() {
	var menuItems = [{text: 'Users', link: '#/users'},{text: 'Contacts', link: '#/contacts'}];
	return {
		all: function() {
			return menuItems;
		}
	}
})