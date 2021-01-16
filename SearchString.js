//Load a book from disk
function loadBook(filename,displayName) {
    let currentBook = "";
    let url = "books/" + filename;

    //reset our UI
    document.getElementById("fileName").innerHTML = displayName;
    document.getElementById("searchstat").innerHTML = "";
    document.getElementById("keyword").value = "";

    //create a server a request to load our book
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true );
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            currentBook = xhr.responseText;

            //remove line breaks and carriage returns and replace with <br>
            currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>');

            document.getElementById("fileContent").innerHTML = currentBook;

            var elmnt = document.getElementById("fileContent");
            elmnt.scrollTop = 0;
        }
    };
}

//get the stats for selected book
function getDocStats(fileContent) {

    var docLength = document.getElementById("docLength");
    var wordCount = document.getElementById("wordCount");
    var charCount = document.getElementById("charCount");

    let text = fileContent.toLowerCase();
    let wordArry = text.match(/\b\S+\b/g);
    
    //Holds multiple key-value pairs
    let wordDictionary = {};
    
    //Count every word in the wordArry
    for( let word in wordArry){
        let wordValue = wordArry[word];
        if (wordDictionary[wordValue] > 0){
            wordDictionary[wordValue] += 1;
        }
        else {
            wordDictionary[wordValue] = 1;
        }
    }

}