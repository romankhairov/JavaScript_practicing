var article = "Abel Makkonen Tesfaye (born 16 February 1990), known professionally as The Weeknd (pronounced the weekend), is a Canadian singer, songwriter, and record producer.[1] In late 2010, Tesfaye anonymously uploaded several songs to YouTube under the name The Weeknd. He released three nine-track mixtapes throughout 2011: House of Balloons, Thursday, and Echoes of Silence, which were critically acclaimed.[2] The following year, he released a compilation album Trilogy, thirty tracks consisting of the remastered mixtapes and three additional songs. It was released under Republic Records and his own label XO.";
var albumName = "Trilogy";
var hits = [];
//algorhitm of serching letters, that match the first and next letters of the album name 
for (var i = 0; i < article.length; i++ ) {
    if ( article[i] === "T"){
//here we compare length of the word with the right letter with length of the search word
        for (var j=i; j<(albumName.length+i); j++) {
            (hits.push article[j]);
        }
    }
  };
//the printing out our result
//simple if else statement
if (hits.length === 0) {
    console.log ("There is no this album in the article");
} else {
    console.log(hits);   
};
  
