var app = angular.module('wsconsumer.controllers', []);

app.controller('UserListCtrl', function ($scope, UserRestService, UserService, $state) {
	$scope.users = UserRestService.all();

	$scope.selectUser = function(user){
		UserService.setSelectedUser(user);
		$state.go("userdetails");
	}
})

app.controller('UserDetailsCtrl',  function ($scope, UserRestService, UserService, PostRestService, PostService, $state) {
	$scope.selectedUser = UserService.getSelectedUser();

	if ($scope.selectedUser == undefined){
		$state.go("users");
	}else{
		$scope.posts = PostRestService.getUserPosts($scope.selectedUser.id);	
	}

	$scope.redirectToPosts = function(){
		$state.go("posts");
	}

})

app.controller('PostsCtrl', function ($scope, PostRestService, PostService,UserService, CommentService,CommentsRestService, $state) {
	$scope.selectedUser = UserService.getSelectedUser();


	if (UserService.getSelectedUser() == undefined){
		$state.go("users");
	}else{
		$scope.posts = PostRestService.getUserPosts(UserService.getSelectedUser().id);

		$scope.selectPost = function(post){
			PostService.setSelectedPost(post);
			$state.go("post");
		}
	}
})

app.controller('PostDetailsCtrl', function ($scope, CommentsRestService, PostService, $state) {
	
	var selectedPost = PostService.getSelectedPost();
	if (selectedPost == undefined || selectedPost.id == undefined){
		$state.go("posts");
	}
	$scope.post = selectedPost;

	$scope.comments = CommentsRestService.getPostComments(selectedPost.id);
	$scope.selectUser = function(user){
		UserService.setSelectedUser(user);
		$state.go("userdetails");
	}
})


app.controller('MenuCtrl', function ($scope, MenuService) {
	$scope.list = MenuService.all();
});