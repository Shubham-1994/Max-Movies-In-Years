# Max-Movies-In-Years

# Time Complexity

O(N*M) where N is length of movies array and M is the length of licence array

# Space Complexity

O(N) where N is the number of distinct years.

# Critical Parts / Bottleneck

allMovies.forEach(movie => { license.forEach(year => {})})

The forEach function loop is where the main complexity comes from. It runs as many times as there are movies in the movies array and nested with another forEach loop which iterates license array.


# Task

Hotstar, Prime video, Netflix, etc acquires licenses on movie basis, to show the movies on their platform

Imagine that we can fetch from an API the details of all movies that were ever shown on a platform. Let’s assume that the licenses are granted year over year. The API returns an array of all the movies, in the following format:


```js
[
    {
        name: ‘Lion King’,
        license: [2008, 2010]
    },
    {
        ... 
    },
    ...
]
```

**License**: `[<start year of the license>: Number, <end year of the license>: Number]`

Write a JS Module that returns in what year we had the maximum number of movies on that platfrom
