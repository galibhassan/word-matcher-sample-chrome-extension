console.log('hello from foreground.js')
// document.querySelector('body').style.background = 'orange'

const td_all = Array.from(document.querySelectorAll('td'));

const sampleJson = {
    "glossary": {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "UK",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook. Mexico",
                        "GlossSeeAlso": ["Germany", "XML"]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
}


const sampleResponse = JSON.stringify(sampleJson, null, 2)

td_all.forEach((td) => {
    td.addEventListener('click', (e) => {
        console.log(e.target.innerText)
        const text = e.target.innerText;
        
        if(sampleResponse.includes(text)) {
            console.log("Found it")
            e.target.style.backgroundColor = '#049178'
            e.target.style.color = 'white'
            
        } else {
            console.log("couldnt find.")
            // e.target.style.backgroundColor = '#DC7A80'
            // e.target.style.color = 'white'
            e.target.style.boxShadow = '1px 1px 10px 1px rgba(255, 0, 0, 0.5)'
        }

    })

    td.addEventListener('mouseover', (e) => {
        // e.target.style.backgroundColor = 'orange'
    })

    td.addEventListener('mouseleave', (e) => {
        // e.target.style.backgroundColor = ''
    })
})