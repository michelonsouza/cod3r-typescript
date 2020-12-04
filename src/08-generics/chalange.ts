type Par<K, V> = { key: K; value: V };

class CustomMap<K, V> {
  items: Par<K, V>[] = [];

  get(key: K): Par<K, V> | null {
    return this.items.find(item => item.key === key) || null;
  }

  addOrAlter(par: Par<K, V>): void {
    const findElement = this.get(par.key);

    if (findElement) {
      findElement.value = par.value;
    } else {
      this.items.push(par);
    }
  }

  clear(): void {
    this.items = [];
  }

  print(): void {
    console.log(this.items);
  }
}

const map = new CustomMap<number, string>();

map.addOrAlter({ key: 1, value: 'Michelon' });
map.addOrAlter({ key: 2, value: 'Júlia' });
map.addOrAlter({ key: 3, value: 'Lilian' });
map.addOrAlter({ key: 4, value: 'Mãe' });

console.log(map.get(2));
map.print();
map.clear();
map.print();
