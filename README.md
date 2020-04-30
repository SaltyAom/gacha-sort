# Gacha Sort
Randomly sort until entire array is sorted.

## Gacha?
The term gacha originally from `gashapon`, a japanese vending-machine dispense random capsule toys.
In this current era, online video game are also implemented the `gashapon` which similar to loot box mechanism.

As an implementation of `Gacha Sort`, a number of array is receive then randomly sort an entire array until it's sorted which is based pure luck.

Similar to `Permutation Sort` which is also randomly sort. When Gacha Sort finished its sort-checking mechanism, the whole array is reset and randomly sort again from a copy of the original input but asynchronously an non-thread blocking.

Time complexity of Gacha Sort is range between `O(2n)` and `O(Infinity(2n))`.
The best-case of Gacha Sort is `O(2n)`.  
while the worst-case is `O(Infinity(2n))`.
Which means somehow it might never return on one scenario but quickly return in another scenario.

To make it non-thread blocking, Gacha Sort is implemented asynchronously return Promise which would be resolved until the array is sorted.

## Illustrate in Psudo Code
```
while(!sorted(Array))
    shuffle(Array)
```

## Example Usage
It's basically:
```javascript
import gachatSort from 'gacha-sort'

let someAsyncFunction = async() => {
    await gachaSort([3,1,2]) // [1,2,3]
}
```

For some reason, you might interested in pre-built module:
```javascript
import gachaSort from 'gacha-sort/dist'

let someAsyncFunction = async() => {
    await gacha([3,1,2]) // [1,2,3]
}
```

Or use other module resolution:
```javascript
const gachaSort = require('gacha-sort/dist/cjs')

let someAsyncFunction = async() => {
    await gachaSort([3,1,2]) // [1,2,3]
}
```

The reason why you might interested in Gacha Sort is because it contains the word `Gacha` in it and also contains Gacha Image in the package.
![Azur Lane Old Gacha Interface](https://mobagereroll.files.wordpress.com/2018/11/azurlane5.jpg)
![Arknights Gacha](https://cdn-www.bluestacks.com/bs-images/A_GachaandRecruitmentGuide_S1.jpg)
![Honkai Impact 3rd Gacha](https://i.ytimg.com/vi/hfqWihj4CZs/maxresdefault.jpg)
![Fate Grand Order Gacha](https://gamepress.gg/sites/grandorder/files/summon/story_banner.png?v2)
