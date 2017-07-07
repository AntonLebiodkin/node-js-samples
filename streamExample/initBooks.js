const Book = require('./book.model');

const countOfBooks = 10000;

for (let i = 0; i < countOfBooks; i++) {
    console.log('started to create ', i);
    new Book({
        author: {
            name: 'Vladimir',
            surname: 'Nabokov',
            birthYear: 1899,            
        },
        name: 'Lolita',
        description: `Lolita is a 1955 novel written by Russian American novelist Vladimir Nabokov. 
        The novel is notable for its controversial subject: the protagonist and unreliable narrator—a 
        middle-aged literature professor called Humbert Humbert—is obsessed with the 12-year-old Dolores Haze, 
        with whom he becomes sexually involved after he becomes her stepfather. "Lolita" is his private nickname for Dolores. 
        The novel was originally written in English and first published in Paris in 1955 by Olympia Press. 
        Later it was translated into Russian by Nabokov himself and published in New York in 1967 by Phaedra Publishers.
        Lolita quickly attained a classic status. Today it is regarded as one of the prime achievements in 20th century literature,
        though also among the most controversial. The novel was adapted into a film by Stanley Kubrick in 1962, and again in 1997 by Adrian Lyne.
        It has also been adapted several times for the stage and has been the subject of two operas, two ballets, 
        and an acclaimed but commercially unsuccessful Broadway musical. Its assimilation into popular culture is such that the name "Lolita"
        has been used to imply that a young girl is sexually precocious.
        Lolita is included on TIME magazine's list of the 100 best English-language novels published from 1923 to 2005. 
        It is also fourth on the Modern Library's 1998 list of the 100 best novels of the 20th century, 
        and holds a place in the Bokklubben World Library, a 2002 collection of the most celebrated books in history.`
    }).save();
}