'use strict';
// Lists Controller

function ListsController() {
  this.$addListForm = $('#add_list')

  this.$listTitleInput = $('#list_title')

  this.$selectListMenu = $('#select_list')

  this.$addTaskForm = $('#add_task')

  this.$wrapper = $('#wrapper')

  this.init = function() {
    this.$addTaskForm.css('display','none')

    this.$addListForm.submit(function(event){
      event.preventDefault();

      this.$addTaskForm.css('display','block');

      var newList=new List($("#list_title").val());

      $('select').append(("<option value='" + newList.id + "'>"+newList.title+"</list>"));

      $('select').val(newList.id);

      $("#list_title").val("");

      $("#lists").append(newList.listEl());

      $(".destroy-list").click(function(){
        this.parentElement.parentElement.remove();
        $(`option[value=${this.parentElement.parentElement.children[1].id.split("-")[1]}]`).remove();
      });
    }.bind(this))
  }
}
