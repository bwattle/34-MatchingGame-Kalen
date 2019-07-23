
// Timer code start
var clearTime;
var seconds = 0, minutes = 0, hours = 0;
var secs, mins, gethours;

//Timer start function
function startWatch() {
    /* check if seconds is equal to 60 and add a +1 to minutes, and set seconds to 0 */
    if (seconds === 60) {
        seconds = 0;
        minutes = minutes + 1;
    }
    /* you use the javascript tenary operator to format how the minutes should look and add 0 to minutes if less than 10 */
    mins = (minutes < 10) ? ('0' + minutes + ': ') : (minutes + ': ');
    /* check if minutes is equal to 60 and add a +1 to hours set minutes to 0 */
    if (minutes === 60) {
        minutes = 0;
        hours = hours + 1;
    }
    /* you use the javascript tenary operator to format how the hours should look and add 0 to hours if less than 10 */
    gethours = (hours < 10) ? ('0' + hours + ': ') : (hours + ': ');
    secs = (seconds < 10) ? ('0' + seconds) : (seconds);
    // display the stopwatch
    var time = gethours + mins + secs;
    $('.container').find('.timer').html(time);
    /* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */
    seconds++;
    /* call the setTimeout( ) to keep the timer alive ! */
    clearTime = setTimeout("startWatch( )", 1000);
}

// Function used to start the timer
function startTime() {
    /* check if seconds, minutes, and hours are equal to zero and start the timer*/
    if (seconds === 0 && minutes === 0 && hours === 0) {
        startWatch();
    }
}

// function to stop the time
function stopTime() {
    /* check if seconds, minutes and hours are not equal to 0 */
    if (seconds !== 0 || minutes !== 0 || hours !== 0) {
        /* display the full time before reseting the stop watch */
        var time = gethours + mins + secs;
        $('.container').find('.timer').html(time);
        /*Add the time,moves and star rating to the congratulation modal only after game is complete*/
        var StarsModalElem = $('.modal-element').eq(2);
        var MovesModalElem = $('.modal-element').eq(1);
        var TimerModalElem = $('.modal-element').eq(0);
        $('.stars').clone().appendTo(StarsModalElem);
        $('.moves').clone().appendTo(MovesModalElem);
        $('.timer').clone().appendTo(TimerModalElem);
        /* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */
        clearTimeout(clearTime);
    }
}

