let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');

console.log('You have ' + storyWords.length + ' words in your story.');

const betterWords = storyWords.filter( word => {
    return !unnecessaryWords.includes(word)
});

let counter = 0
storyWords.forEach(word => {
    if (overusedWords.includes(word)){
        counter += 1
    }
});

console.log(`The amount of overused words you have in your story: ${counter} words.`)

let counter2 = 0
let sentencePunctuation = ['.','!']
storyWords.forEach(word => {
    if (sentencePunctuation.includes(word[word.length - 1])){
        counter2 += 1
    }
});

console.log(`You have ${counter2} sentences in your story`);

//console.log(betterWords.join(' '))

//Extra work
let counter3 = 0
lessOverusedWords = []
storyWords.forEach(word => {
    if (overusedWords.includes(word)){
        counter3 += 1
        if (counter3 % 2 === 0){
            lessOverusedWords.push(word)
        }
    }else if (!overusedWords.includes(word)){
        lessOverusedWords.push(word)
    }
});

console.log(lessOverusedWords.join(' '));