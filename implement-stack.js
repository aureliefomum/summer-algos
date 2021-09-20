//Implementing a stack - LAST IN-FIRST OUT (LIFO)

class Stack{
  constructor(){
      this.items =[]
  }

  push(item){
      this.items.push(item)
  }

  pop(){
      this.items.pop()
  }

  peek(){
    return  this.items[this.items.length-1]
  }

}