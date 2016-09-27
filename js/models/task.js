'use strict';
// Task Model


Task.all=[]

function Task(description, priority, list){
  this.description=description
  this.priority=priority
  this.list=list
  this.id=this.list.tasks.length
  this.list.tasks.push(this)


  // this.liEl= function(){
  // return  '<li data-id="'+this.id+'"><button class="destroy-task">x</button> '+this.description+', ' + this.priority+'</li>'
  // }
  // Task.prototype.liEl = function(){
  this.liEl = function() {
  return  '<li data-id="'+this.id+'"><button class="destroy-task">x</button> '+this.description+', ' + this.priority+'</li>'
  }
  this.build=function(){
    $('#list-'+this.id).append(this.liEl())
  }
}
