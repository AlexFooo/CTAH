const users = [{
    nameRole: "<b>Peter Miguel</b> <br /> CEO @Combinator",
    avatar: "./img/avatar/avatar1.png",
    review: "You've saved our business! Since I invested in Cornelia I made over 100,000 dollars profits. Thank you so much for your help"
}, {
    nameRole: "<b>Larry Davis</b> <br /> Traffic Manager @Upside",
    avatar: "./img/avatar/avatar2.png",
    review: "We've seen amazing results already. Buy this now. I couldn't have asked for more than this. Cornelia has completely surpassed our expectations. I just can't get enough of Cornelia. I want to get a T-Shirt with Cornelia on it so I can show it off to everyone. Thanks to Cornelia, we've just launched our 5th website! I will let my mum know about this, she could really make use of Cornelia!Thanks for the great service. The service was excellent. Cornelia is worth much more than I paid. I would gladly pay over 600 dollars for Cornelia. We can't understand how we've been living without Cornelia."
}, {
    nameRole: "<b>Debra Peters</b> <br /> Product Owner @Generate",
    avatar: "./img/avatar/avatar3.png",
    review: "Cornelia did exactly what you said it does. I'd be lost without Cornelia. I just can't get enough of Cornelia. I want to get a T-Shirt with Cornelia on it so I can show it off to everyone. I would like to personally thank you for your outstanding product."
}, {
    nameRole: "<b>Linda R. Huff</b> <br />  Happiness Manager @BlueSky",
    avatar: "./img/avatar/avatar4.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero cras"
}, {
    nameRole: "<b>Valentine Sutton</b> <br /> Product Designer @Tools",
    avatar: "./img/avatar/avatar5.png",
    review: "We can't understand how we've been living without Cornelia. We have no regrets! Since I invested in Cornelia I made over 100,000 dollars profits. Needless to say we are extremely satisfied with the results. Cornelia is the most valuable business resource we have EVER purchased. Definitely worth the investment. Not able to tell you how happy I am with Cornelia. I am so pleased with this product."
}, {
    nameRole: "<b>Vida Inman</b> <br /> Sales Manager @UShould",
    avatar: "./img/avatar/avatar6.png",
    review: "We were treated like royalty"
}, {
    nameRole: "<b>Joe Lembrouille</b> <br /> Photographer @Streetz",
    avatar: "./img/avatar/avatar7.png",
    review: "Cornelia is both attractive and highly adaptable. Just what I was looking for. I don't always clop, but when I do, it's because of Cornelia. I love Cornelia. Great job, I will definitely be ordering again! Thank you for making it painless, pleasant and most of all hassle free! You guys rock! Thanks for the great service. The service was excellent. Cornelia is worth much more than I paid. I would gladly pay over 600 dollars for Cornelia. We can't understand how we've been living without Cornelia."
}, {
    nameRole: "<b>John Morgan</b> <br /> CEO @FunkyToys",
    avatar: "./img/avatar/avatar8.png",
    review: "I don't know what else to say. I made back the purchase price in just 48 hours! The service was excellent. Cornelia saved my business. I love Cornelia. We've seen amazing results already. Cornelia is the most valuable business resource we have EVER purchased. If you aren't sure, always go for Cornelia."
}, {
    nameRole: "<b>Helen Womack</b> <br /> CTO @Stoock",
    avatar: "./img/avatar/avatar9.png",
    review: "Cornelia has got everything I need. Your company is truly upstanding and is behind its product 100%. I can't say enough about Cornelia. I'm good to go."
}, {
    nameRole: "<b>Sarah Ewing</b> <br />Digital Manager @FullSocial",
    avatar: "./img/avatar/avatar10.png",
    review: "Without Cornelia, we would have gone bankrupt by now"
}]


const review = users.map(item => (
    `<div class="block-review">
            <p class="review">${item.review}</p>
            <div class="review-wrapper">
                <div class="avatar">
                <img src="${item.avatar}" alt="">
                </div>
                <div class="name-role">${item.nameRole}</div>
            </div>
        </div>`
))
blockSix.insertAdjacentHTML('afterbegin', review.join(''))