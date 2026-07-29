class Stack<T> {
  private items: T[] = []

  push(element: T): void {
    this.items.push(element)
   }  //agregar
  pop(): T | undefined {
    return this.items.pop()
   } //sacar
  peek(): T | undefined {
    return this.items[this.items.length - 1]
   }   //Mira qué hay arriba de la pila, pero NO lo saca.
  isEmpty(): boolean {
    return this.items.length === 0
   }
  size(): number {
    return this.items.length
   }
}