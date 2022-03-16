const text = [
    'Gummies candy dessert apple pie tiramisu. Apple pie chupa chups sesame snaps sweet roll jelly pudding. Cake danish gingerbread ice cream danish chupa chups. Jelly beans sesame snaps sweet jelly beans muffin croissant. Cheesecake cheesecake cupcake caramels gummies danish halvah pastry topping. Cake sweet sesame snaps tart marshmallow toffee marshmallow jelly. Powder carrot cake bonbon jujubes ice cream.',
    'Macaroon cookie cotton candy dessert halvah. Caramels caramels dragée jujubes apple pie. Chocolate bar topping dessert toffee ice cream gummi bears. Dessert soufflé caramels sesame snaps croissant jelly candy. Candy canes cheesecake jelly-o caramels jelly bonbon. Apple pie jelly beans dragée cheesecake powder.',
    'Danish cookie jelly-o chocolate liquorice. Gingerbread icing pudding toffee marshmallow cupcake marzipan. Topping powder oat cake macaroon carrot cake. Biscuit biscuit cookie candy marzipan. Brownie icing shortbread sugar plum sesame snaps cotton candy fruitcake chocolate. Cake chocolate cake marzipan muffin cookie topping marzipan. Croissant jujubes caramels sweet roll halvah.',
    'Jelly beans bonbon pastry biscuit marzipan. Cotton candy muffin pastry cotton candy cotton candy carrot cake gummies. Dessert macaroon tiramisu sweet cotton candy chocolate bar dragée icing jelly beans. Sesame snaps chocolate bar apple pie wafer sugar plum sugar plum. Cake powder jelly beans pudding bonbon. Gummies ice cream muffin oat cake bear claw oat cake toffee toffee. Gummies ice cream cookie dessert gummi bears cookie soufflé chocolate. Shortbread candy cheesecake gummi bears sugar plum.',
    'Toffee cupcake gummi bears sweet apple pie tootsie roll muffin pudding bear claw. Shortbread chocolate bar cupcake oat cake jelly ice cream. Cookie gummies macaroon marshmallow jujubes donut cake sugar plum. Sweet brownie muffin bonbon bonbon gummi bears soufflé. Cake pudding danish cake powder bonbon tart cookie apple pie. Sesame snaps icing halvah muffin cotton candy ice cream soufflé.',
    'Fruitcake powder bear claw cake topping cake. Apple pie jujubes tiramisu macaroon dragée cake dragée sweet roll apple pie. Carrot cake marshmallow candy canes jujubes liquorice toffee marzipan chocolate chocolate cake. Brownie sesame snaps dessert muffin caramels muffin. Biscuit topping shortbread sugar plum biscuit pudding pudding lollipop jelly-o. Bonbon chupa chups ice cream cotton candy wafer macaroon chupa chups sweet roll soufflé. Sugar plum icing cotton candy chocolate bar powder marzipan cookie apple pie.',
    'Marshmallow wafer jelly sugar plum powder muffin. Tiramisu cake sugar plum candy shortbread gummies oat cake. Carrot cake donut pastry cheesecake tart cupcake liquorice soufflé. Candy jelly beans jujubes caramels liquorice brownie toffee. Chupa chups chocolate cake lollipop pudding powder brownie. Carrot cake jujubes sweet soufflé topping chupa chups shortbread dragée. Apple pie chocolate cake bonbon tiramisu tootsie roll jujubes.',
    'Lemon drops chupa chups soufflé cupcake macaroon pudding dragée caramels. Carrot cake ice cream sesame snaps marshmallow jujubes pastry. Toffee chocolate chocolate chocolate bar dessert gingerbread shortbread dessert. Bonbon candy icing shortbread gummies chocolate gummies gingerbread. Chocolate cake cake shortbread dessert wafer apple pie tart oat cake sweet. Tootsie roll halvah carrot cake toffee jujubes apple pie macaroon. Marshmallow chupa chups sweet roll marshmallow chocolate liquorice sweet. Jelly-o bonbon chocolate cheesecake tiramisu shortbread apple pie caramels. Tart tiramisu muffin jelly beans cotton candy. Pudding shortbread pudding icing chupa chups.',
    'Oat cake marshmallow icing pie biscuit bear claw. Marshmallow icing pie sugar plum wafer sweet. Chocolate cake muffin ice cream macaroon jelly-o brownie shortbread gummies. Muffin bonbon liquorice jelly-o toffee pastry pie croissant. Toffee pudding sugar plum chocolate brownie sesame snaps fruitcake. Dragée cookie cheesecake jelly beans sweet.',
    'Toffee chupa chups danish gummi bears candy canes biscuit. Dessert jelly-o pastry chocolate brownie sweet. Ice cream gingerbread jujubes candy dragée pie wafer bear claw. Sesame snaps biscuit liquorice topping pastry wafer lemon drops biscuit powder. Pudding halvah danish chocolate cake apple pie. Macaroon icing soufflé cupcake sweet roll oat cake tootsie roll marzipan jujubes. Danish sesame snaps chocolate cake pastry biscuit cotton candy cupcake chocolate cake. Jelly beans chupa chups jelly-o croissant bear claw. Soufflé powder icing brownie tart gummi bears apple pie ice cream cupcake. Dragée lollipop danish cheesecake pie.'
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() *text.length);
    
    //empty
    if(isNaN(value) || value <= 0 || value > 10){
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else{
        let tempText = text.slice(0,value);
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        })
        .join("");
        result.innerHTML = tempText;

    }

});