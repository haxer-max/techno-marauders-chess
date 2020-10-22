export default function timer(counttime){
    // Update the count down every 1 second
    var x = setInterval(function() {
  
    // Find the distance count down date
    var distance = counttime;
  
    // Time calculations for minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

    }, 1000);
}