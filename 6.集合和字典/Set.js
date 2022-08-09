/**
 * @description 集合
 * 这里使用的是对象来实现，由于javascript对象不允许一个键指向两个不同的属性，也保证集合里的元素都是唯一的
 * ECMAScript 2015 新增了 Set 类作为 JavaScript API 的一部分。我们可以基于 ES2015 的 Set 开发我们的 Set 类
 */
export default class Set {
    constructor() {
        this.items = {};
    }
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    values() {
        return Object.values(this.items);
    }
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return Object.keys(this.items).length;
    }
    clear() {
        this.items = {};
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const values = this.values();
        let objString = `${values[0]}`;
        for (let i = 1; i < values.length; i++) {
            objString = `${objString},${values[i].toString()}`;
        }
        return objString;
    }
}
