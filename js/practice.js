/**
 * Created by Administrator on 2017/5/23.
 */

(function(angular){

	//创建入口模块
	var app = angular.module('todosApp',[]);
	//创建控制器
	app.controller('todosController',['$scope',function($scope){
	//	假设获取到的假数据
		$scope.todos = [
			{id:1,name:'first',completed:true},
			{id:2,name:'second',completed:true},
			{id:3,name:'third',completed:true},
			{id:4,name:'forth',completed:true}
		]

	//	添加功能
		$scope.newTodo = '';
		$scope.add = function(){
		//	判断上面的是否为空，如果空就不加
			if(!$scope.newTodo){
				return;
			}
		//	添加任务进去
			$scope.todos.push({
				id:Math.random(),
				name:$scope.newTodo,
				completed:false
			})

		//	清空任务栏
			$scope.newTodo = '';
		}
    //删除任务功能
		$scope.remove = function(id){
		//	根据id查询数组中的$scope.todos中的对应元素，然后删除
			for(var a = 0;a<$scope.todos.length;a++){
				var item = $scope.todos[a];
				if(item.id===id){
					$scope.todos.splice(a,1)
					return;
				}
			}
		}
    //修改任务内容
		$scope.isEditingId= -1
		$scope.edit = function(id){
			$scope.isEditingId = id;
		}
		$scope.save = function(){
			$scope.isEditingId = -1;
		}

		//	切换任务状态
		$scope.selectAll = false;
		$scope.toggleAll = function(){
			for(var k = 0;k<$scope.todos.length;k++){
				var item = $scope.todos[k];
				item.completed = $scope.selectAll;
			}
		}

	// 显示未完成数量
		$scope.getActive = function(){
			var count = 0;
		//	遍历$scope.todos,找到是false的数据
			for(var j = 0;j<$scope.todos.length;j++){
				var item = $scope.todos[j];
				if(!item.completed){
					count++;
				}
			}
			return count;
		}

	//	清除所有完成任务
		$scope.clearAll = function(){
		//	遍历数组，如果为true就删掉，
			for(var a = $scope.todos.length-1;a>=0;a--){
				var item = $scope.todos[a];
				if(item.completed){
					$scope.todos.splice(a,1);
				}
			}
		}


	}])








})(angular)
