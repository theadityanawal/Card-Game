
const cardObjectDefinitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'},
]

const cardBackImgPath = '/images/card-back.png'

/*    <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="" alt="" class="card-img">
                    </div>
                    <div class="card-back">
                        <img src="" alt="" class="card-img">
                    </div>
                </div>
            </div>
*/

function createCard(cardItems) {
    // create card element
    const cardElem = document.createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    //create card image element
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    // add classes to elements
    addClassToElement(card, cardElem)
    addIdToElement(cardElem, cardItems.id)

    addClassToElement(cardInnerElem, cardInnerElem)
    addIdToElement(cardInnerElem, cardItems.id)

    addClassToElement(cardFrontElem, cardFrontElem)
    addIdToElement(cardFrontElem, cardItems.id)

    addClassToElement(cardBackElem, cardBackElem)
    addIdToElement(cardBackElem, cardItems.id)

    //add src attribute to image elements
    addSrcToImageElem(cardBackElem, cardBackImgPath)


    //add src to front image element
    addSrcToImageElem(cardFrontElem, cardItems.imagePath)

    //assign class to image elements
    addClassToElement(cardBackElem, 'card-img')
    addClassToElement(cardFrontElem, 'card-img')
}

function createElement(elemType){
    return document.createElement(elemType)
}

function addClassToElement(elem, className){
    elem.classList.add(className)
}

function addIdToElement(elem,Id){
    elem.id = Id
}

function addSrcToImageElem(imgElem, src){
    imgElem.src = src
}
