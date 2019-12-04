fetch('http://www.omdbapi.com/?s=%27america%27&apikey=f23ffda1')
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        console.log("obje", json)
        console.log("ttt", json.Search)
        console.log("ttt", json.Search[1].Poster)


        let search = json.Search;
        console.log("hhh", search[2].Title)
        let main = document.getElementById("main")
        for (let i = 0; i < search.length; i++) {
            let main = document.getElementById("main")
            let col = document.createElement("div")
            col.className = "col-3 my-3"

            let three = document.createElement("div")
            three.className = "card";

            let one = document.createElement("div")
            one.textContent = "Title: " + " " + search[i].Title;
            one.className = "card-header"

            let two = document.createElement("div")
            two.innerHTML = "Year: " + " " + search[i].Year;
            two.className = "card-body"

            let four = document.createElement("div")
            let five = document.createElement("img")
            five.src = search[i].Poster;
            // five.setAttribute("src", search[i].Poster);
            four.append(five)
            four.className = "card-body"
            four.append(five)

            three.append(one)
            three.append(two);
            three.append(four)
            col.append(three)
            main.append(col)
        }


    })