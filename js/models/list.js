'use strict';
// List Model
List.all=[]

// ES6...

// class List {
//   constructor(title) {
//     this.title = title
//     this.tasks = []
//     this.id = this.constructor.all.length
//     this.constructor.all.push(this)
//   }
      // listEl() {
      //   return '<div class="list"><h2><button class="destroy-list">x</button> '+this.title+'</h2><ul id="list-'+this.id+'" data-id="'+this.id+'"></ul></div>'
      // }
      // optionEl() {
      //   return '<option value="'+this.id+'">'+this.title+'</option>'
      // }
      // this.build=function(){
      //   $('#select_list').append(this.optionEl())
      //   $('#lists').append(this.listEl())
      // }
// }

function List(title) {
  this.title=title;
  this.id=List.prototype.id
  this.tasks=[]

  this.listEl= function(){
    return '<div class="list"><h2><button class="destroy-list">x</button> '+this.title+'</h2><ul id="list-'+this.id+'" data-id="'+this.id+'"></ul></div>'
  }

  this.optionEl=function(){
    return '<option value="'+this.id+'">'+this.title+'</option>'
  }

  this.build=function(){
    $('#select_list').append(this.optionEl())
    $('#lists').append(this.listEl())
  }


  List.prototype.id++
  List.all.push(this)

}



List.prototype.id=0

// function List(title) {
//   this.title = title
//   this.id = List.prototype.id
//   this.tasks = []
//   this.listEl = function() {
//     return '<div class="list"><h2><button class="destroy-list">x</button> ' + this.title + '</h2><ul id="list-' + this.id + '" data-id="' + this.id + '"></ul></div>'
//   }
//   this.optionEl = function() {
//     return '<option value="' + this.id + '"> ' + this.title + '</option>'
//   }
//
//   this.build = function() {
//
//     // return '<select id="select_list" name="select_list"></select><section id="lists"></section>'
//   }
//
//   List.prototype.id++
//   List.all.push(this)
// }
// List.prototype.id=0
// List.all = []
//
// // class List {
// //   var idNumber = 0
// //   constructor(title) {
// //     this.title = title
// //     this.id = idNumber
// //     idNumber++
// //     this.taskes = []
// //   }
// //   listEl() {
// //
// //   }
// // }
