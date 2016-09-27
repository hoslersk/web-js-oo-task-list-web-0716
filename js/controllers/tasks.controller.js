'use strict';
// Tasks Controller

class TasksController {

  constructor(){
    this.$addTaskForm=$("#add_task")
    this.$taskDescriptionInput=$("#task_description")
    this.$selectListMenu=$('#select_list')
    this.$taskPriorityInput=$('#task_priority')
    this.$wrapper=$('#wrapper')
  }

  init(){
    this.$addTaskForm.submit(function(event){
      event.preventDefault();

      var selectedList=List.all.find(function(element){
        return element.id==this.$selectListMenu.val();
      }.bind(this))

      let newTask=new Task(this.$taskDescriptionInput.val(),this.$taskPriorityInput.val(), selectedList);

      $(`#list-${selectedList.id}`).append(newTask.liEl.call(newTask));

      $(".destroy-task").click(function(){

        let taskID=$(this).parent().data("id")

        let selectedList=List.all.find(function(element){ return element.id==this.parentElement.parentElement.id.split("-")[1]}.bind(this))

        selectedList.tasks[taskID]=null;

        // selectedList.tasks.splice(selectedList.tasks.find(function(task){return task.id==taskID}),1)

        this.parentElement.remove();

      })

    }.bind(this))

  }

}
